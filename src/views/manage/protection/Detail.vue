<template>
  <LayoutAuthenticated>
    <SectionMain>

      <section class="grid mb-3 px-3 lg:px-0 grid-flow-col ">
        <div class="flex ">
          
          <h1 class="text-lg">
            <BaseIcon
            path="needle"
            size="26"
            
          />
            รายละเอียดการป้องกัน/บำรุง {{ (this.$route.params.id != 'add' ?'(แก้ไข)' : '') }}
          </h1>
        </div>
        <BaseButtons class="text-sm  lg:text-base " type="justify-end">
          <BaseButton
            class="lg:p-2 p-1 lg:visible invisible"
            label="ย้อนกลับ"
            color="light"
            @click="this.$router.push('/manage/protection')"
          />
          <BaseButton
            label="บันทึก"
            color="success"
            @click="submit"
            :disabled="protection.cows.length <= 0"
            :loading="loading"
          />
         </BaseButtons>
      </section>

      <CardBox
        title="ข้อมูลการป้องกัน/บำรุง"
        class="shadow-lg w-full mb-3"
        header-icon=""
        form
      >
        
          <div class="grid grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-5">
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
        
        
          <CardBox
            title=""
            class="shadow-lg dark:bg-slate-700"
            header-icon=""
            v-if="this.cows.length > 0"
        >
          <header
            class="flex grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 items-stretch border-b border-gray-100 dark:border-gray-800"
          >
            <p
              class="flex items-center py-3 grow font-bold"
            >
              เลือกโค ( {{ corral === 'all' ? 'ทุกคอก' : 'คอก ' + corral }} / {{ cows.length }} ตัว)
            </p>
            <FormControl
              v-model="search"
              icon="magnify"
              class="col-end-2 lg:col-end-7"
              placeholder="ค้นหาชื่อโค"
            />
          </header>
          <div class="overflow-x-hidden overflow-y-auto max-h-52" v-if="this.cows.length > 0">
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
                    {{ status()[cow.status].label }}
                  </td>
                  <td class="lg:w-6 whitespace-nowrap">
                      <BaseButtons
                        type="justify-end lg:justify-start"
                        no-wrap
                      >
                        <BaseButton
                            color="success"
                            label="เลือก"
                            small
                            @click="addCow(cow)"
                        />
                        <BaseButton
                            color="danger"
                            label="ลบ"
                            small
                            @click="removeCow(cow)"
                        />
                      </BaseButtons>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </CardBox>
          <NotificationBar 
              v-if="alertSubmitCow" 
              color="warning" 
              outline
              icon="alertCircleOutline">
                {{ alertSubmitCow }}
            </NotificationBar>
            <BaseDivider  v-if="this.cows.length > 0"/>
          <BaseButtons
              v-if="this.cows.length > 0"
              type="justify-center"
            >
              <BaseButton
                @click="submitCowConfirm"
                label="เลือกทั้งหมด"
                color="info"
              />
          </BaseButtons>
        <NotificationBar 
          v-if="alert" 
          color="danger" 
          outline
          icon="alertCircleOutline">
            {{ alert }}
        </NotificationBar>
      </CardBox>
      <Table
        :title="'รายการโคฉีดวัคซีน' + (protection.qty ? ' (' + protection.qty + ' ตัว / ' + protection.amount + ' บาท' + ')': '')" 
        has-checkbox
        :checked-data="checked" 
        :items="protection.cows" 
        :datas="datas" 
        :buttons="buttons" 
        @delete="removeSubmitCow" 
        @deleteSelected="removeSelected"
        :loading="loading"
      />
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
    </SectionMain>
  </LayoutAuthenticated>
</template>
  
<script>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from '@/components/SectionMain.vue';
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
import Table from '@/components/Table.vue'

