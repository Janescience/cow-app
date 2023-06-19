import http from '@/constants/api';
import moment from 'moment';
async function getSearchQuery (opts = {}) {
  let query = "?";
  if (opts.status) {
      query = query + `status=${opts.status}&`;
  } 
  if (opts.createdAt) {
      const dateNoTime = moment(new Date(opts.createdAt)).format('YYYY-MM-DD') 
      query = query + `createdAt=${dateNoTime}&`;
  } 
  if (opts.type) {
      query = query + `type=${opts.type}&`;
  } 
  if (opts.message) {
    query = query + `message=${opts.message}&`; 
  }
  return opts ? query.replace(/&*$/, "") : "";
}

class NotificationService {
  async getLogs(search){
    const query = await getSearchQuery(search);
    return http.get(`/notification/logs`+query)
        .then(response => {
            return response;
        });
  }
  async getCalendar(search){
    const query = await getSearchQuery(search);
    return http.get(`/notification/calendar`+query)
        .then(response => {
            return response;
        });
  }
}

export default new NotificationService();
