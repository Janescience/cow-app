<template>
    <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="cashMultiple" 
        title="จัดการเงินเดือน"
        has-btn-add
        @openModal="mode='create';openModal = true;"
        btnText="เพิ่มเงินเดือน"
      />

      <Modal
        v-model="openModal"
        :data="getDataCopy"
        :mode="mode"
        @confirm="getSalaries"
      />

      <CardBox
        icon="accountBox"
        title="ข้อมูลคนงาน"
        class="shadow-lg w-full mb-5"
        header-icon=""
        form
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-5">
          <FormField label="ชื่อ">
            {{  worker?.name }}
          </FormField>
          <FormField label="อายุ"  >
            {{ worker?.age }}
          </FormField>
          <FormField label="อายุงาน"   >
            {{ worker?.age }}

          </FormField>
          <FormField label="หน้าที่"  >
            {{ worker?.duty }}

          </FormField>
          <FormField label="เงินเดือนปัจจุบัน"  >
            {{ worker?.salary }}
          </FormField>

          <FormField label="หมายเหตุ" >
            {{ worker?.remark ?  worker?.remark  : '-'}}
          </FormField>
        </div>
      </CardBox>

      <Table
        title="ประวัติเงินเดือน" 
        has-checkbox
        :checked-data="checked" 
        :items="salaries" 
        :datas="datas" 
        :buttons="buttons" 
        @edit="edit" 
        @delete="remove" 
        @deleteSelected="removeSelected"
        :loading="loading"
      />

    </SectionMain>
    </LayoutAuthenticated>
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
import Table from '@/components/Table.vue'
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleBarSub from '@/components/SectionTitleBarSub.vue'

import { Toast } from "@/utils/alert";

import Modal from './Modal.vue'

import SalaryService from '@/services/salary'
import WorkerService from '@/services/worker'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  
  export default {
    data () {
      return {
        openModal : false,
        modalData : null,
        mode : 'create',
        worker : {},
        salary : {},
        salaries : [],
        loading : false,
        alert : "",
        datas : [
          {
            label : "ปี",
            value : 'year',
            class : 'text-center',

          },
          {
            label : "เดือน",
            class : 'text-center',
            value : 'month',
          },
          {
            label : "เงินเดือน",
            value : 'amount',
            class : 'text-right',
          },
          {
            label : "หมายเหตุ",
            class : 'text-center',
            value : 'remark',
          },
        ],
        buttons : [
          {
            label : 'ลบ',
            type : 'delete',
            color : 'danger',
          },
          {
            label : 'แก้ไข',
            type : 'edit',
            color : 'warning',
          }
        ]
      }
    },
    computed : {
      getDataCopy(){
        return {...this.modalData}
      }
    },
    created(){
      this.getWorker()
    },
    methods: {
      async getWorker(){
        this.loading = true
        const resp = await WorkerService.get(this.$route.params.id);
        if(resp.data){
          this.worker = resp.data.worker
          this.getSalaries()
        }
        this.loading = false
      },
      async getSalaries(){
        this.loading = true
        const resp = await SalaryService.all({worker:this.worker._id});
        if(resp.data){
          this.salaries = resp.data.salarys
        }
        this.loading = false
      },
      async remove(id){
        this.loading = true
        const resp = await SalaryService.delete(id);
        if(resp.data){
          this.getSalaries()
        }
        this.loading = false
        Toast.fire({
          icon: 'success',
          title: 'ลบข้อมูลสำเร็จ'
        })
      },
      async removeSelected(datas){
        this.loading = true
        let ids = []
        for(let data of datas){
          ids.push(data._id)
        }
        const resp = await SalaryService.deletes(ids);
        if(resp.data){
          this.getSalaries()
          Toast.fire({
            icon: 'success',
            title: 'ลบข้อมูลสำเร็จ'
          })
        }
        this.loading = false
      },
      edit(obj){
        this.modalData = obj;
        this.mode = 'edit';
        this.openModal = true;
      },
      resetData(){
        this.modalData = null
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
      Table,
      LayoutAuthenticated,
      SectionMain,
      SectionTitleBarSub,
      Modal
    },
  }
  
  </script>
  
  
  