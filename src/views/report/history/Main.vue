<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="doctor" 
        title="ประวัติและคุณลักษณะของวัว"
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="exportExcel" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
        btnSubmitLabel="ออกรายงาน"
      />

      <div v-html="excelHtml"></div>
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

import * as XLSX from 'xlsx';

export default {
  data (){
    return {
      excelHtml : "",
      forms : [
        {
          label : 'โค',
          value : 'cow',
          type : 'ddl',
          module : 'cow'
        },
        {
          label : 'วันที่รักษา',
          value : 'date',
          icon : 'calendar',
          type : 'date'
        },  
      ],
      search : {
        cow : null,
        date : null,
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
      const resp = await ReportService.cow(search);
      if(resp.data){
        const url = window.URL.createObjectURL(new Blob([resp.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'cows.xlsx');
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
