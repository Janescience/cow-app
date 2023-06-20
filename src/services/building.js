import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.status) {
        query = query + `status=${opts.status}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class BuildingService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/building`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/building/${id}`);
    }
    create(payload){
        if (payload.date) {
            payload.date = moment(new Date(payload.date)).format('YYYY-MM-DD') 
        }
        return http.post(`/building`,payload);
    }
    delete(id){
        return http.delete(`/building/${id}`);
    }
    update(id,payload){
        if (payload.startDate) {
            payload.startDate = moment(new Date(payload.startDate)).format('YYYY-MM-DD') 
        }
        if (payload.endDate) {
            payload.endDate = moment(new Date(payload.endDate)).format('YYYY-MM-DD') 
        }
        return http.put(`/building/${id}`,payload);
    }
}

export default new BuildingService();
