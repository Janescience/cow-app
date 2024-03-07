<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="reproduction" 
        title="รายงานการผสมพันธุ์"
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="print"
        @view="view" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
        :btnSubmitLoading="loading"
        :btnViewLoading="viewLoading"
        collapse
      />

      <Table
        v-if="items.length > 0"
        title="ข้อมูลการผสมพันธุ์" 
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
import ReproductionService from '@/services/reproduction'

import moment from 'moment'

import { reproductStatus,reproductResult } from '@/constants/reproduct'


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
          options : reproductStatus()
        },
        {
          label : 'ผล',
          value : 'result',
          options : reproductResult()
        },
        {
          label : 'วันที่เข้าระบบสืบพันธุ์',
          value : 'loginDate',
          icon : 'calendar',
          type : 'date'
        },
        {
          label : 'วันที่เป็นสัด',
          value : 'estrusDate',
          icon : 'calendar',
          type : 'date'
        },
        {
          label : 'วันที่ผสมพันธุ์',
          value : 'matingDate',
          icon : 'calendar',
          type : 'date'
        },
        {
          label : 'วันที่ตรวจท้อง',
          value : 'checkDate',
          icon : 'calendar',
          type : 'date'
        },
      ],
      datas : [
        {
          label : "รหัสโค",
          value : 'cow.code',
        },
        {
          label : "ชื่อโค",
          value : 'cow.name',
        },
        {
          label : "ครั้งที่",
          class : 'text-center',
          value : 'seq',
        },
        {
          label : "วันที่เข้าระบบสืบพันธุ์",
          class : 'text-center',
          value : 'loginDate',
          type : 'date',
        },
        {
          label : "พ่อพันธุ์",
          value : 'dad',
        },
        {
          label : 'ผล',
          value : 'result',
        },
        {
          label : 'สถานะ',
          value : 'status',
        },
        {
          label : "การรักษา",
          value : 'howTo',
        },
        {
          label : "วันที่เป็นสัด",
          class : 'text-center',
          value : 'estrusDate',
          type : 'date',
        },
        {
          label : "วันที่ผสมพันธุ์",
          class : 'text-center',
          value : 'matingDate',
          type : 'date',
        },
        {
          label : "วันที่ตรวจท้อง",
          class : 'text-center',
          value : 'checkDate',
          type : 'date',
        },
        {
          label : "วันที่ตั้งครรภ์",
          class : 'text-center',
          value : 'pregnantDate',
          type : 'date',
        },
        {
          label : "เพศ",
          class : 'text-center',
          value : 'sex',
        },
        {
          label : "วันที่คลอด",
          class : 'text-center',
          value : 'birthDate',
          type : 'date',
        },
        {
          label : "รกค้าง",
          class : 'text-center',
          value : 'overgrown',
        },
        {
          label : "วันที่ใช้ยาขับ",
          class : 'text-center',
          value : 'drugDate',
          type : 'date',
        },
        {
          label : "วันที่ล้างมดลูก",
          class : 'text-center',
          value : 'washDate',
          type : 'date',
        },
        {
          label : "อายุครรภ์",
          class : 'text-center',
          value : 'gestAge',
        },
        {
          label : "รหัสลูกวัว",
          class : 'text-center',
          value : 'calfCode',
        },
        {
          label : "ชื่อลูกวัว",
          class : 'text-center',
          value : 'calfName',
        },
      ],
      search : {
        cow : null,
        loginDate : null,
        estrusDate : null,
        matingDate : null,
        checkDate : null,
        status : "",
        result : "",
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
      const resp = await ReportService.reproductView(search);
      this.items = []
      if(resp.data){
        this.items = resp.data.reproducts
      }
      this.viewLoading = false
    },
    async print(){
      this.loading = true
      const resp = await ReportService.reproductExport(this.search);
      if(resp.data){
        const url = window.URL.createObjectURL(new Blob([resp.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'ข้อมูลการผสมพันธุ์ '+moment().format('DDMMYYYYHHmm')+'.xlsx');
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
      this.loading = false
    },
    reset(){
      this.items = []
      this.search.cow = null
      this.search.date = null
    },
  }
}
</script>
