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

      <div
        v-if="!loading"
        class="grid lg:gap-3 md:gap-2 gap-1 grid-cols-3 lg:grid-cols-5 md:grid-cols-4"
      >
        <CardBox
          v-for="item in itemsPaginated"
          :key="item.corral"
          hoverable
        >
          <BaseLevel type="justify-center mt-3">
            <BaseIcon
              path="barn"
              size="58"
              class="dark:text-gray-600"
            />
          </BaseLevel>
          <div class="text-center mt-2">
            <h4 class="lg:text-2xl text-xl ">
               คอก {{ item.corral }} 
            </h4>
          </div>
        </CardBox>
      </div>
      <div
          v-else
          class="text-center py-10 text-gray-500 dark:text-gray-400 "
        >
          <BaseIcon
            path="dotsCircle"
            size="22"
            class="animate-spin"
          />
          <p> กำลังโหลดข้อมูล...</p>
      </div>

    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import SectionMain from '@/components/SectionMain.vue';
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";

import Table from "@/components/Table.vue";
import Criteria from "@/components/Criteria.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import CardBox from "@/components/CardBox.vue";

import Modal from './Modal.vue'
import FoodService from '@/services/food'
import CowService from '@/services/cow'

import _ from 'lodash'

import { Toast } from "@/utils/alert";

export default {
  data (){
    return {
      perPage :10,
      currentPage : 0,
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
    Criteria,
    BaseLevel,
    UserAvatar,
    CardBox,
    BaseIcon
  },
  computed : {
    getDataCopy() {
      return {...this.modalData};
    },
    corral(){
      return this.ddlCorral;
    },
    itemsPaginated() {
        return this.items ? this.items.slice(this.perPage * this.currentPage, this.perPage * (this.currentPage + 1)) : []
    },
    numPages(){
        return Math.ceil((this.items ? this.items.length : 0) / this.perPage);
    },
    currentPageHuman() {
        return this.currentPage + 1
    },
    pagesList() {
        const pagesList = []

        for (let i = 0; i < this.numPages; i++) {
            pagesList.push(i)
        }

        return pagesList
    },
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
        const foods = resp.data.foods;
        const groupCorrals = _.groupBy(foods,'corral')
        for(let key of Object.keys(groupCorrals)){
          this.items.push({corral:key})
        }
        // this.items = resp.data.foods
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
