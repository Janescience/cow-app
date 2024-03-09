import http from '@/constants/api';

class DashboardService{
    getCow(){
        return http.get('/dashboard/cow');
    }
    getFood(){
        return http.get('/dashboard/food');
    }
    getQuality(){
        return http.get('/dashboard/quality');
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

    getStatistics(){
        return http.get('/dashboard/statistics');
    }

    getTodoList(){
        return http.get('/dashboard/todolist');
    }
}

export default new DashboardService();
