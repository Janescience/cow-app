import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.worker) {
        query = query + `worker=${opts.worker}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class SalaryService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/salary`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/salary/${id}`);
    }
    create(payload){
        return http.post(`/salary`,payload);
    }
    delete(id){
        return http.delete(`/salary/${id}`);
    }
    update(id,payload){
        return http.put(`/salary/${id}`,payload);
    }
}

export default new SalaryService();
