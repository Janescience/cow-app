<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="(this.mode === 'create' ?'บันทึก' : 'แก้ไข') + 'การคลอดลูก'"
        class="shadow-lg w-full  overflow-y-auto lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <BaseLevel type="justify-start" >
            <BaseIcon path="cow" size="24" class="mr-3"/> แม่พันธ์ {{ show.cow?.code }} : {{ show.cow?.name }}
          </BaseLevel>
          <BaseLevel type="justify-start" >
            การสืบพันธุ์ครั้งที่ : {{ show?.reproduction?.seq }}
          </BaseLevel>
          <BaseLevel type="justify-start" >
            อายุครรภ์ : {{ calAge(show?.pregnantDate,show.birthDate) }}
          </BaseLevel>
          <FormField label="วันที่คลอด" help="* ห้ามว่าง" >
            <FormControl
              v-model="birth.birthDate"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="เพศ" help="* ห้ามว่าง">
            <FormCheckRadioPicker
              v-model="birth.sex"
              type="radio"
              :options="{ M: 'เพศผู้', F: 'เพศเมีย' }"
            />
          </FormField>
          <BaseLevel type="justify-start" v-if="mode === 'edit'">
             <BaseIcon path="babyFaceOutline" size="24" class="mr-3"/> ลูกวัว {{ show.calf?.code }} : {{  show.calf?.name }}
          </BaseLevel>
          <FormField label="ชื่อลูกวัว" v-if="(birth.sex == 'F' && mode === 'create')" help="* ห้ามว่าง">
            <FormControl
              v-model="birth.newCow.name"
              icon="babyFaceOutline"
              required
            />
          </FormField>
          <FormField label="รก" help="* ห้ามว่าง" >
            <FormCheckRadioPicker
              v-model="birth.overgrown"
              type="radio"
              :options="{ Y: 'ค้าง', N: 'ไม่ค้าง' }"
            />
          </FormField>
          
          <FormField label="วันที่ใช้ยาขับ" v-if="birth.overgrown === 'Y'" help="* ห้ามว่าง (วันที่คลอด + 15 วัน)">
            <FormControl
              v-model="birth.drugDate"
              icon="calendar"
              type="date"
              :lower-limit="birth.date"
            />
          </FormField>
          <FormField label="วันที่ล้างมดลูก" v-if="birth.overgrown === 'Y'" help="* ห้ามว่าง (วันที่ใช้ยาขับ + 14 วัน)">
            <FormControl
              v-model="birth.washDate"
              icon="calendar"
              type="date"
              :lower-limit="birth.drugDate"
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
  
<script >
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

import { addDays } from 'date-fns'
import { getCurrentUser } from '@/utils'
import getAge from "@/utils/age-calculate";

import BirthService from '@/services/birth'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        birth : {
          sex : "F",
          overgrown : "N",
          birthDate : new Date(),
          drugDate : addDays(new Date(),15),
          washDate : addDays(new Date(),29),
          newCow : {
            name : "",
            mom : "",
            farm : getCurrentUser().farm._id
          },
          reproduction : ""
        },
        show : {
          cow : null,
          seq : ""
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
          this.show = n
          this.birth.newCow.mom = n.cow.code
          this.birth.newCow.name = n.calf?.name
          this.birth.reproduction = n.reproduction?._id
          if(this.mode === 'edit'){
            this.birth.birthDate = new Date(n.birthDate)
            this.birth.drugDate = new Date(n.drugDate)
            this.birth.washDate = new Date(n.washDate)
            this.birth.overgrown = n.overgrown
          }
            
        }
      },
      'birth.birthDate'(n){
        this.birth.drugDate = addDays(n,15);
      },
      'birth.drugDate'(n){
        this.birth.washDate = addDays(n,14);
      },
    },
    methods: {
        clear(){
          this.birth.sex = "F"
          this.birth.overgrown = "N"
          this.birth.newCow.name = "" 
          this.birth.birthDate = new Date()
          this.birth.drugDate = addDays(new Date(),15)
          this.birth.washDate = addDays(new Date(),14)
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
              if(this.birth.overgrown === "N"){
                this.birth.drugDate = null
                this.birth.washDate = null
              }
              if(this.mode === 'create'){
                const resp = await BirthService.create(this.show._id,this.birth);
                if(resp){
                    this.loading = false
                    this.value = false 
                    this.confirmCancel('confirm') 
                }
              }else{
                const resp = await BirthService.update(this.show._id,this.birth);
                if(resp){
                    this.loading = false
                    this.value = false
                    this.confirmCancel('confirm')  
                }
              }
            } catch (error) {
              console.error('Error : ',error)
                this.loading = false  
                this.alert = error.response.data.message
            }
            
        },
        calAge(checkDate){
          return getAge(checkDate);
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
  
  
  