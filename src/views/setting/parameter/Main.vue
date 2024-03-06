<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="cash" 
        title="ราคาน้ำนมดิบ"
        has-btn-add
        @openModal="mode='create';openModal = true;modalData = null"
        btnText="เพิ่มราคาน้ำนมดิบ"
      />

      <Modal
        v-model="openModal"
        :data="getDataCopy"
        :mode="mode"
        @confirm="getDatas"         
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-5"
        @search="getDatas" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
      />

      <Table
        title="รายการราคาน้ำนมดิบ" 
        :items="items" 
        :datas="datas" 
        :buttons="buttons" 
        @edit="edit" 
        @delete="remove" 
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
import Service from '@/services/param'

import { Toast } from "@/utils/alert";

export default {
  data (){
    return {
      openModal : false,
      modalData : null,
      items : [],
      forms : [
        // {
        //   label : "กลุ่ม",
        //   value : 'group',
        // },
        // {
        //   label : "รหัส",
        //   value : 'code',
        // },
        {
          label : "ชื่อรายการ",
          value : 'name',
        },
        {
          label : "ราคา/กก. (บาท)",
          value : 'valueNumber',
          type : 'number'
        },
        // {
        //   label : "ข้อมูล(ตัวหนังสือ)",
        //   value : 'valueString',
        // }
      ],
      search : {
        name : '',
        code : '',
        group : '',
        valueNumber : null,
        valueString : '',
      },
      loading : false,
      mode : "create",
      dataEdit : null,
      datas : [
      
        // {
        //   label : "กลุ่ม",
        //   value : 'group',
        // },
        // {
        //   label : "รหัส",
        //   value : 'code',
        // },
        {
          label : "ชื่อรายการ",
          value : 'name',
        },
        {
          label : "ราคา/กก. (บาท)",
          value : 'valueNumber',
          type : 'currency',
          class : 'text-right'
        },
        // {
        //   label : "ข้อมูล(ตัวหนังสือ)",
        //   value : 'valueString',
        // }
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
        this.items = resp.data.params
      }
      this.loading = false
    },
    async remove(id){
      this.loading = true
      const resp = await Service.delete(id);
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
      this.search.name = ""
    },
  }
}
</script>
