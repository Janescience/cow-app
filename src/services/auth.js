import http from '@/constants/api';
import TokenSerrvice from '@/services/token'

class AuthService {

    login(user) {
        return http
            .post('/auth/signin', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                console.log('response : ',response)    
                if (response.data) {
                    TokenSerrvice.setUser(response.data);
                }
                return response.data;
            })
    }

    logout() {
        TokenSerrvice.removeUser();
    }

    register(user) {
        return http.post("/auth/signup", {
            username: user.username,
            password: user.password,
            name: user.name
        })
    }

}

export default new AuthService();