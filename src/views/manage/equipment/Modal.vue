<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="'อุปกรณ์ '+(this.mode === 'create' ?'' : '(แก้ไข)')"
        class="shadow-lg w-full   lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5">
          <FormField label="รหัส" help="* ห้ามว่าง" >
            <FormControl
              v-model="equipment.code"
              icon="accountEdit"
              required
            />
          </FormField>
          <FormField label="ชื่อ" help="* ห้ามว่าง" >
            <FormControl
              v-model="equipment.name"
              icon="accountEdit"
              required
            />
          </FormField>
          <FormField label="วันที่เริ่มใช้งาน"  help="* ห้ามว่าง" >
            <FormControl
              v-model="equipment.startDate"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="วันที่สิ้นสุดใช้งาน"  >
            <FormControl
              v-model="equipment.endDate"
              icon="calendar"
              type="date"
            />
          </FormField>
          <FormField label="ราคา" help="* ห้ามว่าง" >
            <FormControl
              v-model="equipment.amount"
              type="number"
              icon="cashMultiple"
              required
            />
          </FormField>
          <FormField label="สถานะ" >
            <FormControl
              v-model="equipment.status"
              :options="status"
            />
          </FormField>
          <FormField label="หมายเหตุ" >
            <FormControl
              v-model="equipment.remark"
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

import Service from '@/services/equipment'
import { status } from '@/constants/equipment'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        equipment : {
          name : '',
          code : '',
          startDate : new Date(),
          endDate : null,
          status : 'A',
          amount : '',
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
        user() {
          return this.$store.state.auth.user;
        }
    },
    watch:{
      data(n){
        if(n && this.mode === 'edit'){
          this.equipment = n;
          this.equipment.startDate = new Date(n.startDate);
          this.equipment.endDate = n.endDate ? new Date(n.endDate) : null;
        }
      },
    },
    methods: {
        clear(){
          this.equipment.name = ''
          this.equipment.code = ''
          this.equipment.startDate = new Date()
          this.equipment.endDate = null
          this.equipment.remark = ""
          this.equipment.amount = ""
          this.equipment.status = 'A'
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
                const resp = await Service.create(this.equipment);
                if(resp){
                    this.loading = false
                    this.value = false 
                    this.confirmCancel('confirm') 
                }
              }else{
                const resp = await Service.update(this.equipment._id,this.equipment);
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
  
  
  