<template>
  <LayoutAuthenticated>
    <SectionMain>

      <section class="px-4 sm:px-0 mb-4 flex items-center justify-between">
        <div class="flex items-center justify-start">
          <BaseIcon
            path="foodDrumstickOutline"
            size="30"
            class="mr-3"
          />
          <h1 class="text-base lg:text-2xl">
            รายละเอียดการให้อาหาร - คอก {{ this.$route.params.corral }}
          </h1>
        </div>
        <BaseButtons class="text-sm lg:text-base " type="justify-end">
          <BaseButton
            class="lg:p-2 p-1"
            label="ย้อนกลับ"
            color="light"
            @click="this.$router.push('/manage/food')"
          />
          <BaseButton
            class="lg:p-2 p-1"
            label="เพิ่มการให้อาหาร"
            color="success"
            @click="mode='create';openModal = true;modalData = {corral:this.$route.params.corral}"
          />
         </BaseButtons>
      </section>

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getDatas" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
        :btnLoading="loading"
      />

      <Modal
        v-model="openModal"
        :data="getDataCopy"
        @cancel="resetData"
        :mode="mode"
        @confirm="getDatas"
      />

      <Table
          :title="'รายการให้อาหาร ('+foods.length + ' รายการ)'"
          :items="foods"
          :datas="foodColumns"
          :buttons="buttons"
          perPage="5" 
          @delete="remove"
          @edit="edit" 
        /> 
    </SectionMain>
    </LayoutAuthenticated>
  </template>
  
<script>
import SectionMain from '@/components/SectionMain.vue';
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";

import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import CardBox from '@/components/CardBox.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import Table from '@/components/Table.vue'
import Criteria from '@/components/Criteria.vue'

import { Toast } from "@/utils/alert";
import _ from "lodash"
import Modal from './Modal.vue'

import FoodService from '@/services/food'
import {months,years} from '@/constants/date'
  
  export default {
    data () {
      return {
        mode : 'create',
        modalData : null,
        openModal : false,
        foods : [],
        loading : false,
        corral :null,
        search : {
          corral : this.$route.params.corral,
          year : new Date().getFullYear(),
          month : new Date().getMonth() + 1
        },
        forms : [
          {
            label : 'ปี',
            value : 'year',
            type : 'ddl',
            module : 'year'
          },
          {
            label : 'เดือน',
            value : 'month',
            type : 'ddl',
            module : 'month'
          }, 
        ],
        foodColumns : [
          {
            label : 'ปี',
            value : 'year',
            func : (obj) => {
              return obj.year
            }
          },
          {
            label : 'เดือน',
            value : 'month',
            func : (obj) => {
              return months()[obj.month-1].label
            }
          },
          {
            label : 'จำนวนวัว',
            class : 'text-right',
            value : 'numCow',
          },
          {
            label : 'จำนวนสูตร',
            class : 'text-right',
            func : (obj) => {
              return obj.foodDetails.length;
            }
          },
          {
            label : 'รวมจำนวนที่ให้/วัน (กก.)',
            class : 'text-right',
            func : (obj) => {
              return this.$filters.number(obj.foodDetails.reduce((sum, item) => sum + item.qty, 0));
            }
          },
          {
            label : 'รวมเป็นเงิน/วัน',
            class : 'text-right',
            func : (obj) => {
              return this.$filters.currency(obj.foodDetails.reduce((sum, item) => sum + item.amount, 0));
            }
          },
          {
            label : 'รวมจำนวนที่ให้/เดือน (กก.)',
            class : 'text-right',
            func : (obj) => {
              return this.$filters.number(obj.foodDetails.reduce((sum, item) => sum + item.qty, 0) * new Date(obj.year,obj.month,0).getDate());
            }
          },
          {
            label : 'รวมเป็นเงิน/เดือน',
            class : 'text-right',
            func : (obj) => {
              return this.$filters.currency(obj.foodDetails.reduce((sum, item) => sum + item.amount, 0) * new Date(obj.year,obj.month,0).getDate())
            }
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
    emits:['update:modelValue', 'cancel', 'confirm'],
    computed:{
      value:{
        get(){
            return this.modelValue
        },
        set(newValue){
            this.$emit('update:modelValue', newValue)
        }
      },
      getDataCopy() {
        return {...this.modalData};
      },
    },
    watch:{
      data(n){
        this.foods = n?.foods;
        this.corral = n.corral
      }
    },
    created(){
      this.getDatas()
    },
    methods: {
        async getDatas(){
          this.loading = true
          const resp = await FoodService.all(this.search);
          if(resp.data){
            this.foods = resp.data.foods
          }
          this.loading = false
        },
        confirmCancel(mode){
            this.value = false
            this.$emit(mode)  
        },
        cancel(){
            this.confirmCancel('cancel')
        },
        add(){
          
        },
        sum(){
          const sumAmount = this.foods.reduce((sum, item) => sum + item.amount, 0);
          const sumQty = this.foods.reduce((sum, item) => sum + item.qty, 0);
          return {
            qty : sumQty,
            amount : sumAmount
          }
        },
        edit(obj){
          this.modalData = obj
          this.mode = 'edit'
          this.openModal = true
        },
        daysOfMonth(month,year){
          return new Date(year,month,0).getDate()
        },
        resetData(){
          this.modalData = null
        },
        remove(obj){
          let index = this.cows.indexOf(obj);
          if (index !== -1) {
            this.foodDetails.splice(index, 1);
          }
        },
    },
    components : {
      BaseButton,
      BaseButtons,
      CardBox,
      BaseDivider,
      FormField,
      FormControl,
      BaseLevel,
      BaseIcon,
      Table,
      Modal,
      SectionMain,
      LayoutAuthenticated,
      SectionTitleBarSub,
      Criteria
    },
  }
  
  </script>
  
  
  