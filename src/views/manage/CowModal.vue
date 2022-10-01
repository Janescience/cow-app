<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        title="เพิ่มโค"
        class="shadow-lg w-full  overflow-y-auto md:w-3/5 lg:w-1/1 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="create"
        @header-icon-click="cancel"
      >
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-5">
          <FormField label="รหัสโค" help="* ห้ามว่าง">
            <FormControl
              v-model="cow.code"
              icon="barcode"
              required
            />
          </FormField>
          <FormField label="ชื่อโค" help="* ห้ามว่าง">
            <FormControl
              v-model="cow.name"
              icon="cow"
              required
            />
          </FormField>
          <FormField label="วันเกิด" help="* ห้ามว่าง">
            <FormControl
              v-model="cow.birthDate"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          
          <FormField label="สถานะ" help="* ห้ามว่าง">
            <FormControl
              v-model="cow.status"
              :options="status"
              icon=""
              required
            />
          </FormField>
          <FormField label="คอก">
            <FormControl
              v-model="cow.corral"
              icon="barn"
            />
          </FormField>
          <FormField label="พ่อพันธุ์">
            <FormControl
              v-model="cow.dad"
              icon="genderMale"
            />
          </FormField>
          <FormField label="แม่พันธุ์">
            <FormControl
              v-model="cow.mom"
              icon="genderFemale"
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
  import { getCurrentUser } from '@/utils'
  import CowService from '@/services/cow'
  
  export default {
    data () {
      return {
        cow : {
          code : "",  
          name : "",
          status : "1",
          birthDate : new Date(),
          corral : "",
          dad : "",
          mom : "",
          farm : getCurrentUser().farm._id
        },
        status : [
          { id: 1, label: 'ท้อง' },
          { id: 2, label: 'นมแห้ง' },
          { id: 3, label: 'ให้ผลผลิต' },
          { id: 4, label: 'วัวเด็ก' }
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
        }
    },
    methods: {
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
        async create(){
            this.loading = true
            this.alert = ""
            try {
                const resp = await CowService.create(this.cow);
                if(resp){
                    this.loading = false  
                    this.value = false
                    this.confirmCancel('confirm')
                }
            } catch (error) {
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
      NotificationBar
    },
    props : {
        modelValue: {
            type: [String, Number, Boolean],
            default: null
        }
    }
  }
  
  </script>
  
  
  