<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="(this.mode === 'create' ?'บันทึก' : 'แก้ไข') + 'การป้องกัน/บำรุง'"
        class="shadow-lg w-full lg:w-3/5 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <FormField label="วัคซีน" help="* ห้ามว่าง" class="col-span-2">
            <DDLVaccine
              v-model="protection.vaccine"
              valueType="object"
            />
          </FormField>
          <FormField label="จำนวนที่ฉีด (ตัว)" help="* ห้ามว่าง" >
            <FormControl
              v-model="protection.qty"
              icon="calendarClock"
              type="number"
              required
            />
          </FormField>
          <FormField label="รวมเป็นเงิน (บาท)"  >
            {{ protection.amount  }}
          </FormField>
          <FormField label="วันที่ฉีดวัคซีน" help="* ห้ามว่าง" >
            <FormControl
              v-model="protection.date"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="หมายเหตุ"  class="col-span-2">
            <FormControl
              v-model="protection.remark"
              type="textarea"
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
import DDLVaccine from '@/components/DDL/Vaccine.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import OverlayLayer from '@/components/OverlayLayer.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import BaseLevel from '@/components/BaseLevel.vue'

import { Toast } from "@/utils/alert";
import { addMonths } from 'date-fns'

import ProtectionService from '@/services/protection'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        protection : {
          date : new Date(),
          vaccine : {},
          qty : null,
          amount : null,
          remark : '',
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
        },
        user() {
          return this.$store.state.auth.user;
        }
    },
    watch:{
      data(n){
        if(n && this.mode === 'edit'){
          this.protection = n;
          this.protection.date = new Date(n.date);
        }
      },
      'protection.qty'(n){
        if(n){
          this.protection.amount = n * this.protection.vaccine.amount;
        }
      },
    },
    methods: {
        clear(){
          this.protection.date = new Date()
          this.protection.vaccine = {}
          this.protection.qty = null
          this.protection.amount = null
          this.protection.remark = ''
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
                const resp = await ProtectionService.create(this.protection);
                if(resp){
                    this.loading = false
                    this.value = false 
                    this.confirmCancel('confirm') 
                }
              }else{
                const resp = await ProtectionService.update(this.protection._id,this.protection);
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
    FormCheckRadioPicker,
    BaseIcon,
    DDLVaccine
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
  
  
  