<template>
  <OverlayLayer
    v-show="value"
  >
    <CardBox
      v-show="value"
      :title="(this.mode === 'create' ?'บันทึก' : 'แก้ไข') + 'พารามิเตอร์'"
      class="shadow-lg w-full  lg:w-1/2 z-50"
      header-icon="close"
      modal
      form
      has-scroll
      @submit.prevent="submit"
      @header-icon-click="cancel"
    >
    
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-1">
        <FormField label="กลุ่ม" help="* ห้ามว่าง" >
          <FormControl
            v-model="param.group"
            icon="barcode"
            required
          />
        </FormField>
        <FormField label="รหัส" help="* ห้ามว่าง">
          <FormControl
            v-model="param.code"
            icon="barcode"
            required
          />
        </FormField>
        <FormField label="ชื่อ" help="* ห้ามว่าง">
          <FormControl
            v-model="param.name"
            icon="formTextbox"
            required
          />
        </FormField>
        <FormField label="ข้อมูล(ตัวเลข)" >
          <FormControl
            v-model="param.valueNumber"
            icon="formTextbox"
            type="number"
          />
        </FormField>
        <FormField label="ข้อมูล(ตัวหนังสือ)" >
          <FormControl
            v-model="param.valueString"
            icon="formTextbox"
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

import Service from '@/services/param'
import { Toast } from "@/utils/alert";

export default {
  data () {
    return {
      param : {
        group : "",
        code : "",
        name : "",
        valueNumber : null,
        valueString : ""
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
        if(n != null){
          if(this.mode == 'edit'){
            this.param = n
          }
        }
      },deep : true
    }
  },
  methods: {
      clear(){
        if(this.mode === 'edit')
          this.$emit('update:data',null);
        this.param.code = ""
        this.param.name = ""
        this.param.group = ""
        this.param.valueString = ""
        this.param.valueNumber = null
        this.$emit('update:mode',"");
        delete this.param?._id
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
              if(this.mode === 'create'){
                const resp = await Service.create(this.param);
                if(resp){
                    this.loading = false  
                    this.value = false
                    this.confirm()
                    Toast.fire({
                      icon: 'success',
                      title: 'บันทึกข้อมูลสำเร็จ'
                    })
                }
              }else{
                const resp = await Service.update(this.param._id,this.param);
                if(resp){
                    this.loading = false  
                    this.value = false
                    this.confirm()
                    Toast.fire({
                      icon: 'success',
                      title: 'บันทึกข้อมูลสำเร็จ'
                    })
                }
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
      mode : {
        type : String,
        default : ""
      },
      data : {
        type : Object,
        default : null
      }
  }
}

</script>


