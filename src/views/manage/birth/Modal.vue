<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        title="บันทึกการคลอดลูก"
        class="shadow-lg w-full  overflow-y-auto lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <BaseLevel type="justify-start" >
             <BaseIcon path="cow" size="24" class="mr-3"/>{{ show.cow?.code }} : {{ show.cow?.name }}
          </BaseLevel>
          <BaseLevel type="justify-start" >
            การสืบพันธุ์ครั้งที่ : {{ show?.reproduction?.seq }}
          </BaseLevel>
          <BaseLevel type="justify-start" >
            อายุครรภ์ : {{ calAge(show?.pregnantDate) }}
          </BaseLevel>
          <FormField label="วันที่คลอด" help="* ห้ามว่าง" >
            <FormControl
              v-model="create.date"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="เพศ" help="* ห้ามว่าง">
            <FormCheckRadioPicker
              v-model="create.sex"
              type="radio"
              :options="{ M: 'เพศผู้', F: 'เพศเมีย' }"
            />
          </FormField>
          <FormField label="รก" help="* ห้ามว่าง" >
            <FormCheckRadioPicker
              v-model="create.overgrown"
              type="radio"
              :options="{ Y: 'ค้าง', N: 'ไม่ค้าง' }"
            />
          </FormField>
          
          <FormField label="วันที่ใช้ยาขับ" v-if="create.overgrown === 'Y'" >
            <FormControl
              v-model="create.placentaDrugDate"
              icon="calendar"
              type="date"
              :lower-limit="create.date"
            />
          </FormField>
          <FormField label="วันที่ล้างมดลูก" v-if="create.overgrown === 'Y'">
            <FormControl
              v-model="create.uterusWashDate"
              icon="calendar"
              type="date"
              :lower-limit="create.placentaDrugDate"
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

import ReproductService from '@/services/reproduction'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        create : {
          sex : "F",
          overgrown : "N",
          date : new Date(),
          placentaDrugDate : new Date(),
          uterusWashDate : addDays(new Date(),14),
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
        }
      },
      'create.date'(n){
        this.create.placentaDrugDate = n;
      },
      'create.placentaDrugDate'(n){
        this.create.uterusWashDate = addDays(n,14);
      },
    },
    methods: {
        clear(){
          this.create.sex = ""
          this.create.overgrown = ""
          this.create.date = new Date()
          this.create.placentaDrugDate = new Date()
          this.create.uterusWashDate = addDays(new Date(),14)
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
                // if(this.mode === 'create'){
                //   const resp = await ReproductService.create(this.reproduct);
                //   if(resp){
                //       this.loading = false  
                //       this.value = false
                //       this.confirmCancel('confirm')
                //   }
                // }else{
                //   const resp = await ReproductService.update(this.reproduct._id,this.reproduct);
                //   if(resp){
                //       this.loading = false  
                //       this.value = false
                //       this.confirmCancel('confirm')
                //   }
                // }
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
        }
    }
  }
  
  </script>
  
  
  