import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.flag) {
        query = query + `flag=${opts.flag}&`;
    } 
    if (opts.sex) {
        query = query + `sex=${opts.sex}&`;
    } 
    if (opts.code) {
        query = query + `code=${opts.code}&`;
    } 
    if (opts.name) {
        query = query + `name=${opts.name}&`;
    } 
    if (opts.status) {
        query = query + `status=${opts.status}&`;
    } 
    if (opts.birthDate) {
        const dateNoTime = moment(new Date(opts.birthDate)).format('YYYY-MM-DD') 
        query = query + `birthDate=${dateNoTime}&`;
    } 
    if (opts.corral) {
        query = query + `corral=${opts.corral}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class CowService{
    async all(search){
        const query = await getSearchQuery(search);
        return http.get(`/cow`+query)
            .then(response => {
                return response;
            });
    }
    async ddl(search){
        const query = await getSearchQuery(search);
        return http.get(`/cow/ddl`+query)
            .then(response => {
                return response;
            });
    }
    get(id){
        return http.get(`/cow/${id}`);
    }
    getDetails(id){
        return http.get(`/cow/detail/${id}`);
    }
    create(payload){
        if (payload.birthDate) {
            payload.birthDate = moment(new Date(payload.birthDate)).format('YYYY-MM-DD')
        }
        if (payload.adopDate) {
            payload.adopDate = moment(new Date(payload.adopDate)).format('YYYY-MM-DD')
        }
        console.log('before create ')

        return http.post(`/cow`,payload);
    }
    delete(id){
        return http.delete(`/cow/${id}`);
    }
    async calGrade(){
        return http.get('/cow/grade');
    }
    update(id,payload){
        return http.post(`/cow/${id}`,payload);
    }
    upload(payload){
        if(payload.file){
            const formData = new FormData();
            formData.append("file", payload.file);
            return http.post(`/cow/upload/${payload._id}`,formData);
        }
    }
}

export default new CowService();
