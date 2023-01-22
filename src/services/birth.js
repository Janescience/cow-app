import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.farm) {
        query = query + `farm=${opts.farm}&`;
    }
    if (opts.cow) {
        query = query + `cow=${opts.cow}&`;
    } 
    if (opts.birthDate) {
        const dateNoTime = moment(new Date(opts.birthDate)).format('YYYY-MM-DD') 
        query = query + `birthDate=${dateNoTime}&`;
    }
    if (opts.sex) {
        query = query + `sex=${opts.sex}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}

class BirthService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/birth`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/birth/${id}`);
    }
    create(id,payload){
        if (payload.birthDate) {
            payload.birthDate = moment(new Date(payload.birthDate)).format('YYYY-MM-DD') 
        }
        return http.post(`/birth/${id}`,payload);
    }
    delete(id){
        return http.delete(`/birth/${id}`);
    }
    update(id,payload){
        if (payload.birthDate) {
            payload.birthDate = moment(new Date(payload.birthDate)).format('YYYY-MM-DD') 
        }
        return http.put(`/birth/${id}`,payload);
    }
}

export default new BirthService();