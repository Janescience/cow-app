import http from '@/constants/api';

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.code) {
        query = query + `code=${opts.code}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class NotificationParamService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/notiparam`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/notiparam/${id}`);
    }
    update(id,payload){
        return http.put(`/notiparam/${id}`,payload);
    }
}

export default new NotificationParamService();