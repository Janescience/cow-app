<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="(this.mode === 'create' ?'บันทึก' : 'แก้ไข') + 'การให้อาหาร'"
        class="shadow-lg w-full  lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid lg:grid-cols-3 grid-cols-2 gap-5">
          <FormField label="ปี พ.ศ." help="* ห้ามว่าง" >
            <FormControl
              v-model="food.year"
              :options="years"
            />
          </FormField>
          <FormField label="เดือน" help="* ห้ามว่าง" >
            <FormControl
              v-model="food.month"
              :options="months"
            />
          </FormField>
          <FormField label="คอก" help="* ห้ามว่าง" >
            <FormControl
              v-model="food.corral"
              :options="ddlCorral"
              required
            />
          </FormField>
        </div>
        <CardBox 
          title="รายละเอียดสูตรอาหาร"
          header-icon=""
          class="dark:bg-slate-700">
          <div class="grid lg:grid-cols-3 grid-cols-2 gap-5">
            <FormField label="สูตรอาหาร" help="* ห้ามว่าง" class="lg:col-span-1 col-span-2">
              <DDLRecipe
                v-model="foodDetail.recipe"
                valueType="object"
              />
            </FormField>
            <FormField label="จำนวนที่ให้/วัน (กก.)" help="* ห้ามว่าง" >
              <FormControl
                v-model="foodDetail.qty"
                icon="shaker"
                type="number"
                required
              />
            </FormField>
            <BaseButtons
              type="justify-start"
            >
              <BaseButton
                label="ล้าง"
                color="danger"
                @click="reset()"
              />
              <BaseButton
                label="เพิ่ม"
                color="info"
                @click="add()"
              />
            </BaseButtons>

            

            
          </div>
          <Table
              :title="'รายการสูตรอาหาร ('+foodDetails.length + ' รายการ)'"
              :items="foodDetails"
              :datas="foodDetailColumns"
              :buttons="buttons" 
              @delete="remove" 
            />
            <FormField class="lg:col-span-3 col-span-2">
              <BaseLevel type="justify-end">
                ราคาสูตรอาหาร/กก. <p class="text-red-700 font-bold p-2">{{ food?.recipe?.amount > 0 ? food.recipe.amount.toFixed(2) : '-' }}</p> บาท <br/> 
              </BaseLevel>
              <BaseLevel type="justify-end">
                จำนวนโค <p class="text-red-700 font-bold p-2">{{ numCowCorral > 0 && numCowCorral ? numCowCorral : '-' }}</p> ตัว <br/> 
              </BaseLevel>
              <BaseLevel type="justify-end">
                รวมเป็นเงิน/วัน <p class="text-red-700 font-bold p-2">{{ food.qty && food?.recipe?.amount > 0 ? food.amount.toFixed(2) : '-' }}</p> บาท
              </BaseLevel>
              <BaseLevel type="justify-end">
                คิดเป็นเงิน/ตัว <p class="text-red-700 font-bold p-2">{{ food.qty && food.amount && numCowCorral ? (food.amount / numCowCorral).toFixed(2) : '-' }}</p> บาท
              </BaseLevel>
            </FormField>
        </CardBox>
          

        <NotificationBar 
          v-if="alert" 
          color="danger" 
          outline
          icon="alertCircleOutline">
            {{ alert }}
        </NotificationBar>
  
        <BaseDivider />
  
        <BaseButtons
          type="justify-center"
        >
          <BaseButton
            label="บันทึก"
            color="success"
            type="submit"
            :loading="loading"
          />
          <BaseButton
            label="ยกเลิก"
            color="danger"
            @click="cancel"
          />
        </BaseButtons>
      </CardBox>
    </OverlayLayer>
  </template>
  
<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import CardBox from '@/components/CardBox.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import OverlayLayer from '@/components/OverlayLayer.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import Table from '@/components/Table.vue'
import DDLRecipe from '@/components/DDL/Recipe.vue'

import { Toast } from "@/utils/alert";
import _ from "lodash"

