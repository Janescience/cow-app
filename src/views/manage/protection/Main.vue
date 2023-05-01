<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="doctor" 
        title="การป้องกัน/บำรุง"
        has-btn-add
        @openModal="mode='create';openModal = true;"
        btnText="เพิ่มการป้องกัน/บำรุง"
      />

      <Modal
        v-model="openModal"
        :data="getDataCopy"
        :mode="mode"
        @confirm="getDatas"         
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getDatas" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
      />

      <Table
        title="รายการป้องกัน/บำรุง" 
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
import ProtectionService from '@/services/protection'

import { Toast } from "@/utils/alert";
import _ from "lodash";


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
          type : 'ddl',
          module : 'vaccine',
          valueType : '_id'
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
          value : 'vaccine.name'
        },
        code : {
          value : 'vaccine.code'
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
          class : 'text-center',
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
    this.search.vaccine = this.$route.params.vaccine
    this.getDatas(this.search);
  },
  methods : {
    async getDatas(search){
      this.loading = true
      const resp = await ProtectionService.all(search);
      this.items = []
      if(resp.data){
        this.items = resp.data.protections
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
    edit(obj){
      this.modalData = obj;
      this.mode = 'edit';
      this.openModal = true;
    },
    reset(){
      this.search.dateCurrent = null
      this.search.dateNext = null
      this.search.vaccine = ''
    },
  }
}
</script>
