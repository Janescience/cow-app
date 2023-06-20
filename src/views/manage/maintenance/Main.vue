<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="progressWrench" 
        title="การซ่อมบำรุง"
        has-btn-add
        @openModal="mode='create';openModal = true;"
        btnText="เพิ่มการซ่อมบำรุง"
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
        title="รายการซ่อมบำรุง" 
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
import Service from '@/services/maintenance'

import { Toast } from "@/utils/alert";

export default {
  data (){
    return {
      openModal : false,
      modalData : null,
      items : [],
      forms : [
        {
          label : 'สถานะ',
          value : 'status'
        }, 
      ],
      search : {
        status : '',
      },
      loading : false,
      mode : "create",
      dataEdit : null,
      checked : {
        code : {
          value : 'code',
        },
        label : {
          value : 'name'
        }
      },
      datas : [
        {
          label : "รหัสรายการ",
          value : 'code',
        },
        {
          label : "ชื่อรายการ",
          value : 'name',
        },
        {
          label : "รายละเอียด",
          value : 'reason',
        },
        {
          label : "วันที่ซ่อม",
          class : 'text-center',
          value : 'date',
          type : 'date'
        },
        {
          label : "ราคา",
          value : 'amount',
          class : 'text-right',
        },
        {
          label : "ผู้ซ่อมบำรุง",
          value : 'maintenancer',
        }
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
        this.items = resp.data.maintenances
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
    async removeSelected(datas){
      this.loading = true
      let ids = []
      for(let data of datas){
        ids.push(data._id)
      }
      const resp = await Service.deletes(ids);
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
      this.modalData = obj;
      this.mode = 'edit';
      this.openModal = true;
    },
    reset(){
      this.search.status = ''
      this.getDatas()
    },
    resetData(){
      this.modalData = {}
      this.modalData.category = 'E'
      this.modalData.date = new Date()
    }
  }
}
</script>
