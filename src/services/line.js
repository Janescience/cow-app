import http from '@/constants/api';

const module = '/line';

class LineService {
  notify(data) {
    return http.post(module+'/notify', data);
  }
}

export default new LineService();