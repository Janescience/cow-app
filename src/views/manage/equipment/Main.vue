<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="shovel" 
        title="อุปกรณ์"
        has-btn-add
        @openModal="mode='create';openModal = true;"
        btnText="เพิ่มอุปกรณ์"
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
        title="รายการอุปกรณ์" 
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
import Service from '@/services/equipment'

import { Toast } from "@/utils/alert";
import { status } from '@/constants/equipment'

export default {
  data (){
    return {
      openModal : false,
      modalData : null,
      items : [],
      forms : [
        {
          label : 'สถานะ',
          value : 'status',
          options : status('ddl')
        }, 
      ],
      search : {
        status : status('ddl'),
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
          label : "รหัส",
          value : 'code',
        },
        {
          label : "ชื่อ",
          value : 'name',
        },
        {
          label : "วันที่เริ่มใช้งาน",
          class : 'text-center',
          value : 'startDate',
          type : 'date'
        },
        {
          label : "วันที่สิ้นสุดใช้งาน",
          class : 'text-center',
          value : 'endDate',
          type : 'date'
        },
        {
          label : "ราคา",
          value : 'amount',
          class : 'text-right',
        },
        {
          label : "สถานะ",
          func : (obj) => {
            return status()[obj.status]
          }
        },
        {
          label : "หมายเหตุ",
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
      const resp = await Service.all(search);
      this.items = []
      if(resp.data){
        this.items = resp.data.equipments
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
      this.search.status = null
    },
  }
}
</script>
