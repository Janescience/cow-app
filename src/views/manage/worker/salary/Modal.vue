<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="'เงินเดือน '+(this.mode === 'create' ?'' : '(แก้ไข)')"
        class="shadow-lg w-full   lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5">
          <FormField label="ปี พ.ศ." help="* ห้ามว่าง" >
              <FormControl
                v-model="salary.year"
                :options="years"
              />
            </FormField>
            <FormField label="เดือน" help="* ห้ามว่าง" >
              <FormControl
                v-model="salary.month"
                :options="months"
              />
            </FormField>
            <FormField label="เงินเดือน" help="* ห้ามว่าง " >
              <FormControl
                icon="cashMultiple"
                type="number"
                v-model="salary.amount"
              />
            </FormField>
            <FormField label="หมายเหตุ"  >
              <FormControl
                v-model="salary.remark"
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

import Service from '@/services/salary'

import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        salary : {
          year : new Date().getFullYear(),
          month : new Date().getMonth() + 1,
          amount : null,
          remark : '',
        },
        years : [],
        months : [
          {id:1,label:'มกราคม'},
          {id:2,label:'กุมภาพันธ์'},
          {id:3,label:'มีนาคม'},
          {id:4,label:'เมษายน'},
          {id:5,label:'พฤษภาคม'},
          {id:6,label:'มิถุนายน'},
          {id:7,label:'กรกฏาคม'},
          {id:8,label:'สิงหาคม'},
          {id:9,label:'กันยายน'},
          {id:10,label:'ตุลาคม'},
          {id:11,label:'พฤศจิกายน'},
          {id:12,label:'ธันวาคม'},
        ],
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
          this.salary = n;
        }
      },
    },
    created(){
      this.getYears()
    },
    methods: {
        clear(){
          this.salary = {}
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
            this.salary.worker = this.$route.params.id
            try {
              if(this.mode === 'create'){
                const resp = await Service.create(this.salary);
                if(resp){
                    this.loading = false
                    this.value = false 
                    this.confirmCancel('confirm') 
                }
              }else{
                const resp = await Service.update(this.salary._id,this.salary);
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
        getYears(){
          const currentYearTh = new Date().getFullYear() + 543
          const currentYear = new Date().getFullYear()

          for(let i = 5 ; i>0;i--){
            this.years.push({id:currentYear+i,label:currentYearTh+i})
          }

          this.years.push({id:currentYear,label:currentYearTh})

          for(let i = 1 ; i<6;i++){
            this.years.push({id:currentYear-i,label:currentYearTh-i})
          }

        }
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
  
  
  