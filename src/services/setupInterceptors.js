import http from '@/constants/api';
import TokenService from '@/services/token'
import EventBus from '@/utils/event-bus'

const setup = (store) => {

    http.interceptors.request.use(
        (config) => {
            const token = TokenService.getLocalAccessToken();
            if (token) {
                config.headers["x-access-token"] = token; // for Node.js Express back-end
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    http.interceptors.response.use(
        (res) => {
          return res;
        },
        async (err) => {
          const originalConfig = err.config;
    
          if (originalConfig.url !== "/auth/signin" && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
              originalConfig._retry = true;
    
              try {
                const rs = await http.post("/auth/refreshToken", {
                  refreshToken: TokenService.getLocalRefreshToken(),
                });
    
                const { accessToken } = rs.data;
    
                store.dispatch('auth/refreshToken', accessToken);
                TokenService.updateLocalAccessToken(accessToken);
    
                return http(originalConfig);
              } catch (_error) {
                EventBus.dispatch("logout");
                return Promise.reject(_error);
              }
            }
          }
    
          return Promise.reject(err);
        }
      );
};

export default setup;
