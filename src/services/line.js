import http from '@/constants/api';
import authHeader from './auth-header';

const module = '/line';

class LineService {
  notify(data) {
    return http.post(module+'/notify', data,{ headers: authHeader() });
  }
}

export default new LineService();