<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="(this.mode === 'create' ?'บันทึก' : 'แก้ไข') + 'การรักษา'"
        class="shadow-lg w-full   lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-5">
          <FormField label="โค" help="* ห้ามว่าง">
              <DDLCow v-model="heal.cow" valueType="object"/>
          </FormField>
          <FormField label="วันที่รักษา" help="* ห้ามว่าง" >
            <FormControl
              v-model="heal.date"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="คนรักษา"  >
            <FormControl
              v-model="heal.healer"
              icon="doctor"
            />
          </FormField>
          <FormField label="อาการ/โรค"  help="* ห้ามว่าง" class="col-span-2 ">
            <FormControl
              v-model="heal.disease"
              type="textarea"
              required
            />
          </FormField>
          <FormField label="วิธีการรักษา" class="col-span-2 lg:col-span-1">
            <FormControl
              v-model="heal.method"
              type="textarea"
            />
          </FormField>
          <FormField label="ค่ารักษา" >
            <FormControl
              v-model="heal.amount"
              type="number"
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
import DDLCow from '@/components/DDL/Cow.vue'

import { Toast } from "@/utils/alert";

import HealService from '@/services/heal'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        heal : {
          cow : {},
          date : new Date(),
          disease : "",
          method : "",
          healer : "",
          amount : null
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
        if(n){
          this.heal = n;
          this.heal.date = n.date ? new Date(n.date) : null;
        }
      },
    },
    methods: {
        clear(){
          this.heal = {}
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
                const resp = await HealService.create(this.heal);
                if(resp){
                    this.loading = false
                    this.value = false 
                    this.confirmCancel('confirm')
                    Toast.fire({
                      icon: 'success',
                      title: 'บันทึกข้อมูลสำเร็จ'
                    }) 
                }
              }else{
                const resp = await HealService.update(this.heal._id,this.heal);
                if(resp){
                    this.loading = false
                    this.value = false
                    this.confirmCancel('confirm')
                    Toast.fire({
                      icon: 'success',
                      title: 'บันทึกข้อมูลสำเร็จ'
                    })   
                }
              }
              
            } catch (error) {
              console.error('Error : ',error)
                this.loading = false  
                this.alert = error.response.data.message
                Toast.fire({
                  icon: 'error',
                  title: 'บันทึกข้อมูลไม่สำเร็จ กรุณาติดต่อผู้ดูแลระบบ'
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
      DDLCow,
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
  
  
  