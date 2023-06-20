<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="'สิ่งปลูกสร้าง '+(this.mode === 'create' ?'' : '(แก้ไข)')"
        class="shadow-lg w-full   lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5">
          <FormField label="รหัส" :help="mode === 'create' ?'* ห้ามว่าง (บันทึกแล้วแก้ไขไม่ได้)':'* แก้ไขไม่ได้'" >
            <FormControl
              v-model="building.code"
              icon="accountEdit"
              :disabled="mode === 'edit'"
              required
            />
          </FormField>
          <FormField label="ชื่อ" help="* ห้ามว่าง" >
            <FormControl
              v-model="building.name"
              icon="accountEdit"
              required
            />
          </FormField>
          <FormField label="วันที่สร้าง"  help="* ห้ามว่าง" >
            <FormControl
              v-model="building.date"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="ราคา" help="* ห้ามว่าง" >
            <FormControl
              v-model="building.amount"
              type="number"
              icon="cashMultiple"
              required
            />
          </FormField>
          <FormField label="สถานะ" >
            <FormControl
              v-model="building.status"
              :options="status"
            />
          </FormField>
          <FormField label="ผู้ก่อสร้าง"  >
            <FormControl
              v-model="building.builder"
              icon="accountHardHat"
            />
          </FormField>
          <FormField label="หมายเหตุ" >
            <FormControl
              v-model="building.remark"
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
import BaseDivider from '@/components/BaseDivider.vue'
import OverlayLayer from '@/components/OverlayLayer.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import BaseLevel from '@/components/BaseLevel.vue'

import { Toast } from "@/utils/alert";

import Service from '@/services/building'
import { status } from '@/constants/building'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        building : {
          name : '',
          code : '',
          date : new Date(),
          status : 'A',
          amount : null,
          builder : '',
          remark : ''
        },
        status : status('ddl'),
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
    },
    watch:{
      data(n){
        if(n && this.mode === 'edit'){
          this.building = n;
          this.building.date = new Date(n.date);
        }
      },
    },
    methods: {
        clear(){
          this.building = {}
          this.building.date = new Date()
          this.building.status = 'A'
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
                const resp = await Service.create(this.building);
                if(resp){
                    this.loading = false
                    this.confirm() 
                }
              }else{
                const resp = await Service.update(this.building._id,this.building);
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
  
  
  