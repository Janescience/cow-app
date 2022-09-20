import http from '@/constants/api';
import { useMainStore } from '@/stores/main.js'
import { setCurrentUser } from '@/utils'

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
                    setCurrentUser(response.data)
                    useMainStore().setUser(response.data);
                }
                return response.data;
            })
    }

    logout() {
        setCurrentUser(null)
        useMainStore().setUser(null);
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