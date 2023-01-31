<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="doctor" 
        title="การรักษา"
        has-btn-add
        @openModal="mode='create';openModal = true;"
        btnText="เพิ่มการรักษา"
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
        title="รายการรักษา" 
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
          label : 'วันที่รักษา',
          value : 'date',
          icon : 'calendar',
          type : 'date'
        },  
      ],
      search : {
        cow : null,
        date : null,
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
          label : "วันที่รักษา",
          class : 'text-center',
          value : 'date',
          type : 'date',
        },
        {
          label : "อาการ/โรค",
          class : 'text-center',
          value : 'disease',
        },
        {
          label : "วิธีการรักษา",
          class : 'text-center',
          value : 'method',
        },
        {
          label : "คนรักษา",
          class : 'text-center',
          value : 'healer',
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
