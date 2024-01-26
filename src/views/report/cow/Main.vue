<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="cow" 
        title="รายงานข้อมูลโค"
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="print"
        @view="view"  
        @reset="reset" 
        :forms="forms" 
        :search="search"
        :btnLoading="loading"
        :btnViewLoading="viewLoading"
        collapse
      />

      <Table
        v-if="items.length > 0"
        title="ข้อมูลโค" 
        perPage="20"
        :items="items" 
        :datas="datas" 
        :loading="viewLoading"
      />

    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import SectionMain from '@/components/SectionMain.vue';
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";

import Criteria from "@/components/CriteriaReport.vue";
import Table from "@/components/Table.vue";

import ReportService from '@/services/report'
import moment from 'moment'

import { status,quality,flag } from '@/constants/cow'


export default {
  data (){
    return {
      items : [],
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
      datas : [
        {
          label : "รหัส",
          class : 'text-center',
          value : 'code',
        },
        {
          label : "ชื่อ",
          value : 'name',
        },
        {
          label : "วันเกิด",
          class : 'text-center',
          value : 'birthDate',
          type : 'date'
        },
        {
          label : "วันที่นำมาเลี้ยง",
          class : 'text-center',
          value : 'adopDate',
          type : 'date'
        },
        {
          label : 'น้ำหนัก',
          value : 'weight',
        },
        {
          label : 'อายุ',
          value : 'age',
        },
        {
          label : "คอก",
          value : 'corral',
        },
        {
          label : "สถานะ",
          class : 'text-center',
          value : 'status',
        },
        {
          label : "พ่อพันธู์",
          class : 'text-center',
          value : 'dad',
        },
        {
          label : "แม่พันธุ์",
          class : 'text-center',
          value : 'mom',
        },
        {
          label : "น้ำนมเฉลี่ย/วัน",
          class : 'text-center',
          value : 'milkAvg',
          type : 'number',
        },
        {
          label : "น้ำนมทั้งหมด",
          class : 'text-center',
          value : 'milkSum',
          type : 'number',
        },
        {
          label : "คุณภาพนม",
          class : 'text-center',
          value : 'quality',
        },
        {
          label : "ความคุ้มค่า",
          class : 'text-center',
          value : 'level',
        },
        {
          label : "FLAG",
          class : 'text-center',
          value : 'flag',
        },
        {
          label : "หมายเหตุ",
          value : 'remark',
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
      viewLoading : false,
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    SectionTitleBarSub,
    Criteria,
    Table
  },
  methods : {
    async view(search){
      this.viewLoading = true
      const resp = await ReportService.cowView(search);
      this.items = []
      if(resp.data){
        this.items = resp.data.cows
      }
      this.viewLoading = false
    },
    async print(){
      this.loading = true
      const resp = await ReportService.cowExport(this.search);
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
      this.items = []
      this.search = {}
    },
  }
}
</script>
