import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.cow) {
        query = query + `cow=${opts.cow}&`;
    } 
    if (opts.date) {
        const dateNoTime = moment(new Date(opts.date)).format('YYYY-MM-DD') 
        query = query + `date=${dateNoTime}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class WorkerService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/worker`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/worker/${id}`);
    }
    create(payload){
        if (payload.date) {
            payload.date = moment(new Date(payload.date)).format('YYYY-MM-DD') 
        }
        return http.post(`/worker`,payload);
    }
    delete(id){
        return http.delete(`/worker/${id}`);
    }
    update(id,payload){
        if (payload.date) {
            payload.date = moment(new Date(payload.date)).format('YYYY-MM-DD') 
        }
        return http.put(`/worker/${id}`,payload);
    }
}

export default new WorkerService();
