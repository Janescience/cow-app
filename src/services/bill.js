import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.status) {
        query = query + `status=${opts.status}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class MaintenanceService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/bill`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/bill/${id}`);
    }
    create(payload){
        if (payload.date) {
            payload.date = moment(new Date(payload.date)).format('YYYY-MM-DD') 
        }
        return http.post(`/bill`,payload);
    }
    delete(id){
        return http.delete(`/bill/${id}`);
    }
    update(id,payload){
        if (payload.date) {
            payload.date = moment(new Date(payload.date)).format('YYYY-MM-DD') 
        }
        return http.put(`/bill/${id}`,payload);
    }
}

export default new MaintenanceService();
