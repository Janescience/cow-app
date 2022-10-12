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
    create(payload){
        if (payload.birthDate) {
            payload.birthDate = moment(new Date(payload.birthDate)).format('YYYY-MM-DD') 
        }
        if (payload.loginDate) {
            payload.loginDate = moment(new Date(payload.loginDate)).format('YYYY-MM-DD') 
        }
        if (payload.estrusDate) {
            payload.estrusDate = moment(new Date(payload.estrusDate)).format('YYYY-MM-DD') 
        }
        if (payload.matingDate) {
            payload.matingDate = moment(new Date(payload.matingDate)).format('YYYY-MM-DD') 
        }
        if (payload.checkDate) {
            payload.checkDate = moment(new Date(payload.checkDate)).format('YYYY-MM-DD') 
        } 
        return http.post(`/birth`,payload,{ headers : authHeader()});
    }
    delete(id){
        return http.delete(`/birth/${id}`,{ headers : authHeader()});
    }
    update(id,payload){
        return http.put(`/birth/${id}`,payload,{ headers : authHeader()});
    }
}

export default new BirthService();