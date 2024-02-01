<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="needle" 
        :title="'ประวัติการป้องกัน/บำรุง ('+vaccine.name+')'"
        path-back="/manage/protection"
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getDatas" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
        :btnLoading="loading"
      />

      <Table
        title="รายการประวัติป้องกัน/บำรุง" 
        has-checkbox
        :checked-data="checked" 
        :items="items" 
        :datas="datas" 
        :buttons="buttons" 
        @edit="edit" 
        @delete="remove" 
        @deleteSelected="removeSelected"
        :loading="loading"
      />

    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import SectionMain from '@/components/SectionMain.vue';
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";

import Table from "@/components/Table.vue";
import Criteria from "@/components/Criteria.vue";

import ProtectionService from '@/services/protection'

import { Toast } from "@/utils/alert";
import _ from "lodash";


export default {
  data (){
    return {
      openModal : false,
      modalData : null,
      vaccine : {},
      items : [],
      forms : [
        {
          label : 'วันที่ฉีดวัคซีน',
          value : 'date',
          icon : 'calendar',
          type : 'date'
        },
      ],
      search : {
        date : null,
        vaccine : null,
      },
      loading : false,
      mode : "create",
      dataEdit : null,
      checked : {
        label : {
          value : 'vaccine.name'
        },
        code : {
          value : 'vaccine.seq'
        }
      },
      datas : [
        {
          label : "ครั้งที่",
          value : 'seq'
        },
        {
          label : "วัคซีน",
          value : 'vaccine.name'
        },
        {
          label : "จำนวนที่ฉีด (ตัว)",
          class : 'text-center',
          value : 'qty'
        },
        {
          label : "รวมเป็นเงิน (บาท)",
          class : 'text-right',
          type : 'currency',
          value : 'amount'
        },
        {
          label : "วันที่ฉีดวัคซีน",
          class : 'text-center',
          value : 'date',
          type : 'date',
        },
        {
          label : "หมายเหตุ",
          class : 'text-center',
          value : 'remark',
        },
      ],
      buttons : [
        {
          label : 'ลบ',
          type : 'delete',
          color : 'danger',
        },
        {
          label : 'แก้ไข',
          type : 'edit',
          color : 'warning',
          condition : (obj) => {
            const groupVacs = _.groupBy(this.items,'vaccine._id');
            for(let vac of Object.keys(groupVacs)){
              const vacs = groupVacs[vac];
              const sortedVacs = _.orderBy(vacs,'seq','desc');
              if(sortedVacs.length > 0){
                if(obj._id == sortedVacs[0]._id){
                  return true
                }
              }
            }
            return false
          }
        },
        {
          label : 'ยืนยันฉีดวัคซีน',
          color : 'success',
          type : 'oth',
          func : (obj) =>{
            this.confirm(obj)
          },
          condition : (obj) => {
            const groupVacs = _.groupBy(this.items,'vaccine._id');
            const today = new Date().setUTCHours(0, 0, 0, 0)

            for(let vac of Object.keys(groupVacs)){
              const vacs = groupVacs[vac];
              const sortedVacs = _.orderBy(vacs,'seq','desc');
              if(sortedVacs.length > 0){
                const dateVac = new Date(obj.date).setUTCHours(0,0,0,0)
                if(obj._id == sortedVacs[0]._id && today >= dateVac ){
                  return true
                }
              }
            }
            return false
          }
        },
      ]
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    SectionTitleBarSub,
    Table,
    Criteria
  },
  created() {
    this.search.vaccine = this.$route.params.vaccine
    this.getDatas(this.search);
  },
  methods : {
    async confirm(obj){
      this.loading = true
      const resp = await ProtectionService.confirm(obj);
      if(resp.data){
        this.getDatas(this.search)
      }
      this.loading = false
    },
    async getDatas(search){
      this.loading = true
      const resp = await ProtectionService.all(search);
      this.items = []
      if(resp.data){
        this.items = resp.data.protections
        this.vaccine = resp.data.protections[0].vaccine
      }
      this.loading = false
    },
    async remove(id){
      this.loading = true
      const resp = await ProtectionService.delete(id);
      if(resp.data){
        this.getDatas()
      }
      this.loading = false
      Toast.fire({
        icon: 'success',
        title: 'ลบข้อมูลสำเร็จ'
      })
    },
    add(){
      this.$router.push({
          name: "protectionDetail",
          params: {
              id: 'add',
          }
      });
    },
    edit(obj){
      this.$router.push({
          name: "protectionDetail",
          params: {
              id: obj._id ,
          }
      });
    },
    reset(){
      this.search.date = null
      this.search.vaccine = null
      this.getDatas()
    },
  }
}
</script>
