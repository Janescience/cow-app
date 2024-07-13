<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="needle" 
        title="วัคซีน"
        has-btn-add
        @openModal="mode='create';openModal = true;"
        btnText="เพิ่มวัคซีน"
      />

      <Modal
        v-model="openModal"
        :data="getDataCopy"
        :mode="mode"
        @confirm="getDatas"
        @cancel="resetData"         
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getDatas" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
      />

      <Table
        title="รายการวัคซีน" 
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

import Modal from './Modal.vue'
import VaccineService from '@/services/vaccine'

import { Toast } from "@/utils/alert";
import _ from "lodash";
import moment from "moment";


export default {
  data (){
    return {
      openModal : false,
      modalData : null,
      items : [],
      forms : [
        {
          label : 'วัคซีน',
          value : 'vaccine',
          icon : 'needle',
        }, 
        {
          label : 'ฉีดวัคซีนล่าสุด',
          value : 'dateCurrent',
          icon : 'calendar',
          type : 'date'
        },
        {
          label : 'ฉีดวัคซีนครั้งต่อไป',
          value : 'dateNext',
          icon : 'calendar',
          type : 'date'
        },
      ],
      search : {
        dateCurrent : null,
        dateNext : null,
        vaccine : '',
      },
      loading : false,
      mode : "create",
      dataEdit : null,
      checked : {
        label : {
          value : 'vaccine'
        }
      },
      datas : [
        {
          label : "รหัสวัคซีน",
          value : 'code'
        },
        {
          label : "ชื่อวัคซีน",
          value : 'name'
        },
        {
          label : "ความถี่ (เดือน)",
          class : 'text-center',
          value : 'frequency'
        },
        {
          label : "ราคาวัคซีน",
          class : 'text-right',
          value : 'price',
          type : 'currency'
        },
        {
          label : "ปริมาณ (ลิตร)",
          class : 'text-center',
          value : 'quantity',
          type : 'number'
        },
        {
          label : "ใช้ได้ (ตัว)",
          class : 'text-center',
          value : 'use'
        },
        {
          label : "คิดเป็นเงิน/ตัว",
          class : 'text-right',
          value : 'amount',
          type : 'currency'
        },
        {
          label : "เริ่มฉีดวัคซีน",
          class : 'text-center',
          value : 'startDate',
          type : 'date'
        },
        {
          label : "ฉีดวัคซีนล่าสุด",
          class : 'text-center',
          value : 'currentDate',
          type : 'date'

          // func : (obj) => {
          //   const sorted = _.orderBy(obj.protections,'date','desc');
          //   return sorted.length > 0 ? moment(sorted[0].date).format('DD/MM/YYYY') : null
          // },
        },
        {
          label : "ฉีดวัคซีนครั้งต่อไป",
          class : 'text-center',
          value : 'nextDate',
          type : 'date'
          // func : (obj) => {
          //   const sorted = _.orderBy(obj.protections,'date','desc');
          //   return sorted.length > 0 ? moment(sorted[0].date).add(obj.frequency,'months').format('DD/MM/YYYY') : null
          // },
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
        },
        {
          label : 'การแจ้งเตือน',
          type : 'oth',
          color : 'light',
          func : (obj) => {
            this.$router.push({
                name: "notification-parameter"
            });
          },
        },
        {
          label : 'ประวัติ',
          type : 'oth',
          color : 'info',
          func : (obj) => {
            this.$router.push({
                name: "protectionHistory",
                params : {
                    vaccine: obj._id ,
                }
            });
          },
        },
      ]
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    SectionTitleBarSub,
    Table,
    Modal,
    Criteria
  },
  computed : {
    user() {
      return this.$store.state.auth.user;
    },
    getDataCopy() {
      return {...this.modalData};
    }
  },
  created() {
    this.getDatas();
  },
  methods : {
    async getDatas(search){
      this.loading = true
      const resp = await VaccineService.all(search);
      this.items = []
      if(resp.data){
        this.items = resp.data.vaccines
      }
      this.loading = false
    },
    async remove(id){
      this.loading = true
      const resp = await VaccineService.delete(id);
      if(resp.data){
        this.getDatas()
      }
      this.loading = false
      Toast.fire({
        icon: 'success',
        title: 'ลบข้อมูลสำเร็จ'
      })
    },
    edit(obj){
      this.modalData = obj;
      this.mode = 'edit';
      this.openModal = true;
    },
    resetData(){
      this.modalData = null
    },
    reset(){
      this.search.dateCurrent = null
      this.search.dateNext = null
      this.search.vaccine = ''
    },
  }
}
</script>
