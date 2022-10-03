import http from '@/constants/api';
import authHeader from './auth-header'
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.cow) {
        query = query + `cow=${opts.cow}&`;
    }
    if (opts.date) {
        const dateNoTime = moment(new Date(opts.date)).format('YYYY-MM-DD') 
        query = query + `date=${dateNoTime}&`;
    } 
    if (opts.quantity) {
        query = query + `quantity=${opts.quantity}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class MilkingService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/milking`+query,{ headers : authHeader()})
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/milking/${id}`,{ headers : authHeader()});
    }
    create(payload){
        if (payload.date) {
            payload.date = moment(new Date(payload.date)).format('YYYY-MM-DD') 
        } 
        return http.post(`/milking`,payload,{ headers : authHeader()});
    }
    delete(id){
        return http.delete(`/milking/${id}`,{ headers : authHeader()});
    }
    update(id,payload){
        return http.put(`/milking/${id}`,payload,{ headers : authHeader()});
    }
}

export default new MilkingService();