import { Toast } from "@/utils/alert";
import { status } from '@/constants/cow'
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
        corral : '',
        corrals : null,
        ddlCorral : [{id:'',label:'เลือกคอก'},{id:'all',label:'ทุกคอก'}],
        cows : [],
        showCows : false,
        showVaccineCond : false,
        vaccineCond : 'Y',
        loading : false,
        alert : "",
        search : '',
        alertSubmitCow : '',
        status : status,
        confirmObj : {
          text : '',
          func : null,
          id : null,
          dataSelected : null,
          modal : false
        },
        checked : {
          label : {
            value : 'name'
          },
          code : {
            value : 'code'
          }
        },
        datas : [
          {
            label : "รหัสโค",
            value : 'code'
          },
          {
            label : "ชื่อโค",
            value : 'name'
          },
          {
            label : "คอก",
            class : 'text-center',
            value : 'corral'
          },
          {
            label : "สถานะ",
            func : (obj) => {
              return status()[obj.status].label;
            }
          },
        ],
        buttons : [
          {
            label : 'ลบ',
            type : 'delete',
            color : 'danger',
          },
        ]
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
      'protection.qty'(n){
        if(n){
          this.protection.amount = n * this.protection.vaccine.amount;
        }
      },
      'corral'(n){
        if(n){
          let cows = []
          if(n == 'all'){
            for(let key of Object.keys(this.corrals)){
              console.log(this.corrals[key])
              cows.push(...this.corrals[key])
              this.cows.push(...this.corrals[key])
            }
          }else{
            cows = [...this.corrals[n]];
            this.cows = [...this.corrals[n]];
          }
          
          cows.forEach((c) => {
            this.protection.cows.forEach((pc) => {
              if(c.code === pc.code){
                let index = this.cows.map(cow => cow.code).indexOf(c.code);
                if (index !== -1) {
                  this.cows.splice(index, 1);
                }
              }
            })
          })
          if(this.cows.length == 0){
            this.alertSubmitCow = 'โคทั้งหมดของคอกนี้ถูกเลือกให้ฉีดวัคซีนแล้ว'
          }else{
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

      if(this.$route.params.id && this.$route.params.id != 'add'){
        this.getProtection();
      }
    },
    methods: {
        async getProtection(){
          const resp = await ProtectionService.get(this.$route.params.id);
          if(resp){
             this.protection = resp.data.protection 
             this.protection.date = new Date(this.protection.date);
          }
        },
        clear(){
          this.protection.date = new Date()
          this.protection.vaccine = {}
          this.protection.qty = null
          this.protection.amount = null
          this.protection.remark = ''
          this.protection.cows = []
          this.corral = ''
          this.cows = []
          this.showCows = false
        },
        cancelConfirm(){
          if(this.protection.cows.length > 0){
            this.confirm('มีรายการโคฉีดวัคซีนยังไม่ได้บันทึก ยืนยันยกเลิกใช่หรือไม่ ?',null,null,this.cancel)
          }else{
            this.cancel()
          }
        },
        async submit(){
            this.loading = true
            this.alert = ""
            try {
              if(this.$route.params.id === 'add'){
                const resp = await ProtectionService.create(this.protection);
                if(resp){
                    this.loading = false
                    this.$router.push({
                        name: "protectionDetail",
                        params: {
                            id: resp.data._id ,
                        }
                    });
                }
              }else{
                const resp = await ProtectionService.update(this.protection._id,this.protection);
                if(resp){
                    this.loading = false
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
              if(key != 'undefined'){
                this.ddlCorral.push({id:key,label:key})
              }
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
        addCow(cow){
          const checkDup = this.protection.cows.filter(c => c.code == cow.code).length
          if (checkDup > 0) {
            this.alertSubmitCow = 'โคซ้ำ กรุณาเลือกโคใหม่'
          }else{
            cow.new = true
            this.protection.qty += 1;
            this.protection.cows.push(cow)
            this.alertSubmitCow = ''
            this.removeCow(cow)
          }
        },
        removeSubmitCow(id){
          const cow = this.protection.cows.filter(c => c._id === id);
          let index = this.protection.cows.map(c => c._id).indexOf(id);
          if (index !== -1) {
            this.protection.cows.splice(index, 1);
            this.protection.qty = this.protection.cows.length
            if(cow[0].corral == this.corral){
              this.cows.push(cow[0]);
            }
          }
        },
        removeSelected(datas){
          for(let data of datas){
            let index = this.protection.cows.indexOf(data);
            if (index !== -1) {
              this.protection.cows.splice(index, 1);
            }
          }
        },
        submitCowConfirm(){
          let isDup = false;
          this.protection.cows.forEach((pc) => {
            this.cows.forEach((c) => {
              if(pc.code == c.code){
                isDup = true;
              }
            })
          })
          if(isDup){
            this.alertSubmitCow = 'คอกนี้มีโคซ้ำ กรุณาเลือกคอกใหม่'
          }else{
            this.confirm('ยืนยันเลือกโคทั้งหมดใช่หรือไม่ ?',null,null,this.submitCow);
          }
        },
        submitCow(){
          this.protection.qty += this.cows.length
          this.protection.cows.push(...this.cows)
          this.cows = []
          this.corral = ''
          this.showCows = false
          this.alertSubmitCow = ''
        },

        resetConfirm(){
          this.confirm('ยืนยันล้างรายการโคฉีดวัคซีนทั้งหมดใช่หรือไม่ ?',null,null,this.reset)
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
    CardBoxModal,
    LayoutAuthenticated,
    SectionMain,
    Table
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
  
  
  