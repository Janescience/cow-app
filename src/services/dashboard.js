import http from '@/constants/api';

class DashboardService{
    getCow(){
        return http.get('/dashboard/cow');
    }
    getMilks(){
        return http.get('/dashboard/milks');
    }
    getEvents(){
        return http.get('/dashboard/events');
    }
    getExpense(){
        return http.get('/dashboard/expense');
    }
    getIncome(){
        return http.get('/dashboard/income');
    }
    getRawMilkSort(){
        return http.get('/dashboard/rawMilkSort');
    }
}

export default new DashboardService();
