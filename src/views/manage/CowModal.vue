<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="mode === 'create' ? 'เพิ่มโค' : 'แก้ไขโค'"
        class="shadow-lg w-full  overflow-y-auto md:w-3/5 lg:w-1/1 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
        
        <BaseLevel type="justify-center mb-1">
          <input
            id="imageUpload"
            @change="handleFile"
            type="file"
            accept="image/*"
            hidden
          />
          <img class="w-56 cursor-pointer rounded-lg" @click="chooseImg" :src="url"/>
        </BaseLevel>
        <BaseLevel type="justify-center mb-6">
          อัพโหลดรูปภาพ (คลิกที่รูป)
        </BaseLevel>
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-3">
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
  import UserAvatar from '@/components/UserAvatar.vue'
  import BaseLevel from '@/components/BaseLevel.vue'
  
  import { getCurrentUser } from '@/utils'
  import CowService from '@/services/cow'
  
  export default {
    data () {
      return {
        cow : {
          imgBase64 : "",
          image : null,
          code : "",  
          name : "",
          status : "1",
          birthDate : null,
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
        url(){
          if(this.cow.image != null){
            return URL.createObjectURL(this.cow.image);
          }else{
            return '../../src/assets/image/img-mockup.png'
          }
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
            this.cow = n
          }
        },
        deep : true
      }
    },
    methods: {
        clear(){
          this.$emit('update:dataEdit',null);
          this.cow.imgBase64 = ""
          this.cow.image = null
          this.cow.code = ""
          this.cow.name = ""
          this.cow.birthDate = null
          this.cow.status = 1
          this.cow.corral = ""
          this.cow.dad = ""
          this.cow.mom = ""
          delete this.cow._id
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
                  const resp = await CowService.create(this.cow);
                  if(resp){
                      this.loading = false  
                      this.value = false
                      this.confirmCancel('confirm')
                  }
                }else{
                  const resp = await CowService.update(this.cow._id,this.cow);
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
        chooseImg () {
            let fileUpload = document.getElementById("imageUpload");

            if (fileUpload != null) {
                fileUpload.click();
            }
        },
        handleFile (e) {
          var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
              return;
            this.cow.image = files[0]
            this.createBase64(files[0]);
        },
        createBase64(fileObj) {
            var reader = new FileReader();
            reader.onload = (e) => {
              this.cow.imgBase64 = e.target.result;
            };
            reader.readAsDataURL(fileObj);
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
      UserAvatar,
      BaseLevel
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
  
  
  