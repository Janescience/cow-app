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
        @cancel="getDatas"
         
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
import HealService from '@/services/heal'

import { getCurrentUser } from "@/utils";
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
          type : 'ddl-multiple',
          module : 'cow',
          class : 'col-span-4'
        },
        {
          label : 'วัคซีน',
          value : 'vaccine',
          type : 'ddl',
          module : 'vaccine'
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
        cow : [],
        dateCurrent : null,
        dateNext : null,
        vaccine : null,
        farm : getCurrentUser().farm._id,
      },
      loading : false,
      mode : "create",
      dataEdit : null,
      checked : {
        code : {
          value : 'cow.name',
        },
        label : {
          value : 'vaccine.name'
        }
      },
      datas : [
        {
          label : "โค",
          func : (obj) => {
            return obj.cow.code + ' : ' + obj.cow.name
          },
        },
        {
          label : "วัคซีน",
          class : 'text-center',
          value : 'vaccine.name'
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
  created() {
    this.getDatas();
  },
  methods : {
    async getDatas(search){
      this.loading = true
      const resp = await HealService.all(search);
      this.items = []
      if(resp.data){
        this.items = resp.data.heals
      }
      this.loading = false
    },
    async remove(id){
      this.loading = true
      const resp = await HealService.delete(id);
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
      this.modalData.cow = obj.cow._id;
      this.modalData.vaccine = obj.vaccine._id;

      this.mode = 'edit';
      this.openModal = true;
    },
    reset(){
      this.search.cow = []
      this.search.dateCurrent = null
      this.search.dateNext = null
      this.search.vaccine = null
    },
  }
}
</script>
