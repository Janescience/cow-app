<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="mode === 'create' ? 'เพิ่มการสืบพันธุ์' : 'แก้ไขการสืบพันธุ์'"
        class="shadow-lg w-full lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-1">
          <FormField label="โค" help="* ห้ามว่าง">
            <DDLCow v-model="reproduct.cow" />
          </FormField>
          <FormField label="พ่อพันธุ์" help="">
            <FormControl
              v-model="reproduct.dad"
              icon="genderMale"
            />
          </FormField>
          
          <FormField label="วันที่เข้าระบบสืบพันธุ์" help="* ห้ามว่าง">
            <FormControl
              v-model="reproduct.loginDate"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="ผล" >
            <FormControl
              v-model="reproduct.result"
              :options="result"
            />
          </FormField>
          <FormField label="วิธีการรักษา" help="" v-if="reproduct.result == 1">
            <FormControl
              v-model="reproduct.howTo"
              icon="doctor"
            />
          </FormField>
          <FormField label="วันที่เป็นสัด" help="* ห้ามว่าง (วันที่เข้าระบบสืบพันธุ์ + 21 วัน)" v-if="reproduct.result == 2">
            <FormControl
              v-model="reproduct.estrusDate"
              icon="calendar"
              type="date"
              :lower-limit="reproduct.loginDate"
              required
            />
          </FormField>
          <FormField label="วันที่ผสมพันธุ์" help="* ห้ามว่าง (วันที่เป็นสัด + 24 ชม)"  v-if="reproduct.result == 2">
            <FormControl
              v-model="reproduct.matingDate"
              icon="calendar"
              type="date"
              :lower-limit="reproduct.estrusDate"
              required
            />
          </FormField>
          <FormField label="วันที่ตรวจท้อง" help="* ห้ามว่าง (วันที่ผสมพันธุ์ + 2 เดือน)"  v-if="reproduct.result == 2">
            <FormControl
              v-model="reproduct.checkDate"
              icon="calendar"
              type="date"
              :lower-limit="reproduct.matingDate"
              required
            />
          </FormField>
          <FormField label="สถานะ" >
            <FormControl
              v-model="reproduct.status"
              :options="status"
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
  import BaseButtons from '@/components/BaseButtons.vue'
  import CardBox from '@/components/CardBox.vue'
  import BaseDivider from '@/components/BaseDivider.vue'
  import OverlayLayer from '@/components/OverlayLayer.vue'
  import FormField from '@/components/FormField.vue'
  import FormControl from '@/components/FormControl.vue'
  import NotificationBar from '@/components/NotificationBar.vue'
  import BaseLevel from '@/components/BaseLevel.vue'
  import DDLCow from '@/components/DDL/Cow.vue'

  import { addDays,addMonths } from 'date-fns'

  import { reproductStatus , reproductResult  } from '@/constants/reproduct'
  import ReproductService from '@/services/reproduction'
  
  export default {
    data () {
      return {
        reproduct : {
          cow : null,  
          loginDate : new Date(),
          estrusDate : addDays(new Date(),21),
          matingDate : addDays(new Date(),22),
          checkDate : addMonths(addDays(new Date(),22),2),
          dad : "",
          howTo : "",
          status : 1,
          result : 2,
        },
        status : reproductStatus('create'),
        result : reproductResult('create'),
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
      'reproduct.loginDate'(n){
        this.reproduct.estrusDate = addDays(n,21); // เป็นสัด
      },
      'reproduct.estrusDate'(n){
        this.reproduct.matingDate = addDays(n,1); // ผสม
      },
      'reproduct.matingDate'(n){  
        this.reproduct.checkDate = addMonths(n,2); // ตรวจท้อง
      },
      'reproduct.result'(n){
        if(n == 1){
          this.reproduct.status = 4
        }else{
          this.reproduct.status = 1
        }
      },
      dataEdit : {
        handler (n,o) {
          if(n != null && this.mode == 'edit'){
            this.reproduct = n
            this.reproduct.loginDate = new Date(n.loginDate)
            this.reproduct.estrusDate = new Date(n.estrusDate)
            this.reproduct.matingDate = new Date(n.matingDate)
            this.reproduct.checkDate = new Date(n.checkDate)
          }
        }
      }
    },
    methods: {
        clear(){
          if(this.mode === 'edit')
            this.$emit('update:dataEdit',null);
          this.reproduct.cow = null
          this.reproduct.loginDate = new Date()
          this.reproduct.estrusDate = addDays(new Date(),21)
          this.reproduct.matingDate = addDays(new Date(),22)
          this.reproduct.checkDate = addMonths(addDays(new Date(),43),2)
          this.reproduct.dad = ""
          this.reproduct.howTo = ""
          this.reproduct.status = 1
          this.reproduct.result = 2
          delete this.reproduct?._id
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
            this.reproduct.farm = this.user.farm._id
            try {
                if(this.mode === 'create'){
                  const resp = await ReproductService.create(this.reproduct);
                  if(resp){
                      this.loading = false  
                      this.value = false
                      this.confirmCancel('confirm')
                  }
                }else{
                  const resp = await ReproductService.update(this.reproduct._id,this.reproduct);
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
    },
    props : {
        modelValue: {
            type: [String, Number, Boolean],
            default: null
        },
        mode : {
          type : String,
          default : ""
        },
        dataEdit : {
          type : Object,
          default : null
        }
    }
  }
  
  </script>
  
  
  