import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.cow) {
        query = query + `cow=${opts.cow}&`;
    } 
    if (opts.year) {
        query = query + `year=${opts.year}&`;
    } 
    if (opts.month) {
        query = query + `month=${opts.month}&`;
    } 
    if (opts.date) {
        const dateNoTime = moment(new Date(opts.date)).format('YYYY-MM-DD') 
        query = query + `date=${dateNoTime}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class ReportService{
    async cow(search){
        const query = await getSearchQuery(search);
        return http.get(`/report/cow`+query,{responseType : 'blob'})
            .then(response => {
                return response;
            });
    }
    async rawMilk(search){
        const query = await getSearchQuery(search);
        return http.get(`/report/raw-milk`+query,{responseType : 'blob'})
            .then(response => {
                return response;
            });
    }
    
}

export default new ReportService();