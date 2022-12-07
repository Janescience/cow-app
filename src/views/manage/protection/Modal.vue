<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="(this.mode === 'create' ?'บันทึก' : 'แก้ไข') + 'การป้องกัน/บำรุง'"
        class="shadow-lg w-full  overflow-y-auto lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FormField label="โค" help="* ห้ามว่าง" class="col-span-3">
              <DDLCow v-model="protection.cows" multiple/>
          </FormField>
          <FormField label="วัคซีน" help="* ห้ามว่าง" >
              <DDLVaccine v-model="protection.vaccine" />
          </FormField>
          <FormField label="ฉีดวัคซีนล่าสุด" help="* ห้ามว่าง" >
            <FormControl
              v-model="protection.dateCurrent"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="ฉีดวัคซีนครั้งต่อไป" help="* ห้ามว่าง" >
            <FormControl
              v-model="protection.dateNext"
              icon="calendar"
              type="date"
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
import DDLVaccine from '@/components/DDL/Vaccine.vue'

import { getCurrentUser,Toast } from '@/utils'
import { addMonths } from 'date-fns'

import ProtectionService from '@/services/protection'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        protection : {
          cows : [],
          dateCurrent : new Date(),
          dateNext : null,
          vaccine : null,
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
          this.protection = n;
          this.protection.dateCurrent = new Date(n.dateCurrent);
          this.protection.dateNext = new Date(n.dateNext);
        }
      },
    },
    methods: {
        clear(){
          this.protection.cows = []
          this.protection.dateCurrent = new Date()
          this.protection.dateNext = null 
          this.protection.vaccine = null
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
                const resp = await HealService.update(this.protection);
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
    DDLVaccine,
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
  
  
  