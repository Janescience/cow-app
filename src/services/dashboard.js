import http from '@/constants/api';

class DashboardService{
    getCow(){
        return http.get('/dashboard/cow');
    }
    getFood(year){
        return http.get('/dashboard/food?year='+year);
    }
    getQuality(){
        return http.get('/dashboard/quality');
    }
    getMilks(year){
        return http.get('/dashboard/milks?year='+year);
    }
    getEvents(){
        return http.get('/dashboard/events');
    }
    getExpense(year){
        return http.get('/dashboard/expense?year='+year);
    }
    getExpenseAll(){
        return http.get('/dashboard/expense/all');
    }
    getIncome(year){
        return http.get('/dashboard/income?year='+year);
    }
    getIncomeAll(){
        return http.get('/dashboard/income/all');
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
