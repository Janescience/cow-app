<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="(this.mode === 'create' ?'บันทึก' : 'แก้ไข') + 'การป้องกัน/บำรุง'"
        class="shadow-lg w-full lg:w-3/5 z-50"
        header-icon="close"
        modal
        form
        has-scroll
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <FormField label="วันที่" help="* ห้ามว่าง" >
            <FormControl
              v-model="protection.date"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="วัคซีน/ยา" help="* ห้ามว่าง" class="col-span-2">
            <DDLVaccine
              v-model="protection.vaccine"
              valueType="object"
            />
          </FormField>
          <FormField label="คอก" v-if="protection.vaccine?.code" >
            <FormControl
              v-model="corral"
              :options="ddlCorral"
              required
            />
          </FormField>
        </div>
        <BaseDivider  v-if="this.cows.length > 0"/>
          <header
            class="flex items-stretch border-b border-gray-100 dark:border-gray-800"
            v-if="this.cows.length > 0"
          >
            <p
              class="flex items-center py-3 grow font-bold"
            >
              เลือกโค คอก {{ corral }} จำนวน {{ cows.length }} ตัว
            </p>
            <FormControl
              v-model="search"
              icon="magnify"
              placeholder="ค้นหาชื่อโค"
            />
          </header>
          <div class="overflow-x-hidden overflow-y-auto max-h-48" v-if="this.cows.length > 0">
            <table >
              <thead>
                  <tr >
                    <th class="whitespace-nowrap text-center">
                        รหัสโค
                      </th>
                      <th class="whitespace-nowrap text-center">
                        ชื่อโค
                      </th>
                      <th class="whitespace-nowrap text-center">
                        สถานะ
                      </th>
                      <th />
                  </tr>
              </thead>
              <tbody >
                <tr
                  v-for="cow in resultSearch"
                  :key="cow._id"
                >
                  <td data-label="รหัสโค" >
                    {{ cow.code }} 
                  </td>
                  <td data-label="ชื่อโค" >
                    {{ cow.name }}
                  </td>
                  <td data-label="สถานะ" >
                    {{ cow.status }}
                  </td>
                  <td class="lg:w-6 whitespace-nowrap">
                      <BaseButtons
                        type="justify-end lg:justify-start"
                        no-wrap
                      >
                        <BaseButton
                            color="danger"
                            icon="close"
                            small
                            @click="removeCow(cow)"
                        />
                      </BaseButtons>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <NotificationBar 
              v-if="alertSubmitCow" 
              color="warning" 
              outline
              icon="alertCircleOutline">
                {{ alertSubmitCow }}
            </NotificationBar>
          <BaseButtons
              v-if="this.cows.length > 0"
              type="justify-center"
              class="mt-2"
            >
              <BaseButton
                @click="submitCowConfirm"
                label="ยืนยัน"
                color="info"
              />
          </BaseButtons>
          <BaseDivider  v-if="this.cows.length > 0"/>
          <header
            class="flex items-stretch border-b border-gray-100 dark:border-gray-800"
          >
            <p
              class="flex items-center py-3 grow font-bold"
            >
              รายการโคฉีดวัคซีน
            </p>
            <BaseButtons
              class="mt-2"
              type="justify-center"
            >
              <BaseButton
                :disabled="protection.cows.length <= 0"
                @click="resetConfirm"
                label="ล้าง"
                small
                color="danger"
              />
          </BaseButtons>
          </header>
          <div class="overflow-x-hidden overflow-y-auto max-h-48" v-if="protection.cows.length > 0">
            <table >
              <thead>
                  <tr >
                      <th class="whitespace-nowrap text-center">
                        รหัสโค
                      </th>
                      <th class="whitespace-nowrap text-center">
                        ชื่อโค
                      </th>
                      <th class="whitespace-nowrap text-center">
                        คอก
                      </th>
                      <th class="whitespace-nowrap text-center">
                        สถานะ
                      </th>
                  </tr>
              </thead>
              <tbody >
                <tr
                  v-for="cow in protection.cows"
                  :key="cow._id"
                >
                  <td data-label="รหัสโค" >
                    {{ cow.code }}
                  </td>
                  <td data-label="ชื่อโค" >
                    {{ cow.name }}
                  </td>
                  <td data-label="คอก" >
                    {{ cow.corral }}
                  </td>
                  <td data-label="สถานะ" >
                    {{ cow.status }}
                  </td>
                  <td class="lg:w-6 whitespace-nowrap">
                      <BaseButtons
                        type="justify-end lg:justify-start"
                        no-wrap
                      >
                        <BaseButton
                            color="danger"
                            icon="close"
                            small
                            @click="removeSubmitCow(cow)"
                        />
                      </BaseButtons>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else
              class="text-center py-10 text-gray-500 dark:text-gray-400 "
            >
              <p>ไม่มีรายการ...</p>
          </div> 
          <FormField  class="text-right mt-2" v-if="protection.cows.length > 0">
            รวมฉีดวัคซีน {{ protection.qty ? protection.qty : '-' }} ตัว เป็นเงิน {{ protection.amount ? protection.amount : '-' }} บาท
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
            :disabled="protection.cows.length <= 0"
            :loading="loading"
          />
          <BaseButton
            label="ยกเลิก"
            color="danger"
            @click="cancelConfirm"
          />
        </BaseButtons>
        <CardBoxModal
            v-model="confirmObj.modal"
            title="ยืนยันอีกครั้ง"
            button-label="ยืนยัน"
            @confirm="confirmObj.func"
            has-cancel
            has-button
          >
          <p>{{ confirmObj.text }}</p>
      </CardBoxModal>
      </CardBox>
      
    </OverlayLayer>
  </template>
  
