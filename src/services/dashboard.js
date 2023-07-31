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
    getRawMilkDescSort(){
        return http.get('/dashboard/rawMilkDescSort');
    }
    getRawMilkAscSort(){
        return http.get('/dashboard/rawMilkAscSort');
    }
    getCorrals(){
        return http.get('/dashboard/corrals');
    }
}

export default new DashboardService();
