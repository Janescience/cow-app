import http from '@/constants/api';
import authHeader from './auth-header'
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.farm) {
        query = query + `farm=${opts.farm}&`;
    }
    if (opts.dateCurrent) {
        const dateNoTime = moment(new Date(opts.dateCurrent)).format('YYYY-MM-DD') 
        query = query + `dateCurrent=${dateNoTime}&`;
    }
    if (opts.dateNext) {
        const dateNoTime = moment(new Date(opts.dateNext)).format('YYYY-MM-DD') 
        query = query + `dateNext=${dateNoTime}&`;
    }
    if (opts.vaccine) {
        query = query + `vaccine=${opts.vaccine}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class ProtectionService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/protection`+query,{ headers : authHeader()})
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/protection/${id}`,{ headers : authHeader()});
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
        return http.delete(`/protection/${id}`,{ headers : authHeader()});
    }
    update(id,payload){
        return http.put(`/protection/${id}`,payload,{ headers : authHeader()});
    }
}

export default new ProtectionService();