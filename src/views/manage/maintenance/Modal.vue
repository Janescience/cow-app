<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="'การซ่อมบำรุง '+(this.mode === 'create' ?'' : '(แก้ไข)')"
        class="shadow-lg w-full   lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5">
          <FormField label="หมวดหมู่" help="* ห้ามว่าง" >
            <FormControl
              v-model="maintenance.category"
              icon="accountEdit"
              :options="categories"
              required
            />
          </FormField>
          <FormField label="รายการ" help="* ห้ามว่าง" v-if="maintenance?.category">
            <FormControl
              v-model="maintenance.code"
              icon="accountEdit"
              :options="list"
              required
            />
          </FormField>
          <FormField label="วันที่ซ่อม"  help="* ห้ามว่าง" >
            <FormControl
              v-model="maintenance.date"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="รายละเอียด" >
            <FormControl
              v-model="maintenance.reason"
              type="textarea"
            />
          </FormField>
          <FormField label="ราคา" help="* ห้ามว่าง" >
            <FormControl
              v-model="maintenance.amount"
              type="number"
              icon="cashMultiple"
              required
            />
          </FormField>
          <FormField label="ผู้ซ่อมบำรุง"  >
            <FormControl
              v-model="maintenance.maintenancer"
              icon="accountHardHat"
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

import Service from '@/services/maintenance'
import EService from '@/services/equipment'
import BService from '@/services/building'
import { categories } from '@/constants/maintenance'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        maintenance : {
          code : '',
          date : null,
          category : 'E',
          amount : null,
          maintenancer : '',
          reason : ''
        },
        list : [],
        categories : categories('create'),
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
    created(){
      if(this.mode === 'create'){
        this.equipments()
      }
    },
    watch:{
      data(n){
        if(n && this.mode === 'edit'){
          this.maintenance = n;
          this.maintenance.date = new Date(n.date);
        }
      },
      'maintenance.category'(n){
        if(n === 'E'){
          this.equipments()
        }else if(n === 'B'){
          this.buildings()
        }
      },
    },
    methods: {
        clear(){
          this.maintenance = {}
          this.maintenance.category = 'E'
          this.maintenance.date = new Date()
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
              if(this.mode === 'create'){
                const resp = await Service.create(this.maintenance);
                if(resp){
                    this.loading = false
                    this.confirm() 
                }
              }else{
                const resp = await Service.update(this.maintenance._id,this.maintenance);
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
        async equipments(){
          const resp = await EService.all();
          if(resp.data){
            this.list = [{id:'',label:'เลือกรายการ'}]
            const equipments = resp.data.equipments
            for(let e of equipments){
              this.list.push({id:e.code,label:e.code+ ' : '+e.name})
            }
          }else{
            this.list = [{id:'',label:'ไม่มีรายการ'}]
          }
        },
        async buildings(){
          const resp = await BService.all();
          if(resp.data){
            this.list = [{id:'',label:'เลือกรายการ'}]
            const buildings = resp.data.buildings
            for(let b of buildings){
              this.list.push({id:b.code,label:b.code+ ' : '+b.name})
            }
          }else{
            this.list = [{id:'',label:'ไม่มีรายการ'}]
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
  
  
  