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
    if (opts.birthDate) {
        const dateNoTime = moment(new Date(opts.birthDate)).format('YYYY-MM-DD') 
        query = query + `birthDate=${dateNoTime}&`;
    }
    if (opts.sex) {
        query = query + `sex=${opts.sex}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}

class BirthService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/birth`+query,{ headers : authHeader()})
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/birth/${id}`,{ headers : authHeader()});
    }
    create(id,payload){
        if (payload.birthDate) {
            payload.birthDate = moment(new Date(payload.birthDate)).format('YYYY-MM-DD') 
        }
        return http.post(`/birth/${id}`,payload,{ headers : authHeader()});
    }
    delete(id){
        return http.delete(`/birth/${id}`,{ headers : authHeader()});
    }
    update(id,payload){
        if (payload.birthDate) {
            payload.birthDate = moment(new Date(payload.birthDate)).format('YYYY-MM-DD') 
        }
        return http.put(`/birth/${id}`,payload,{ headers : authHeader()});
    }
}

export default new BirthService();