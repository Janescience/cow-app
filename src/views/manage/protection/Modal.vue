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
          <FormField label="วัคซีน" help="* ห้ามว่าง" class="col-span-2 lg:col-span-1">
            <DDLVaccine
              v-model="protection.vaccine"
              valueType="object"
            />
          </FormField>
          <FormField label="วันที่" help="* ห้ามว่าง" >
            <FormControl
              v-model="protection.date"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="รวมจำนวนที่ฉีด (ตัว)"  >
            {{ protection.qty  }}
          </FormField>
          <FormField label="รวมเป็นเงิน (บาท)"  >
            {{ protection.amount  }}
          </FormField>
          <FormField label="คอก"  >
            <FormControl
              v-model="corral"
              :options="ddlCorral"
              required
            />
          </FormField>
          <FormField v-if="showVaccineCond" label="ฉีดวัคซีน"  >
            <FormCheckRadioPicker
              v-model="vaccineCond"
              type="radio"
              :options="{ Y: 'ฉีดทุกตัว', N: 'ฉีดบางตัว' }"
            />
          </FormField>
          <BaseButtons
              v-if="vaccineCond == 'Y' && showVaccineCond"
              class="mt-2"
              type="justify-start"
            >
              <BaseButton
                label="ยืนยัน"
                color="info"
                @click="submitCow"

              />
          </BaseButtons>
        </div>

          <header
            class="flex items-stretch border-b border-gray-100 dark:border-gray-800"
            v-if="showCows"
          >
            <p
              class="flex items-center py-3 grow font-bold"
            >
              เลือกลบโคที่ไม่ต้องการ
            </p>
            <FormControl
              v-model="search"
              placeholder="ค้นหาโค"
              required
            />
          </header>
          <div class="overflow-x-hidden overflow-y-auto h-48" v-if="showCows">
            <table >
              <thead>
                  <tr >
                      <th class="whitespace-nowrap text-center">
                        โค
                      </th>
                      <th class="whitespace-nowrap text-center">
                        คอก
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
                  <td data-label="โค" >
                    {{ cow.code }} : {{ cow.name }}
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
                            @click="removeCow(cow)"
                        />
                      </BaseButtons>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <BaseButtons
              v-if="showCows"
              class="mt-2"
              type="justify-center"
            >
              <BaseButton
                @click="submitCow"
                label="ยืนยัน"
                color="info"
              />
          </BaseButtons>
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
                @click="reset"
                label="ล้าง"
                small
                color="danger"
              />
          </BaseButtons>
          </header>
          <div class="overflow-x-hidden overflow-y-auto h-48" v-if="protection.cows.length > 0">
            <table >
              <thead>
                  <tr >
                      <th class="whitespace-nowrap text-center">
                        โค
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
                  <td data-label="โค" >
                    {{ cow.code }} : {{ cow.name }}
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
          vaccine : {},
          qty : null,
          amount : null,
          remark : '',
          cows : []
        },
        corral : null,
        corrals : null,
        ddlCorral : [],
        cows : [],
        showCows : false,
        showVaccineCond : false,
        vaccineCond : 'Y',
        loading : false,
        alert : "",
        search : ''
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
          this.cows = this.corrals[n];
          this.showVaccineCond = true
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
          this.protection.vaccine = {}
          this.protection.qty = null
          this.protection.amount = null
          this.protection.remark = ''
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
        submitCow(){
          this.protection.qty = this.cows.length
          this.protection.cows.push(...this.cows)
          this.cows = []
          this.corral = ''
          this.showCows = false
        },
        reset(){
          this.protection.cows = []
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
    DDLVaccine
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
  
  
  