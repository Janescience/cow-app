import http from '@/constants/api';
import authHeader from './auth-header'
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.farm) {
        query = query + `farm=${opts.farm}&`;
    }
    if (opts.cows) {
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
class ProtectionService{
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
        if (payload.dateCurrent) {
            payload.dateCurrent = moment(new Date(payload.dateCurrent)).format('YYYY-MM-DD') 
        }
        if (payload.dateNext) {
            payload.dateNext = moment(new Date(payload.dateNext)).format('YYYY-MM-DD') 
        }
        return http.post(`/protection`,payload,{ headers : authHeader()});
    }
    delete(id){
        return http.delete(`/cow/${id}`,{ headers : authHeader()});
    }
    update(id,payload){
        return http.put(`/cow/${id}`,payload,{ headers : authHeader()});
    }
}

export default new ProtectionService();