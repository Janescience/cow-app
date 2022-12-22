import http from '@/constants/api';
import authHeader from './auth-header'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.farm) {
        query = query + `farm=${opts.farm}&`;
    }
    if (opts.corral) {
        query = query + `corral=${opts.corral}&`;
    } 
    if (opts.recipe) {
        query = query + `recipe=${opts.recipe}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class FoodService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/food`+query,{ headers : authHeader()})
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/food/${id}`,{ headers : authHeader()});
    }
    create(payload){
        return http.post(`/food`,payload,{ headers : authHeader()});
    }
    delete(id){
        return http.delete(`/food/${id}`,{ headers : authHeader()});
    }
    update(id,payload){
        return http.put(`/food/${id}`,payload,{ headers : authHeader()});
    }
}

export default new FoodService();