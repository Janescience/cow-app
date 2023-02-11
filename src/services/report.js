import http from '@/constants/api';
import moment from 'moment'

async function getSearchQuery (opts = {}) {
    let query = "?";
    if (opts.cow) {
        query = query + `cow=${opts.cow}&`;
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
    
}

export default new ReportService();