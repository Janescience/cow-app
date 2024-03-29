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
    if (opts.monthFrom) {
        query = query + `monthFrom=${opts.monthFrom}&`;
    }
    if (opts.monthTo) {
        query = query + `monthTo=${opts.monthTo}&`;
    }
    if (opts.dateFrom) {
        const dateNoTime = moment(new Date(opts.dateFrom)).format('YYYY-MM-DD') 
        query = query + `dateFrom=${dateNoTime}&`;
    }
    if (opts.dateTo) {
        const dateNoTime = moment(new Date(opts.dateTo)).format('YYYY-MM-DD') 
        query = query + `dateTo=${dateNoTime}&`;
    } 
    if (opts.date) {
        const dateNoTime = moment(new Date(opts.date)).format('YYYY-MM-DD') 
        query = query + `date=${dateNoTime}&`;
    }
    if (opts.loginDate) {
        const dateNoTime = moment(new Date(opts.loginDate)).format('YYYY-MM-DD') 
        query = query + `loginDate=${dateNoTime}&`;
    }
    if (opts.estrustDate) {
        const dateNoTime = moment(new Date(opts.estrustDate)).format('YYYY-MM-DD') 
        query = query + `estrustDate=${dateNoTime}&`;
    }
    if (opts.matingDate) {
        const dateNoTime = moment(new Date(opts.matingDate)).format('YYYY-MM-DD') 
        query = query + `matingDate=${dateNoTime}&`;
    }
    if (opts.checkDate) {
        const dateNoTime = moment(new Date(opts.checkDate)).format('YYYY-MM-DD') 
        query = query + `checkDate=${dateNoTime}&`;
    }
    if (opts.status) {
        query = query + `status=${opts.status}&`;
    }
    if (opts.result) {
        query = query + `result=${opts.result}&`;
    }
    if (opts.quality) {
        query = query + `quality=${opts.quality}&`;
    }
    if (opts.corral) {
        query = query + `corral=${opts.corral}&`;
    } 
    if (opts.flag) {
        query = query + `flag=${opts.flag}&`;
    } 
    return opts ? query.replace(/&*$/, "") : "";
}
class ReportService{
    async cowExport(search){
        const query = await getSearchQuery(search);
        return http.get(`/report/cow`+query,{responseType : 'blob'})
            .then(response => {
                return response;
            });
    }

    async cowView(search){
        const query = await getSearchQuery(search);
        return http.get(`/report/view/cow`+query)
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

    async reproductExport(search){
        const query = await getSearchQuery(search);
        return http.get(`/report/reproduct`+query,{responseType : 'blob'})
            .then(response => {
                return response;
            });
    }

    async reproductView(search){
        const query = await getSearchQuery(search);
        return http.get(`/report/view/reproduct`+query)
            .then(response => {
                return response;
            });
    }

    async healExport(search){
        const query = await getSearchQuery(search);
        return http.get(`/report/heal`+query,{responseType : 'blob'})
            .then(response => {
                return response;
            });
    }

    async healView(search){
        const query = await getSearchQuery(search);
        return http.get(`/report/view/heal`+query)
            .then(response => {
                return response;
            });
    }
    
}

export default new ReportService();
