<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="reproduction" 
        title="การสืบพันธุ์"
        btnText="เพิ่มการสืบพันธุ์"
        has-btn-add
        @openModal="mode='create';openModal = true;"
      />

      <Modal
        v-model="openModal"
        :mode="mode" 
        :dataEdit="dataEdit" 
        @confirm="getReproductions" 
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getReproductions" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
      />

      <Table
        title="รายการสืบพันธุ์" 
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
import ReproductionService from '@/services/reproduction'

import { reproductStatus,reproductResult } from '@/constants/reproduct'

export default {
  data (){
    return {
      openModal : false,
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
      mode : "create",
      dataEdit : null,
      checked : {
        code : {
          value : 'seq',
        },
        label : {
          value : 'cow.name'
        }
      },
      datas : [
        {
          label : "ครั้งที่",
          class : 'text-center',
          value : 'seq',
        },
        {
          label : "รหัสโค",
          value : 'cow.code',
        },
        {
          label : "ชื่อโค",
          value : 'cow.name',
        },
        {
          label : "วันที่เข้าระบบสืบพันธุ์",
          class : 'text-center',
          value : 'loginDate',
          type : 'date',
        },
        {
          label : 'ผล',
          func : (obj) => {
            return reproductResult()[obj.result].label
          },
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
          label : "พ่อพันธุ์",
          value : 'dad',
        },
        {
          label : 'สถานะ',
          func : (obj) => {
            return reproductStatus()[obj.status].label
          },
        },
        {
          label : "วิธีรักษา",
          value : 'howTo',
        },
      ],
      buttons : [
        {
          label : 'ลบ',
          type : 'delete',
          color : 'danger',
          condition : (obj) => {
            return obj.status != '2' && obj.status != '3'
          }
        },
        {
          label : 'แก้ไข',
          type : 'edit',
          color : 'warning',
          condition : (obj) => {
            return obj.status != '2' && obj.status != '3'
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
    }
  },
  created() {
    this.getReproductions();
  },
  methods : {
    async getReproductions(){
      this.loading = true
      const resp = await ReproductionService.all(this.search);
      this.items = []
      if(resp.data){
        this.items = resp.data.reproducts
      }
      this.loading = false
    },
    async remove(id){
      this.loading = true
      const resp = await ReproductionService.delete(id);
      if(resp.data){
        this.getReproductions()
      }
      this.loading = false
    },
    edit(obj){
      this.dataEdit = obj;
      this.dataEdit.cow = obj.cow._id;
      this.mode = 'edit';
      this.openModal = true;
    },
    reset(){
      this.search.cow = null
      this.search.date = null
    },
  }
}
</script>
