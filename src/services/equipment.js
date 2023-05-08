import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.status) {
        query = query + `status=${opts.status}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class EquipmentService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/equipment`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/equipment/${id}`);
    }
    create(payload){
        if (payload.startDate) {
            payload.startDate = moment(new Date(payload.startDate)).format('YYYY-MM-DD') 
        }
        if (payload.endDate) {
            payload.endDate = moment(new Date(payload.endDate)).format('YYYY-MM-DD') 
        }
        return http.post(`/equipment`,payload);
    }
    delete(id){
        return http.delete(`/equipment/${id}`);
    }
    update(id,payload){
        if (payload.startDate) {
            payload.startDate = moment(new Date(payload.startDate)).format('YYYY-MM-DD') 
        }
        if (payload.endDate) {
            payload.endDate = moment(new Date(payload.endDate)).format('YYYY-MM-DD') 
        }
        return http.put(`/equipment/${id}`,payload);
    }
}

export default new EquipmentService();
