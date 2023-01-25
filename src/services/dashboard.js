import http from '@/constants/api';

class DashboardService{
    get(farmId){
        return http.get('/dashboard?farm='+farmId);
    }
}

export default new DashboardService();