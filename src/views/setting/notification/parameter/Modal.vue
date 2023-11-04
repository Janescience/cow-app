<template>
  <OverlayLayer
    v-show="value"
  >
    <CardBox
      v-show="value"
      title="แก้ไขพารามิเตอร์ (การแจ้งเตือน)"
      class="shadow-lg w-full  lg:w-3/5 z-50"
      header-icon="close"
      modal
      form
      has-scroll
      @submit.prevent="submit"
      @header-icon-click="cancel"
    >
    
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <FormField label="ชื่อพารามิเตอร์" help="* ห้ามว่าง" class="col-span-2">
          <FormControl
            v-model="notiParam.name"
            icon="formTextbox"
            required
          />
        </FormField>
        <FormField label="แจ้งเตือนวันมีผล" help="* ห้ามว่าง" class="col-span-2">
          <FormCheckRadioPicker
              v-model="notiParam.dueDate"
              type="radio"
              :options="{ true: 'แจ้งเตือน', false: 'ไม่แจ้งเตือน' }"
            />
        </FormField>
        <FormField label="แจ้งเตือน(ก่อน)" >
          <FormControl
            v-model="notiParam.before"
            type="number"
            icon="calendarClock"
          />
        </FormField>
        <FormField label="ประเภทระยะเวลา(ก่อน)" >
          <FormCheckRadioPicker
              v-model="notiParam.beforeType"
              type="radio"
              :options="{ 'D': 'วัน', 'M': 'เดือน' }"
            />
        </FormField>
        <FormField label="แจ้งเตือน(หลัง)" >
          <FormControl
            v-model="notiParam.after"
            icon="calendarClock"
            type="number"
          />
        </FormField>
        <FormField label="ประเภทระยะเวลา(หลัง)" >
          <FormCheckRadioPicker
              v-model="notiParam.afterType"
              type="radio"
              :options="{ 'D': 'วัน', 'M': 'เดือน' }"
            />
        </FormField>
      </div>
      
      <BaseButtons
        type="justify-center mt-3"
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
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseIcon from '@/components/BaseIcon.vue'

import Service from '@/services/notificationParam'
import { Toast } from "@/utils/alert";

export default {
  data () {
    return {
      notiParam : {
        before : "",
        beforeType : 'D',
        dueDate : true,
        after : "",
        afterType : 'D'
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
    data : {
      handler (n,o) {
        this.clear()
        this.notiParam = n
      },deep : true
    }
  },
  methods: {
      clear(){
        this.$emit('update:data',null);
        this.notiParam.before = ""
        this.notiParam.beforeType = 'D'
        this.notiParam.after = ""
        this.notiParam.afterType = 'D'
        this.notiParam.dueDate = true
        delete this.notiParam?._id
      },
      confirmCancel(mode){
          this.value = false
          this.$emit(mode)
      },
      confirm(){
        this.confirmCancel('confirm')
      },
      cancel(){
        this.confirmCancel('cancel')
      },
      async submit(){
          this.loading = true
          this.alert = ""
          try {
            const resp = await Service.update(this.notiParam._id,this.notiParam);
            if(resp){
                this.loading = false  
                this.value = false
                this.confirm()
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
    BaseIcon,
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


