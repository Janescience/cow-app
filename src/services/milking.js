import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.cow) {
        query = query + `cow=${opts.cow}&`;
    }
    if (opts.date) {
        // const dateNoTime = moment(new Date(opts.date)).format('YYYY-MM-DD') 
        query = query + `date=${opts.date}&`;
    } 
    if (opts.quantity) {
        query = query + `quantity=${opts.quantity}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class MilkingService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/milking/all`+query)
            .then(response => {
                return response;
            });
    }
    async get(search){
        const query = await getSearchQuery(search);
        return http.get(`/milking`+query);
    }
    create(payload){
        if (payload.date) {
            payload.date = moment(new Date(payload.date)).format('YYYY-MM-DD') 
        } 
        return http.post(`/milking`,payload);
    }
    delete(id){
        return http.delete(`/milking/${id}`);
    }
    update(id,payload){
        return http.put(`/milking/${id}`,payload);
    }
}

export default new MilkingService();