<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="applicationVariableOutline" 
        title="พารามิเตอร์ (การแจ้งเตือน)"
      />

      <Modal
        v-model="openModal"
        :data="getDataCopy"
        :mode="mode"
        @confirm="getDatas"         
      />

      <Table
        title="รายการพารามิเตอร์ (การแจ้งเตือน)" 
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

import Modal from './Modal.vue'
import Service from '@/services/notificationParam'

export default {
  data (){
    return {
      openModal : false,
      modalData : null,
      items : [],
      forms : [],
      loading : false,
      dataEdit : null,
      datas : [
        {
          label : "ชื่อ",
          value : 'name',
        },
        {
          label : "แจ้งเตือนวันที่มีผล",
          func : (obj) => {
            return obj.dueDate ? 'แจ้งเตือน':'ไม่แจ้งเตือน'
          },
        },
        {
          label : "แจ้งเตือน (ก่อน)",
          func : (obj) => {
            return obj.before ? obj.before :'-'
          },
          class : 'text-center'
        },
        {
          label : "หน่วย (ก่อน)",
          func : (obj) => {
            return obj.beforeType == 'D' ? 'วัน':'เดือน'
          },
        },
        {
          label : "แจ้งเตือน (หลัง)",
          func : (obj) => {
            return obj.after ? obj.after :'-'
          },
          class : 'text-center'
        },
        {
          label : "หน่วย (หลัง)",
          func : (obj) => {
            return obj.afterType == 'D' ? 'วัน':'เดือน'
          },
        }
      ],
      buttons : [
        {
          label : 'แก้ไข',
          type : 'edit',
          color : 'warning',
        }
      ]
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    SectionTitleBarSub,
    Table,
    Modal
  },
  computed: {
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
      const resp = await Service.all(search);
      this.items = []
      if(resp.data){
        this.items = resp.data.notiParams
      }
      this.loading = false
    },
    edit(obj){
      this.modalData = obj;
      this.openModal = true;
    },
  }
}
</script>