<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import CardBox from '@/components/CardBox.vue'
import CardBoxModal from '@/components/CardBoxModal.vue'
import DDLVaccine from '@/components/DDL/Vaccine.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import OverlayLayer from '@/components/OverlayLayer.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import BaseLevel from '@/components/BaseLevel.vue'

import { Toast } from "@/utils/alert";
import _ from 'lodash'

import ProtectionService from '@/services/protection'
import CowService from '@/services/cow'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        protection : {
          date : new Date(),
          vaccine : null,
          qty : null,
          amount : null,
          remark : '',
          cows : []
        },
        corral : '',
        corrals : null,
        ddlCorral : [{id:'',label:'เลือกคอก'}],
        cows : [],
        showCows : false,
        showVaccineCond : false,
        vaccineCond : 'Y',
        loading : false,
        alert : "",
        search : '',
        alertSubmitCow : '',
        confirmObj : {
          text : '',
          func : null,
          id : null,
          dataSelected : null,
          modal : false
        }
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
        },
        resultSearch(){
          if(this.search){
            return this.cows.filter((cow)=>{
              return this.search.toLowerCase().split(' ').every(v => cow.name.toLowerCase().includes(v))
            })
          }else{
            return this.cows;
          }
        }
    },
    watch:{
      data(n){
        if(n && this.mode === 'edit'){
          this.protection = n;
          this.protection.date = new Date(n.date);
        }
      },
      'protection.qty'(n){
        if(n){
          this.protection.amount = n * this.protection.vaccine.amount;
        }
      },
      'corral'(n){
        if(n){
          const corralDup = this.protection.cows.filter(c => c.corral == n).length;
          if(corralDup > 0){
            this.alertSubmitCow = 'คอกนี้ถูกเลือกไปแล้ว กรุณาเลือกคอกใหม่หรือล้างรายการเดิมก่อน'
          }else{
            this.cows = this.corrals[n];
            this.alertSubmitCow = ''
          }
        }else{
          this.showVaccineCond = false
        }
      },
      'vaccineCond'(n){
        if(n == 'N'){
          this.showCows = true
        }else{
          this.showCows = false
        }
      },
    },
    created(){
      this.getCorrals()
    },
    methods: {
        clear(){
          this.protection.date = new Date()
          this.protection.vaccine = null
          this.protection.qty = null
          this.protection.amount = null
          this.protection.remark = ''
          this.protection.cows = []
          this.corral = ''
          this.cows = []
          this.showCows = false
        },
        confirmCancel(mode){
            this.value = false
            this.$emit(mode)
        },
        cancelConfirm(){
          if(this.protection.cows.length > 0){
            this.confirm('มีรายการโคฉีดวัคซีนยังไม่ได้บันทึก ยืนยันยกเลิกใช่หรือไม่ ?',null,null,this.cancel)
          }else{
            this.cancel()
          }
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
                const resp = await ProtectionService.create(this.protection);
                if(resp){
                    this.loading = false
                    this.value = false 
                    this.confirmCancel('confirm') 
                }
              }else{
                const resp = await ProtectionService.update(this.protection._id,this.protection);
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
                this.clear()
                this.loading = false  
                this.alert = await error.response.data.message
                Toast.fire({
                  icon: 'error',
                  title: 'บันทึกข้อมูลไม่สำเร็จ'
                })
            }
            
        },
        async getCorrals(){
          const resp = await CowService.all();
          if(resp){
            const cows = resp.data.cows
            this.corrals = _.groupBy(cows,'corral')
            for(let key of Object.keys(this.corrals)){
              this.ddlCorral.push({id:key,label:key})
            }
          }
        },
        removeCow(cow){
          let index = this.cows.indexOf(cow);
          if (index !== -1) {
            this.cows.splice(index, 1);
            this.search = ''
          }
        },
        removeSubmitCow(cow){
          let index = this.protection.cows.indexOf(cow);
          if (index !== -1) {
            this.protection.cows.splice(index, 1);
            this.protection.qty = this.protection.cows.length
          }
        },
        submitCowConfirm(){
          this.confirm('ยืนยันเลือกคอก ' + this.corral + ' และโคจำนวน ' + this.cows.length + ' ตัว ใช่หรือไม่ ?',null,null,this.submitCow)
        },
        submitCow(){
            this.protection.qty += this.cows.length
            this.protection.cows.push(...this.cows)
            this.cows = []
            this.corral = ''
            this.showCows = false
        },
        resetConfirm(){
          this.confirm('ต้องการล้างรายการโคฉีดวัคซีนทั้งหมดใช่หรือไม่ ?',null,null,this.reset)
        },
        reset(){
          this.protection.cows = []
          this.protection.qty = ''
        },
        confirm(text,id,datas,func){
            this.confirmObj.text = text
            this.confirmObj.func = func
            this.confirmObj.id = id
            this.confirmObj.dataSelected = datas
            this.confirmObj.modal = true
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
    BaseIcon,
    DDLVaccine,
    CardBoxModal
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
  
  
  