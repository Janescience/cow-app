<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="babyFaceOutline" 
        title="การคลอดลูก"
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
        title="รายการคลอดลูก" 
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
import BirthService from '@/services/birth'

import getAge from "@/utils/age-calculate";
import { sex,overgrown } from '@/constants/birth'
import { Toast } from "@/utils/alert";

export default {
  data (){
    return {
      openModal : false,
      modalData : null,
      items : [],
      forms : [
        {
          label : 'โค',
          value : 'cow',
          type : 'ddl',
          module : 'cow'
        },
        {
          label : 'เพศ',
          value : 'sex',
          options : [{id : '', label :"ทั้งหมด"},{id : 'M', label :"ตัวผู้"},{id : 'F', label :"ตัวเมีย"}]
        },
        {
          label : 'วันที่ตั้งครรภ์',
          value : 'pregnantDate',
          icon : 'calendar',
          type : 'date'
        },
        {
          label : 'วันที่คลอด',
          value : 'birthDate',
          icon : 'calendar',
          type : 'date'
        },  
      ],
      search : {
        cow : null,
        birthDate : null,
        pregnantDate : null,
        sex : "",
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
          value : 'seq',
          class : 'text-center',
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
          label : "วันที่ตั้งครรภ์",
          class : 'text-center',
          value : 'pregnantDate',
          type : 'date',
        },
        {
          label : 'อายุครรภ์',
          func : (obj) => {
            return this.calAge(obj?.pregnantDate)
          },
        },
        {
          label : "วันที่คลอด",
          class : 'text-center',
          value : 'birthDate',
          type : 'date',
        },
        {
          label : "เพศ",
          class : 'text-center',
          func : (obj) => {
            return sex()[obj.sex]
          },
        },
        {
          label : "ลูกวัว",
          class : 'text-center',
          func : (obj) => {
            return obj.calf ? obj.calf?.code + " : " + obj.calf?.name : ""
          },
        },
        {
          label : "รกค้าง",
          class : 'text-center',
          func : (obj) => {
            return overgrown()[obj.overgrown]
          },
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

      ],
      buttons : [
        {
          label : 'ลบ',
          type : 'delete',
          color : 'danger',
          condition : (obj) => {
            return !obj.sex
          }
        },
        {
          label : 'แก้ไข',
          type : 'edit',
          color : 'warning',
          condition : (obj) => {
            return obj.birthDate
          }
        },
        {
          label : 'บันทึกการคลอดลูก',
          color : 'info',
          type : 'oth',
          func : (obj) => {
            this.mode = 'create';
            this.openModal = true;
            this.modalData = obj
          },
          condition : (obj) => {
            return !obj.birthDate
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
      const resp = await BirthService.all(search);
      this.items = []
      if(resp.data){
        this.items = resp.data.births
      }
      this.loading = false
    },
    async remove(id){
      this.loading = true
      const resp = await BirthService.delete(id);
      if(resp.data){
        this.getDatas()
        Toast.fire({
          icon: 'success',
          title: 'ลบข้อมูลสำเร็จ'
        })
      }
      this.loading = false
    },
    edit(obj){
      this.modalData = obj
      this.mode = 'edit';
      this.openModal = true;
    },
    resetData(){
      this.modalData = null
    },
    reset(){
      this.search.cow = null
      this.search.birthDate = null
      this.search.pregnantDate = null
      this.search.sex = ""
      this.getDatas();
    },
    calAge(date){
      return getAge(date);
    }
  }
}
</script>