import FoodService from '@/services/food'
import CowService from '@/services/cow'
import {months,years} from '@/constants/date'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        food : {
          corral : '',
          amount : 0,
          amountAvg : 0,
          numCow : 0,
          year : new Date().getFullYear(),
          month : new Date().getMonth() + 1
        },
        foodDetail : {
          recipe : {},
          qty : null
        },
        foodDetails : [],
        loading : false,
        alert : "",
        ddlCorral : [],
        numCowCorral : null,
        corrals : [],
        months : months(),
        years : years(),
        foodDetailColumns : [
          {
            label : 'สูตรอาหาร',
            value : 'recipe.name'
          },
          {
            label : 'ราคา/กก.',
            value : 'amount',
            type : 'currency'
          },
          {
            label : 'จำนวนที่ให้/วัน (กก.)',
            value : 'qty',
            type : 'number'
          },
          {
            label : 'รวมเป็นเงิน',
            value : 'sumAmount',
            type : 'currency'
          },
        ],
        buttons : [
          {
            label : 'ลบ',
            type : 'delete',
            color : 'danger',
          }
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
    },
    watch:{
      data(n){
        if(n){
          this.food = n;
        }
      },
      'food.recipe'(n){
        if(n){
          const qty = this.food.qty ? this.food.qty : 0
          this.food.amount = qty * n.amount;
        }else{
          this.food.amount = null;
        }
      },
      'food.qty'(n){
        if(n){
          const amount = this.food?.recipe?.amount ? this.food?.recipe?.amount : 0
          this.food.amount = n * amount;
        }else{
          this.food.amount = null;
        }
      },
      'food.corral'(n){
        if(n){
          this.numCowCorral = this.corrals[n].length > 0 ? this.corrals[n].length : null
        }
      }
    },
    created(){
      this.getCorrals()
    },
    methods: {
        clear(){
          this.food = {}
          this.numCowCorral = null
        },
        confirmCancel(mode){
            this.value = false
            this.$emit(mode)  
        },
        confirm(){
            this.clear()
            this.confirmCancel('confirm')
        },
        cancel(){
            this.clear()
            this.confirmCancel('cancel')
        },
        add(){
          const recipe = this.foodDetail.recipe;
          const qty = this.foodDetail.qty;
          const amount = recipe.amount
          const sumAmount = qty * amount
          this.foodDetails.push({recipe,qty,amount,sumAmount})
          this.foodDetail = {}
        },
        remove(obj){
          let index = this.cows.indexOf(obj);
          if (index !== -1) {
            this.foodDetails.splice(index, 1);
          }
        },
        async submit(){
            this.loading = true
            this.alert = ""
            try {
              if(this.mode === 'create'){
                const resp = await FoodService.create(this.food);
                if(resp){
                    this.loading = false
                    this.confirm() 
                }
              }else{
                const resp = await FoodService.update(this.food._id,this.food);
                if(resp){
                    this.loading = false
                    this.confirm()
                }
              }
              Toast.fire({
                icon: 'success',
                title: 'บันทึกข้อมูลสำเร็จ'
              })
            } catch (error) {
              console.error('Error : ',error)
                this.clear()
                this.loading = false  
                this.alert = await error.response.data.message
                Toast.fire({
                  icon: 'error',
                  title: 'บันทึกข้อมูลไม่สำเร็จ'
                })
            }
            
        },
        async getCorrals(){
          const resp = await CowService.all();
          if(resp){
            const cows = resp.data.cows
            this.corrals = _.groupBy(cows,'corral')
            for(let key of Object.keys(this.corrals)){
              this.ddlCorral.push({id:key,label:key})
            }
          }
        },
    },
    components : {
    BaseButton,
    BaseButtons,
    CardBox,
    BaseDivider,
    OverlayLayer,
    FormField,
    FormControl,
    NotificationBar,
    BaseLevel,
    DDLRecipe,
    FormCheckRadioPicker,
    BaseIcon,
    Table
},
    props : {
        modelValue: {
            type: [String, Number, Boolean],
            default: null
        },
        data : {
          type : Object,
          default : null
        },
        mode : {
          type : String,
          default : ""
        },
    }
  }
  
  </script>
  
  
  