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
        :data="modalData"
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
          label : "วัคซีน",
          class : 'text-center',
          value : 'vaccine'
        },
        {
          label : "ความถี่/วัคซีน (เดือน)",
          class : 'text-center',
          value : 'frequency'
        },
        {
          label : "ฉีดวัคซีนล่าสุด",
          class : 'text-center',
          value : 'dateCurrent',
          type : 'date',
        },
        {
          label : "ฉีดวัคซีนครั้งต่อไป",
          class : 'text-center',
          value : 'dateNext',
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
    }
  },
  created() {
    this.getDatas();
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
