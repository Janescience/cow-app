import http from '@/constants/api';

async function getSearchQuery (opts = {}) {
    let query = "?";
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
        return http.get(`/food`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/food/${id}`);
    }
    create(payload){
        return http.post(`/food`,payload);
    }
    delete(id){
        return http.delete(`/food/${id}`);
    }
    deletes(ids){
        return http.post(`/food/delete/selected`,ids);
    }
    update(id,payload){
        return http.put(`/food/${id}`,payload);
    }
}

export default new FoodService();
