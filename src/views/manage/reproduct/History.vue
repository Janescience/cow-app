<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="reproduction" 
        title="ประวัติการผสมพันธุ์"
        btnText="เพิ่มการผสมพันธุ์"
        has-btn-add
        @openModal="mode='create';openModal = true;"
      />

      <Modal
        v-model="openModal"
        :mode="mode" 
        :data="getDataCopy" 
        @confirm="getReproductions"
        @cancel="resetData" 
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getReproductions" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
        :btnLoading="loading"
      />

      <Table
        title="รายการประวัติการผสมพันธุ์" 
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
import UserAvatar from "@/components/UserAvatar.vue"
import CardBox from "@/components/CardBox.vue"
import BaseLevel from "@/components/BaseLevel.vue"
import BaseButton from "@/components/BaseButton.vue"
import BaseButtons from "@/components/BaseButtons.vue"
import Table from "@/components/Table.vue";
import Criteria from "@/components/Criteria.vue";

import Modal from './Modal.vue'
import ReproductionService from '@/services/reproduction'

import { reproductStatus,reproductResult,reproductType } from '@/constants/reproduct'
import { Toast } from "@/utils/alert";
import _ from "lodash";
import moment from "moment"

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
      modalData : null,
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
          label : 'ผลการเข้าระบบ',
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
          label : "รายละเอียด",
          value : 'remark',
        },
        {
          label : 'สถานะ',
          func : (obj) => {
            return reproductStatus()[obj.status].label
          },
        },
        {
          label : "ประเภท",
          func : (obj) => {
            return reproductType()[obj.type]
          },
        },
        {
          label : "การรักษา/สาเหตุ",
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
    Criteria,
    UserAvatar,
    CardBox,
    BaseLevel,
    BaseButtons,
    BaseButton
  },
  computed : {
    getDataCopy() {
      return {...this.modalData};
    }
  },
  created() {
    this.search.cow = this.$route.params.cow
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
        Toast.fire({
          icon: 'success',
          title: 'ลบข้อมูลสำเร็จ'
        })
      }
      this.loading = false
    },
    async removeSelected(datas){
      this.loading = true
      let ids = []
      for(let data of datas){
        ids.push(data._id)
      }
      const resp = await ReproductionService.deletes(ids);
      if(resp.data){
        this.getReproductions()
        Toast.fire({
          icon: 'success',
          title: 'ลบข้อมูลสำเร็จ'
        })
      }
      this.loading = false
    },
    edit(obj){
      this.modalData = obj;
      this.mode = 'edit';
      this.openModal = true;
    },
    reset(){
      this.search.cow = null
      this.search.loginDate = null
      this.search.estrusDate = null
      this.search.matingDate = null
      this.search.checkDate = null
      this.search.status = ""
      this.search.result = ""
      this.getReproductions()
    },
    resetData(){
      this.modalData = null
    }
  }
}
</script>
