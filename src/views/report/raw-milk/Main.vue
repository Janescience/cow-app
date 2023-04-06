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
        :collapse="false"
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

import { Toast } from "@/utils/alert";
import moment from "moment";

export default {
  data (){
    return {
      forms : [
        {
          label : 'ปี',
          value : 'year',
          type : 'number',
          required : true
        },
        {
          label : 'เดือน ตั้งแต่',
          value : 'monthFrom',
          type : 'number',
          required : true
        },
        {
          label : 'เดือน ถึง',
          value : 'monthTo',
          type : 'number',
          required : true
        },  
      ],
      search : {
        year : moment().format('YYYY'),
        monthFrom : moment().subtract(1,'months').format('MM'),
        monthTo : moment().format('MM'),
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
        link.setAttribute('download', 'ผลลิตน้ำนมดิบ ปี '+this.search.year+' '+moment().format('DDMMYYYYHHmm')+'.xlsx');
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
      this.loading = false
    },
    reset(){
      this.search.cow = null
      this.search.date = null
    },
  }
}
</script>
