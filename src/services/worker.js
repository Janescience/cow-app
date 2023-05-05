import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.status) {
        query = query + `status=${opts.status}&`;
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
        if (payload.startDate) {
            payload.startDate = moment(new Date(payload.startDate)).format('YYYY-MM-DD') 
        }
        if (payload.endDate) {
            payload.endDate = moment(new Date(payload.endDate)).format('YYYY-MM-DD') 
        }
        return http.post(`/worker`,payload);
    }
    delete(id){
        return http.delete(`/worker/${id}`);
    }
    update(id,payload){
        if (payload.startDate) {
            payload.startDate = moment(new Date(payload.startDate)).format('YYYY-MM-DD') 
        }
        if (payload.endDate) {
            payload.endDate = moment(new Date(payload.endDate)).format('YYYY-MM-DD') 
        }
        return http.put(`/worker/${id}`,payload);
    }
}

export default new WorkerService();
