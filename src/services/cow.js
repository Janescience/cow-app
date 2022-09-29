import http from '@/constants/api';
import authHeader from './auth-header'

class CowService{
    all(){
        return http.get(`/cow`,{ headers : authHeader()})
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/cow/${id}`,{ headers : authHeader()});
    }
    create(payload){
        return http.post(`/cow`,payload,{ headers : authHeader()});
    }
    delete(id){
        return http.delete(`/cow/${id}`,{ headers : authHeader()});
    }
    update(id,payload){
        return http.put(`/cow/${id}`,payload,{ headers : authHeader()});
    }
}

export default new CowService();