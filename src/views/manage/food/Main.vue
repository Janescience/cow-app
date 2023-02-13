<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="foodDrumstickOutline" 
        title="การให้อาหาร"
        has-btn-add
        @openModal="mode='create';openModal = true;"
        btnText="เพิ่มการให้อาหาร"
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
        title="รายการให้อาหาร" 
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
import FoodService from '@/services/food'

import { Toast } from "@/utils/alert";

export default {
  data (){
    return {
      openModal : false,
      modalData : null,
      items : [],
      forms : [
        {
          label : 'สูตรอาหาร',
          value : 'recipe',
          type : 'ddl',
          module : 'recipe'
        },
        {
          label : 'คอก',
          value : 'corral',
          icon : 'barn',
          type : 'number'
        }, 
      ],
      search : {
        recipe : null,
        corral : '',
      },
      loading : false,
      mode : "create",
      dataEdit : null,
      checked : {
        code : {
          value : 'corral'
        },
        label : {
          value : 'recipe.name'
        }
      },
      datas : [
        {
          label : "คอก",
          class : 'text-center',
          value : 'corral'
        },
        {
          label : "จำนวนวัว",
          class : 'text-center',
          value : 'numCow',
        },
        {
          label : "สูตรอาหาร",
          class : 'text-center',
          value : 'recipe.name'
        },
        {
          label : "จำนวนที่ให้/วัน (กก.)",
          class : 'text-center',
          value : 'qty',
        },
        {
          label : "รวมเป็นเงิน/วัน",
          class : 'text-center',
          value : 'amount',
        },
        {
          label : "รวมเป็นเงิน/ตัว",
          class : 'text-center',
          value : 'amountAvg',
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
      const resp = await FoodService.all(search);
      this.items = []
      if(resp.data){
        this.items = resp.data.foods
      }
      this.loading = false
    },
    async remove(id){
      this.loading = true
      const resp = await FoodService.delete(id);
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
      this.search.recipe = null
      this.search.corral = ''
      this.getDatas()
    },
  }
}
</script>
