<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="'คนงาน '+(this.mode === 'create' ?'' : '(แก้ไข)')"
        class="shadow-lg w-full   lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-5">
          <FormField label="ชื่อ" help="* ห้ามว่าง" >
            <FormControl
              v-model="worker.name"
              icon="accountEdit"
              required
            />
          </FormField>
          <FormField label="อายุ"  >
            <FormControl
              v-model="worker.age"
              type="number"
              icon="cardAccountDetails"
            />
          </FormField>
          <FormField label="เบอร์โทรศัพท์"  >
            <FormControl
              v-model="worker.phoneNumber"
              icon="phone"
            />
          </FormField>
          <FormField label="ประเทศ"  help="* ห้ามว่าง">
            <FormControl
              v-model="worker.country"
              icon="flag"
              required
            />
          </FormField>
          <FormField label="วันที่เริ่มงาน"  help="* ห้ามว่าง" >
            <FormControl
              v-model="worker.startDate"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="วันที่สิ้นสุดงาน"  >
            <FormControl
              v-model="worker.endDate"
              icon="calendar"
              type="date"
            />
          </FormField>
          <FormField label="หน้าที่" help="* ห้ามว่าง" >
            <FormControl
              v-model="worker.duty"
              icon="shovel"
              required
            />
          </FormField>
          <FormField label="เงินเดือน" help="* ห้ามว่าง" >
            <FormControl
              v-model="worker.salary"
              type="number"
              icon="cashMultiple"
              required
            />
          </FormField>
          <FormField label="สถานะ" >
            <FormControl
              v-model="worker.status"
              :options="status"
            />
          </FormField>
          <FormField label="หมายเหตุ" >
            <FormControl
              v-model="worker.remark"
              type="textarea"
            />
          </FormField>
        </div>
        <FormField label="" help="* เลือก = บันทึกประวัติเงินเดือนก่อนการเปลี่ยนแปลง, ไม่เลือก = ต้องการอัพเดตแค่ข้อมูลปัจจุบัน">
          <FormCheckRadioPicker
              v-model="worker.change"
              name="change"
              v-if="mode === 'edit'"
              :options="{ change: 'บันทึกประวัติการเปลี่ยนแปลง' }"
          />
          </FormField>

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

import Service from '@/services/worker'
import { status } from '@/constants/worker'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        worker : {
          name : '',
          age : '',
          duty : '',
          startDate : new Date(),
          endDate : null,
          phoneNumber : '',
          country : '',
          status : 'W',
          salary : '',
          remark : '',
          change : true
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
          this.worker = n;
          this.worker.startDate = new Date(n.startDate);
          this.worker.endDate = n.endDate ? new Date(n.endDate) : null;
        }
      },
    },
    methods: {
        clear(){
          this.worker.name = ''
          this.worker.age = ''
          this.worker.startDate = new Date()
          this.worker.endDate = null
          this.worker.country = "" 
          this.worker.phoneNumber = "" 
          this.worker.duty = "" 
          this.worker.remark = ""
          this.worker.salary = ""
          this.worker.status = 'W'
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
                const resp = await Service.create(this.worker);
                if(resp){
                    this.loading = false
                    this.value = false 
                    this.confirmCancel('confirm') 
                }
              }else{
                const resp = await Service.update(this.worker._id,this.worker);
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
  
  
  