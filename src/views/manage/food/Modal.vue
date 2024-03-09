<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="(this.mode === 'create' ?'บันทึก' : 'แก้ไข') + 'การให้อาหาร'"
        class="shadow-lg w-full lg:w-3/4 z-50"
        header-icon="close"
        modal
        form
        has-scroll
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid lg:grid-cols-5 grid-cols-2 gap-5">
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
          <FormField label="คอก"  >
            <FormControl 
              v-model="food.corral"
              required
              disabled
            />
          </FormField>
          <FormField label="จำนวนโค"  >
            <FormControl 
              v-model="food.numCow"
              required
              disabled
            />
          </FormField>
        </div>
        <CardBox 
          title="รายละเอียดสูตรอาหาร"
          v-if="food.corral"
          header-icon=""
          class="dark:bg-slate-700 lg:mt-0 mt-3">
          <div class="grid lg:grid-cols-3 grid-cols-2 gap-5">
            <FormField label="สูตรอาหาร" help="* ห้ามว่าง" class="lg:col-span-1 col-span-2">
              <DDLRecipe
                v-model="foodDetail.recipe"
                valueType="object"
              />
            </FormField>
            <FormField label="จำนวน/วัน (กก.)" help="* ห้ามว่าง" >
              <FormControl
                v-model="foodDetail.qty"
                icon="shaker"
                type="number"
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
                :disabled="!foodDetail.recipe || !foodDetail.qty"
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
              perPage="5" 
              @delete="remove" 
            />
            <CardBox 
              title="สรุป"
              v-if="food.corral"
              header-icon=""
              has-table
              class="dark:bg-slate-800 mt-3">
              <div class="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th/>
                      <th class=" whitespace-nowrap ">จำนวน/วัน (กก.) </th>
                      <th class=" whitespace-nowrap">ราคา/วัน </th>
                      <th class=" whitespace-nowrap">จำนวน/เดือน (กก.)</th>
                      <th class=" whitespace-nowrap">ราคา/เดือน</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class=" whitespace-nowrap ">โค 1 ตัว</td>
                      <td>{{   $filters.number(sum().qtyPerCow) }}</td>
                      <td>{{   $filters.currency(sum().amountPerCow) }}</td>
                      <td>{{   $filters.number(sum().qtyPerCow * daysOfMonth()) }}</td>
                      <td>{{   $filters.currency(sum().amountPerCow * daysOfMonth()) }}</td>
                    </tr>
                    <tr>
                      <td>โค {{ numCowCorral }} ตัว</td>
                      <td>{{ $filters.number(sum().qty) }}</td>
                      <td>{{ $filters.currency(sum().amount) }}</td>
                      <td>{{ $filters.number(sum().qty * daysOfMonth()) }}</td>
                      <td>{{ $filters.currency(sum().amount * daysOfMonth()) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBox>
            
            
            
            
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
            :disabled="foodDetails.length === 0"
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
            value : 'recipe.amount',
            type : 'currency'
          },
          {
            label : 'จำนวน/วัน (กก.)',
            value : 'qty',
            type : 'number'
          },
          {
            label : 'รวมเป็นเงิน/วัน',
            value : 'amount',
            type : 'currency'
          }
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
        this.food = n;
        this.food.year = n?.year ? n.year :  new Date().getFullYear()
        this.food.month = n?.month ? n.month : new Date().getMonth() + 1
        this.foodDetails = n?.foodDetails ?  n.foodDetails : []
        for(let foodDetail of this.foodDetails){
          foodDetail.recipe = foodDetail.relate?.recipe
        }
      },
      'food.corral'(n){
        if(n){
          this.numCowCorral = this.corrals[n].length > 0 ? this.corrals[n].length : null
          if(this.mode !== 'edit')
            this.food.numCow = this.numCowCorral
        }
      }
    },
    created(){
      this.getCorrals()
    },
    methods: {
        clear(){
          this.food = {}
          this.foodDetails = []
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
          const amount = qty * recipe.amount
          this.foodDetails.push({recipe,qty,amount})
          this.foodDetail = {}
        },
        sum(){
          const sumAmount = this.foodDetails.reduce((sum, item) => sum + item.amount, 0);
          const sumQty = this.foodDetails.reduce((sum, item) => sum + item.qty, 0);
          const sumAmountPerCow = sumAmount/(this.numCowCorral?this.numCowCorral:0)
          const sumQtyPerCow = sumQty/(this.numCowCorral?this.numCowCorral:0)
          return {
            qty : sumQty,
            amount : sumAmount,
            amountPerCow : sumAmountPerCow,
            qtyPerCow : sumQtyPerCow
          }
        },
        daysOfMonth(){
          const days = new Date(this.food.year,this.food.month, 0).getDate()
          return days
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
            this.food.foodDetails = this.foodDetails
            this.food.numCow = this.numCowCorral
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
  
  
  