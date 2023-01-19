<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="mode === 'create' ? 'เพิ่มการรีดนม' : 'แก้ไขการรีดนม'"
        class="shadow-lg w-full  overflow-y-auto lg:w-3/5 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-1">
          
          <FormField label="วันที่รีดนม" help="* ห้ามว่าง">
            <FormControl
              v-model="milk.date"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="โค" help="* ห้ามว่าง">
              <DDLCow v-model="milk.cow"/>
          </FormField>
          <FormField label="ปริมาณน้ำนม/เช้า" help="* ห้ามว่าง">
            <FormControl
              v-model="milk.morningQty"
              type="number"
              icon="weatherSunsetUp"
            />
          </FormField>
          <FormField label="ปริมาณน้ำนม/บ่าย" help="* ห้ามว่าง">
            <FormControl
              v-model="milk.afternoonQty"
              type="number"
              icon="weatherSunsetDown"
            />
          </FormField>
          <FormField label="ปริมาณน้ำนมรวม" help="คำนวณอัตโนมัติ">
            <FormControl
              v-model="sumQty"
              type="number"
              disabled
              icon="water"
            />
          </FormField>
          <FormField label="จำนวนเงินรวม" help="คำนวณอัตโนมัติ (ราคานม/กก. = 100.00)">
            <FormControl
              v-model="calAmount"
              type="number"
              icon="cashMultiple"
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

  import { getCurrentUser } from '@/utils'
  import MilkingService from '@/services/milking'
  
  export default {
    data () {
      return {
        milk : {
          cow : null,  
          date : new Date(),
          morningQty : 0,
          afternoonQty : 0,
          amount : 0
        },
        loading : false,
        alert : ""
      }
    },
    emits:['update:modelValue', 'cancel', 'confirm'],
    computed:{
        sumQty(){
          return this.milk.morningQty + this.milk.afternoonQty
        },
        calAmount(){
            this.milk.amount = (this.milk.morningQty + this.milk.afternoonQty) * 100
            return this.milk.amount
        },
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
      dataEdit : {
        handler (n,o) {
          if(n != null && this.mode == 'edit'){
            this.milk = n
            this.milk.date = new Date(n.date)
          }
        },
        deep : true
      }
    },
    methods: {
        clear(){
          if(this.mode === 'edit')
            this.$emit('update:dataEdit',null);
          this.milk.cow = null
          this.milk.date = new Date()
          this.milk.morningQty = 0
          this.milk.afternoonQty = 0
          this.milk.amount = 0
          delete this.milk?._id
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
                  const resp = await MilkingService.create(this.milk);
                  if(resp){
                      this.loading = false  
                      this.value = false
                      this.confirmCancel('confirm')
                  }
                }else{
                  const resp = await MilkingService.update(this.milk._id,this.milk);
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
  
  
  