<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="(this.mode === 'create' ?'บันทึก' : 'แก้ไข') + 'วัคซีน'"
        class="shadow-lg w-full lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <FormField label="รหัสวัคซีน" help="* ห้ามว่าง" >
            <FormControl
              v-model="vaccine.code"
              icon="needle"
              required
            />
          </FormField>
          <FormField label="ชื่อวัคซีน" help="* ห้ามว่าง" >
            <FormControl
              v-model="vaccine.name"
              icon="needle"
              required
            />
          </FormField>
          <FormField label="ความถี่ (เดือน)" help="* ห้ามว่าง" >
            <FormControl
              v-model="vaccine.frequency"
              icon="calendarClock"
              type="number"
              required
            />
          </FormField>
          <FormField label="ราคาวัคซีน" help="* ห้ามว่าง" >
            <FormControl
              v-model="vaccine.price"
              icon="cashMultiple"
              type="number"
              required
            />
          </FormField>
          <FormField label="ปริมาณ (ลิตร)" help="* ห้ามว่าง" >
            <FormControl
              v-model="vaccine.quantity"
              icon="quantity"
              type="number"
              required
            />
          </FormField>
          <FormField label="จำนวนโค" help="* ห้ามว่าง " >
            <FormControl
              v-model="vaccine.use"
              icon="cashMultiple"
              type="number"
              required
            />
          </FormField>
          <FormField label="คิดเป็นเงิน/ตัว"  >
            {{ vaccine.amount  ? vaccine.amount  : '-' }}
          </FormField>
          <FormField v-if="this.mode === 'edit'" label="ฉีดวัคซีนล่าสุด"  >
            {{ vaccine.dateCurrent ? vaccine.dateCurrent : '-' }}
          </FormField>
          <FormField v-if="this.mode === 'edit'" label="ฉีดวัคซีนครั้งต่อไป"  >
            {{ vaccine.dateNext ? vaccine.dateNext : '-' }}
          </FormField>
          <FormField label="หมายเหตุ"  class="col-span-2">
            <FormControl
              v-model="vaccine.remark"
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
import { addMonths } from 'date-fns';
import _ from 'lodash';
import moment from 'moment';

import VaccineService from '@/services/vaccine'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        vaccine : {
          dateCurrent :null,
          dateNext : null,
          code : '',
          name : '',
          price : null,
          quantity : null,
          amount : null,
          frequency : null,
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
          this.vaccine = n;
          if(this.vaccine.protections.length > 0){
            const sorted = _.orderBy(this.vaccine.protections,'date','desc');
            if(sorted.length > 0){
              this.vaccine.dateCurrent = moment(sorted[0].date).format('DD/MM/YYYY');
              this.vaccine.dateNext = moment(sorted[0].date).add(this.vaccine.frequency,'months').format('DD/MM/YYYY');
            }
            
          }
        }
      },
      'vaccine.price'(n){
        if(!n){
          this.vaccine.amount = null
        }else{
          this.vaccine.amount = n/this.vaccine.use;

        }
      },
      'vaccine.use'(n){
        if(!n){
          this.vaccine.amount = null
        }else{
          this.vaccine.amount = this.vaccine.price/n;
        }
      }
    },
    methods: {
        clear(){
          this.vaccine.dateCurrent = new Date()
          this.vaccine.dateNext = null 
          this.vaccine.code = ''
          this.vaccine.name = ''
          this.vaccine.amount = null
          this.vaccine.frequency = ''
          this.vaccine.remark = ''
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
                const resp = await VaccineService.create(this.vaccine);
                if(resp){
                    this.loading = false
                    this.value = false 
                    this.confirmCancel('confirm') 
                }
              }else{
                const resp = await VaccineService.update(this.vaccine._id,this.vaccine);
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
  
  
  