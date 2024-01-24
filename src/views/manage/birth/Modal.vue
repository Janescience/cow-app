<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="(this.mode === 'create' ?'บันทึก' : 'แก้ไข') + 'การคลอดลูก'"
        class="shadow-lg w-full lg:w-3/5 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <BaseLevel type="justify-start" >
            <BaseIcon path="cow" size="24" class="mr-3"/> {{ birth.cow?.code }} - {{ birth.cow?.name }}
          </BaseLevel>
          <BaseLevel type="justify-start" >
            สืบพันธุ์ครั้งที่  {{ birth?.reproduction?.seq }}
          </BaseLevel>
          <BaseLevel type="justify-start" >
            ตั้งครรภ์ {{ formatDate(birth?.pregnantDate) }}
          </BaseLevel>
          <BaseLevel type="justify-start" >
            อายุครรภ์ {{ calAge(birth?.pregnantDate,birth.birthDate) }}
          </BaseLevel>
          <FormField label="คลอด" help="* ห้ามว่าง" >
            <FormControl
              v-model="birth.birthDate"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="สถานะ" >
            <FormCheckRadioPicker
              v-model="birth.status"
              type="radio"
              :options="{ B: 'คลอดแล้ว', P: 'ตั้งครรภ์' }"
            />
          </FormField>
          <FormField v-if="birth.status == 'B'" label="เพศ" >
            <FormCheckRadioPicker
              v-model="birth.sex"
              type="radio"
              :options="{ M: 'เพศผู้', F: 'เพศเมีย' }"
            />
          </FormField>
          <FormField label="ชื่อลูก" v-if="birth.status == 'B' && birth.sex == 'F' && !birth.calf?._id" help="* ห้ามว่าง">
            <FormControl
              v-model="birth.calf.name"
              icon="babyFaceOutline"
              required
            />
          </FormField>
          <FormField label="ลูก" v-else-if="birth.status == 'B' && birth.sex == 'F' && birth.calf?._id" >
            <a :href="'/manage/cow/detail/'+birth.calf._id" class="underline">{{ birth.calf.code +' : '+birth.calf.name }}</a>
          </FormField>
          <FormField v-if="birth.status == 'B'" label="รก" help="* ห้ามว่าง" >
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
import moment from 'moment';
import getAge from "@/utils/age-calculate";
import { Toast } from "@/utils/alert";

import BirthService from '@/services/birth'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
import { handleError } from 'vue'
  
  export default {
    data () {
      return {
        birth : {
          sex : "",
          overgrown : "",
          birthDate : new Date(),
          drugDate : addDays(new Date(),15),
          washDate : addDays(new Date(),29),
          calf : {
            name : "",
          },
          status : "",
          reproduction : "",
          gestAge : null
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
        },
        user() {
          return this.$store.state.auth.user;
        }
    },
    watch:{
      data : {
        handler(n,o){
          if(n){
            this.birth = n
            if(!this.birth.calf){
              this.birth.calf = {}
            }
            // this.birth.newCow.name = n.calf?.name
            // this.birth.reproduction = n.reproduction?._id
            // if(this.mode === 'edit'){
            this.birth.birthDate = new Date(n.birthDate)
            this.birth.drugDate = n.drugDate ? new Date(n.drugDate) : null
            this.birth.washDate = n.washDate ? new Date(n.washDate) : null
            //   this.birth.overgrown = n.overgrown
            // }
              
          }
        },
        // deep : true
      },
      'birth.birthDate'(n){
        if(this.birth.status == 'B'){
          this.birth.drugDate = addDays(n,15);
        }
      },
      'birth.drugDate'(n){
        if(this.birth.status == 'B'){
          this.birth.washDate = addDays(n,14);
        }
      },
    },
    methods: {
        clear(){
          this.birth = {}
        },
        confirmCancel(mode){
            this.value = false
            this.$emit(mode)
            this.$emit('update:data',null)
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
              this.birth.gestAge = getAge(this.birth?.pregnantDate,this.birth.birthDate).ageNumber
              if(this.birth.overgrown === "N"){
                this.birth.drugDate = null
                this.birth.washDate = null
              }
              if(this.birth.status == 'P'){
                this.birth.sex = ""
                this.birth.drugDate = null
                this.birth.washDate = null
              }
              const resp = await BirthService.create(this.birth._id,this.birth);
              if(resp){
                  this.loading = false
                  this.value = false 
                  this.confirmCancel('confirm') 
                  Toast.fire({
                    icon: 'success',
                    title: 'บันทึกข้อมูลสำเร็จ'
                  })
              }
            } catch (error) {
              console.error('Error : ',error)
              this.loading = false  
              this.alert = error.response.data.message
            }
            
        },
        calAge(checkDate){
          return getAge(checkDate).ageString;
        },
        formatDate(date){
          return moment(date).format('DD/MM/YYYY')
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
  
  
  