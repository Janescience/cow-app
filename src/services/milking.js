import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.cow) {
        query = query + `cow=${opts.cow}&`;
    }
    if (opts.milk) {
        query = query + `milk=${opts.milk}&`;
    }
    if (opts.date) {
        // const dateNoTime = moment(new Date(opts.date)).format('YYYY-MM-DD') 
        query = query + `date=${opts.date}&`;
    } 
    if (opts.year) {
        query = query + `year=${opts.year}&`;
    } 
    if (opts.month) {
        query = query + `month=${opts.month}&`;
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
        return http.get(`/milking`+query)
            .then(response => {
                return response;
            });
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

    mock(){
        return http.get(`/milking/mock`);
    }
}

export default new MilkingService();
