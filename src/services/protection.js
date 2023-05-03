import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.date) {
        const dateNoTime = moment(new Date(opts.date)).format('YYYY-MM-DD') 
        query = query + `date=${dateNoTime}&`;
    }
    if (opts.vaccine) {
        query = query + `vaccine=${opts.vaccine}&`;
    } 
    if (opts.cows) {
        query = query + `cows=${opts.cows}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class ProtectionService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/protection`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/protection/${id}`);
    }
    create(payload){
        if (payload.date) {
            payload.date = moment(new Date(payload.date)).format('YYYY-MM-DD') 
        }
        return http.post(`/protection`,payload);
    }
    delete(id){
        return http.delete(`/protection/${id}`);
    }
    update(id,payload){
        return http.put(`/protection/${id}`,payload);
    }
}

export default new ProtectionService();
