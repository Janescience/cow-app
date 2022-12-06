import http from '@/constants/api';
import authHeader from './auth-header'
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.farm) {
        query = query + `farm=${opts.farm}&`;
    }
    if (opts.cow) {
        query = query + `cow=${opts.cow}&`;
    } 
    if (opts.date) {
        const dateNoTime = moment(new Date(opts.date)).format('YYYY-MM-DD') 
        query = query + `date=${dateNoTime}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class HealService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/heal`+query,{ headers : authHeader()})
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/heal/${id}`,{ headers : authHeader()});
    }
    create(payload){
        if (payload.date) {
            payload.date = moment(new Date(payload.date)).format('YYYY-MM-DD') 
        }
        return http.post(`/heal`,payload,{ headers : authHeader()});
    }
    delete(id){
        return http.delete(`/heal/${id}`,{ headers : authHeader()});
    }
    update(id,payload){
        if (payload.date) {
            payload.date = moment(new Date(payload.date)).format('YYYY-MM-DD') 
        }
        return http.put(`/heal/${id}`,payload,{ headers : authHeader()});
    }
}

export default new HealService();