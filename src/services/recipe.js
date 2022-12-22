import http from '@/constants/api';
import authHeader from './auth-header'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.farm) {
        query = query + `farm=${opts.farm}&`;
    }
    if (opts.recipe) {
        query = query + `recipe=${opts.recipe}&`;
    }
    if (opts.type) {
        query = query + `type=${opts.type}&`;
    }  
    return opts ? query.replace(/&*$/, "") : "";
}
class RecipeService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/recipe`+query,{ headers : authHeader()})
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/recipe/${id}`,{ headers : authHeader()});
    }
    create(payload){
        return http.post(`/recipe`,payload,{ headers : authHeader()});
    }
    delete(id){
        return http.delete(`/recipe/${id}`,{ headers : authHeader()});
    }
    update(id,payload){
        return http.put(`/recipe/${id}`,payload,{ headers : authHeader()});
    }
}

export default new RecipeService();