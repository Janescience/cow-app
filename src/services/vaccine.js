import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
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
class VaccineService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/vaccine`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/vaccine/${id}`);
    }
    create(payload){
        if (payload.dateCurrent) {
            payload.dateCurrent = moment(new Date(payload.dateCurrent)).format('YYYY-MM-DD') 
        }
        if (payload.dateNext) {
            payload.dateNext = moment(new Date(payload.dateNext)).format('YYYY-MM-DD') 
        }
        return http.post(`/vaccine`,payload);
    }
    delete(id){
        return http.delete(`/vaccine/${id}`);
    }
    update(id,payload){
        return http.put(`/vaccine/${id}`,payload);
    }
}

export default new VaccineService();
