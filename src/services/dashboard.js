import http from '@/constants/api';

class DashboardService{
    get(){
        return http.get('/dashboard');
    }
}

export default new DashboardService();