<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="cow" 
        title="ข้อมูลโค"
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
import moment from 'moment'

import { status,quality,flag } from '@/constants/cow'


export default {
  data (){
    return {
      forms : [
        {
          label : 'โค',
          value : 'cow',
          type : 'ddl',
          module : 'cow'
        },
        {
          label : 'สถานะ',
          value : 'status',
          options : status()
        },
        {
          label : 'คุณภาพน้ำนม',
          value : 'quality',
          options : quality()
        },
        {
          label : 'คอก',
          value : 'corral',
          icon : 'barn',
        },
        {
          label : 'Flag',
          value : 'flag',
          options : flag()
        },  
      ],
      search : {
        cow : null,
        status : '',
        quality : '',
        corral : null,
        flag : ''
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
        link.setAttribute('download', 'ข้อมูลโค '+moment().format('DDMMYYYYHHmm')+'.xlsx');
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
