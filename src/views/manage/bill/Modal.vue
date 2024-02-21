<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="'ค่าใช้จ่ายเพิ่มเติม '+(this.mode === 'create' ?'' : '(แก้ไข)')"
        class="shadow-lg w-full   lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5">
          <FormField label="ค่าใช้จ่าย" help="* ห้ามว่าง" >
            <FormControl
              v-model="bill.code"
              icon="accountEdit"
              :options="expenses"
              required
            />
          </FormField>
          <FormField label="รายละเอียดเพิ่มเติม" help="* ห้ามว่าง" v-if="bill?.code === 'OTH'">
            <FormControl
              v-model="bill.remark"
              icon="accountEdit"
              required
            />
          </FormField>
          <FormField label="เดือน" help="* ห้ามว่าง" >
            <FormControl
              v-model="bill.month"
              icon="calendar"
              :options="months"
              required
            />
          </FormField>
          <FormField label="ปี" help="* ห้ามว่าง" >
            <FormControl
              v-model="bill.year"
              icon="calendar"
              :options="years"
              required
            />
          </FormField>
          <FormField label="จำนวนเงิน" help="* ห้ามว่าง" >
            <FormControl
              v-model="bill.amount"
              type="number"
              icon="cashMultiple"
              required
            />
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

import { Toast } from "@/utils/alert";

import Service from '@/services/bill'
import { expenses } from '@/constants/bill'
import { months,years } from '@/constants/date'

  
  export default {
    data () {
      return {
        bill : {
          name : '',
          code : '',
          date : new Date(),
          amount : '',
          remark : ''
        },
        months : months(),
        years : years(),
        expenses : expenses('create'),
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
          this.bill = n;
          this.bill.date = new Date(n.date);
        }
      },
    },
    methods: {
        clear(){
          this.bill = {}
          this.bill.date = new Date()
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
            this.confirmCancel('cancel')
        },
        async submit(){
            this.loading = true
            this.alert = ""
            try {
              this.bill.name = this.expenses.filter(e => e.id === this.bill.code)[0].label
              if(this.mode === 'create'){
                const resp = await Service.create(this.bill);
                if(resp){
                    this.loading = false
                    this.confirm() 
                }
              }else{
                const resp = await Service.update(this.bill._id,this.bill);
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
                this.loading = false  
                this.alert = error.response.data.message
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
  
  
  