import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.cow) {
        query = query + `cow=${opts.cow}&`;
    } 
    if (opts.loginDate) {
        const dateNoTime = moment(new Date(opts.loginDate)).format('YYYY-MM-DD') 
        query = query + `loginDate=${dateNoTime}&`;
    }
    if (opts.estrusDate) {
        const dateNoTime = moment(new Date(opts.estrusDate)).format('YYYY-MM-DD') 
        query = query + `estrusDate=${dateNoTime}&`;
    }
    if (opts.matingDate) {
        const dateNoTime = moment(new Date(opts.matingDate)).format('YYYY-MM-DD') 
        query = query + `matingDate=${dateNoTime}&`;
    }
    if (opts.checkDate) {
        const dateNoTime = moment(new Date(opts.checkDate)).format('YYYY-MM-DD') 
        query = query + `checkDate=${dateNoTime}&`;
    }  
    if (opts.status) {
        query = query + `status=${opts.status}&`;
    } 
    if (opts.result) {
        query = query + `result=${opts.result}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class ReproductService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/reproduction`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/reproduction/${id}`);
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
        return http.post(`/reproduction`,payload);
    }
    delete(id){
        return http.delete(`/reproduction/${id}`);
    }
    update(id,payload){
        return http.put(`/reproduction/${id}`,payload);
    }
}

export default new ReproductService();