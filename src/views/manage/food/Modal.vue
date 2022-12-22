<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="(this.mode === 'create' ?'บันทึก' : 'แก้ไข') + 'การให้อาหาร'"
        class="shadow-lg w-full  overflow-y-auto lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FormField label="คอก" help="* ห้ามว่าง" >
            <FormControl
              v-model="food.corral"
              icon="barn"
              required
            />
          </FormField>
          <FormField label="สูตรอาหาร" help="* ห้ามว่าง" >
            <DDLRecipe
              v-model="food.recipe"
              required
            />
          </FormField>
          <FormField v-if="food.recipe">
            ราคา/กก. {{ food.recipe?.amout }} บาท
          </FormField>
          <FormField v-if="food.recipe" label="จำนวนที่ให้/วัน (กก.)" help="* ห้ามว่าง" >
            <FormControl
              v-model="food.qty"
              icon="barn"
              type="number"
              required
            />
          </FormField>
          <FormField v-if="food.qty && food.qty > 0">
            รวมเป็นเงิน/วัน {{ food.qty * food.recipe?.amout }} บาท
          </FormField>
        </div>

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
import DDLRecipe from '@/components/DDL/Recipe.vue'

import { getCurrentUser } from '@/utils'
import { Toast } from "@/utils/alert";
import { addMonths } from 'date-fns'

import FoodService from '@/services/food'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        food : {
          corral : '',
          recipe : {},
          qty : 0,
          farm :getCurrentUser().farm._id
        },
        loading : false,
        alert : ""
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
        }
    },
    watch:{
      data(n){
        if(n && this.mode === 'edit'){
          this.food = n;
        }
      },
    },
    methods: {
        clear(){
          this.food.corral = ''
          this.food.recipe = {} 
          this.food.qty = 0
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
        async submit(){
            this.loading = true
            this.alert = ""
            try {
              if(this.mode === 'create'){
                const resp = await FoodService.create(this.food);
                if(resp){
                    this.loading = false
                    this.value = false 
                    this.confirmCancel('confirm') 
                }
              }else{
                const resp = await FoodService.update(this.food._id,this.food);
                if(resp){
                    this.loading = false
                    this.value = false
                    this.confirmCancel('confirm')  
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
    BaseIcon
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
  
  
  