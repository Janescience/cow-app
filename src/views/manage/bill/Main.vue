<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="cashMultiple" 
        title="ค่าใช้จ่ายเพิ่มเติม"
        has-btn-add
        @openModal="mode='create';openModal = true;"
        btnText="เพิ่มค่าใช้จ่ายเพิ่มเติม"
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
        :btnLoading="loading"
      />

      <Table
        title="รายการค่าใช้จ่ายเพิ่มเติม" 
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
import Service from '@/services/bill'

import { Toast } from "@/utils/alert";
import { expenses } from '@/constants/bill'
import { months,years } from '@/constants/date'


export default {
  data (){
    return {
      openModal : false,
      modalData : null,
      items : [],
      forms : [
        {
          label : 'ค่าใช้จ่าย',
          options : expenses()
        }, 
        {
          label : 'เดือน',
          options : months()
        }, 
        {
          label : 'ปี',
          options : years()
        }, 
      ],
      search : {
        status : '',
      },
      loading : false,
      mode : "create",
      dataEdit : null,
      datas : [
        {
          label : "รายการ",
          value : 'name',
        },
        {
          label : "เดือน",
          value : 'month',
        },
        {
          label : "ปี",
          value : 'year',
        },
        {
          label : "ค่าใช้จ่าย",
          value : 'amount',
          class : 'text-right',
        },
        {
          label : "รายละเอียดเพิ่มเติม",
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
    getDataCopy() {
      return {...this.modalData}
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
        this.items = resp.data.bills
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
      this.search.status = ''
      this.getDatas()
    },
    resetData(){
      this.modalData = null
    }
  }
}
</script>
