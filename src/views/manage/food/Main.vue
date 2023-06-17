<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="foodDrumstickOutline" 
        title="การให้อาหาร"
        has-btn-add
        @openModal="mode='create';openModal = true;this.modalData = null;"
        btnText="เพิ่มการให้อาหาร"
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
import CowService from '@/services/cow'

import _ from 'lodash'

import { Toast } from "@/utils/alert";

export default {
  data (){
    return {
      openModal : false,
      modalData : null,
      items : [],
      ddlCorral : [],
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
        recipe : {},
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
          func : (obj) => {
            return obj.amount.toFixed(2)
          }
        },
        {
          label : "คิดเป็นเงิน/ตัว",
          class : 'text-center',
          value : 'amountAvg',
          func : (obj) => {
            return obj.amountAvg.toFixed(2)
          }
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
      return {...this.modalData};
    },
    corral(){
      return this.ddlCorral;
    }
  },
  created() {
    this.getDatas();
    this.getCorrals();
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
    async removeSelected(datas){
      this.loading = true
      let ids = []
      for(let data of datas){
        ids.push(data._id)
      }
      const resp = await FoodService.deletes(ids);
      if(resp.data){
        this.getReproductions()
        Toast.fire({
          icon: 'success',
          title: 'ลบข้อมูลสำเร็จ'
        })
      }
      this.loading = false
    },
    async getCorrals(){
      const resp = await CowService.all();
      if(resp){
        const cows = resp.data.cows
        const corrals = _.groupBy(cows,'corral')
        for(let key of Object.keys(corrals)){
          this.ddlCorral.push({id:key,label:key})
        }
      }
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
    resetData(){
      this.modalData = null;
    }
  }
}
</script>
