import http from '@/constants/api';
import authHeader from './auth-header'
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.farm) {
        query = query + `farm=${opts.farm}&`;
    }
    if (opts.flag) {
        query = query + `flag=${opts.flag}&`;
    } 
    if (opts.code) {
        query = query + `code=${opts.code}&`;
    } 
    if (opts.name) {
        query = query + `name=${opts.name}&`;
    } 
    if (opts.status) {
        query = query + `status=${opts.status}&`;
    } 
    if (opts.birthDate) {
        const dateNoTime = moment(new Date(opts.birthDate)).format('YYYY-MM-DD') 
        query = query + `birthDate=${dateNoTime}&`;
    } 
    if (opts.corral) {
        query = query + `corral=${opts.corral}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class CowService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/cow`+query,{ headers : authHeader()})
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/cow/${id}`,{ headers : authHeader()});
    }
    create(payload){
        if (payload.birthDate) {
            payload.birthDate = moment(new Date(payload.birthDate)).format('YYYY-MM-DD') 
        }
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