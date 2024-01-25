<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="water" 
        title="ผลผลิตน้ำนมดิบ"
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="exportExcel" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
        btnSubmitLabel="ออกรายงาน"
        :btnLoading="loading"
        collapse
      />
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import SectionMain from '@/components/SectionMain.vue';
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";

import Criteria from "@/components/Criteria.vue";

import ReportService from '@/services/report'
import { months,years } from '@/constants/date'

import { Toast } from "@/utils/alert";
import moment from "moment";

export default {
  data (){
    return {
      forms : [
        {
          label : 'ปี',
          value : 'year',
          options : years(),
          required : true
        },
        {
          label : 'ตั้งแต่เดือน',
          value : 'monthFrom',
          options : months(),
          required : true
        },
        {
          label : 'ถึงเดือน',
          value : 'monthTo',
          options : months(),
          required : true
        },  
      ],
      search : {
        year : new Date().getFullYear(),
        monthFrom : new Date().getMonth() + 1,
        monthTo : new Date().getMonth() + 1,
      },
      loading : false,
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    SectionTitleBarSub,
    Criteria
  },
  methods : {
    async exportExcel(search){
      this.loading = true
      const resp = await ReportService.rawMilk(search);
      console.log(resp)
      if(resp.data.size <= 4){
        Toast.fire({
          icon: 'warning',
          title: 'ไม่พบข้อมูล'
        })
      }else{
        const url = window.URL.createObjectURL(new Blob([resp.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'ผลผลิตน้ำนมดิบ ปี '+this.search.year+' '+moment().format('DDMMYYYYHHmm')+'.xlsx');
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
      this.loading = false
    },
    reset(){
      this.search.year = new Date().getFullYear()
      this.search.monthForm = new Date().getMonth() + 1
      this.search.monthTo = new Date().getMonth() + 1
    },
  }
}
</script>
