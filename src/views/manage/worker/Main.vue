<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="accountHardHat" 
        title="คนงาน"
        has-btn-add
        @openModal="mode='create';openModal = true;"
        btnText="เพิ่มคนงาน"
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
        title="รายการคนงาน" 
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
import Service from '@/services/worker'

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
          value : 'status',
          type : 'ddl',
          module : 'worker'
        }, 
      ],
      search : {
        status : null,
      },
      loading : false,
      mode : "create",
      dataEdit : null,
      checked : {
        code : {
          value : 'name',
        },
        label : {
          value : 'duty'
        }
      },
      datas : [
        {
          label : "ชื่อ",
          value : 'name',
        },
        {
          label : "อายุ",
          class : 'text-center',
          value : 'age',
        },
        {
          label : "วันที่เริ่มงาน",
          class : 'text-center',
          value : 'startDate',
          type : 'date'
        },
        {
          label : "วันที่สิ้นสุดงาน",
          class : 'text-center',
          value : 'endDate',
          type : 'date'
        },
        {
          label : "หน้าที่",
          value : 'duty',
        },
        {
          label : "เงินเดือน",
          value : 'salary',
          class : 'text-right',
        },
        {
          label : "เบอร​์โทรศัพท์",
          class : 'text-center',
          value : 'phoneNumber',
        },
        {
          label : "สถานะ",
          value : 'status',
        },
        {
          label : "ประเทศ",
          value : 'country',
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
        this.items = resp.data.workers
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
