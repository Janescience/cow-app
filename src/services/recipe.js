import http from '@/constants/api';

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.farm) {
        query = query + `farm=${opts.farm}&`;
    }
    if (opts.type) {
        query = query + `type=${opts.type}&`;
    } 
    if (opts.recipe) {
        query = query + `recipe=${opts.recipe}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class RecipeService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/recipe`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/recipe/${id}`);
    }
    create(payload){
        return http.post(`/recipe`,payload);
    }
    delete(id){
        return http.delete(`/recipe/${id}`);
    }
    update(id,payload){
        return http.put(`/recipe/${id}`,payload);
    }
}

export default new RecipeService();

