import http from '@/constants/api';

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.name) {
        query = query + `name=${opts.name}&`;
    } 
    if (opts.code) {
        query = query + `code=${opts.code}&`;
    } 
    if (opts.group) {
        query = query + `group=${opts.group}&`;
    } 
    if (opts.valueNumber) {
        query = query + `valueNumber=${opts.valueNumber}&`;
    } 
    if (opts.valueString) {
        query = query + `valueString=${opts.valueString}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}

class ParamService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/param`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/param/${id}`);
    }
    create(payload){
        return http.post(`/param`,payload);
    }
    delete(id){
        return http.delete(`/param/${id}`);
    }
    update(id,payload){
        return http.put(`/param/${id}`,payload);
    }
}

export default new ParamService();
