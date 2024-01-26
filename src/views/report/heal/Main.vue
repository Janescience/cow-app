<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="doctor" 
        title="รายงานการรักษา"
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
        title="ข้อมูลการรักษา" 
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

import { Toast } from "@/utils/alert";


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
          label : 'วันที่รักษาตั้งแต่',
          value : 'dateFrom',
          icon : 'calendar',
          type : 'date'
        }, 
        {
          label : 'วันที่รักษาถึง',
          value : 'dateTo',
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
          label : "วันที่รักษา",
          class : 'text-center',
          value : 'date',
          type : 'date',
        },
        {
          label : "อาการ/โรค",
          value : 'disease',
        },
        {
          label : 'การรักษา',
          value : 'method',
        },
        {
          label : 'ค่ารักษา',
          class : 'text-right',
          value : 'amount',
          type : 'currency'
        },
        {
          label : "ผู้รักษา",
          value : 'healer',
        },
      ],
      search : {
        cow : null,
        dateFrom : null,
        dateTo : null,
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
      const resp = await ReportService.healView(search);
      this.items = []
      if(resp.data){
        if(resp.data.heals.length > 0){
          this.items = resp.data.heals
        }else{
          Toast.fire({
            icon: 'warning',
            title: 'ไม่พบข้อมูล'
          })
        }
      }
      this.viewLoading = false
    },
    async print(){
      this.loading = true
      const resp = await ReportService.healExport(this.search);
      if(resp.data){
        const url = window.URL.createObjectURL(new Blob([resp.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'ข้อมูลการรักษา '+moment().format('DDMMYYYYHHmm')+'.xlsx');
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
      this.loading = false
    },
    reset(){
      this.items = []
      this.search.cow = null
      this.search.dateFrom = null
      this.search.dateTo = null
    },
  }
}
</script>
