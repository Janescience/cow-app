<template>
  <LayoutAuthenticated>
    <SectionMain>
      
      <SectionTitleBarSub 
        icon="cow" 
        title="โค"
        btnText="เพิ่มโค"
        has-btn-add
        @openModal="mode='create';modalCow = true;"
      />
      
      <CreateCowModal 
        v-model="modalCow" 
        @confirm="getCows" 
        @cancel="getCows" 
        :mode="mode" 
        :dataEdit="dataEdit"
      />

      <Criteria
        title="ค้นหาโค" 
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getCows" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
      />

      <Table 
        title="รายการโค" 
        has-checkbox
        :checked-data="checked"
        :datas="datas" 
        :items="items" 
        :button="button"
        @edit="edit"
        @delete="removeCow"
      />

    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from '@/components/SectionMain.vue';
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import Table from "@/components/Table.vue";
import Criteria from "@/components/Criteria.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";
import CreateCowModal from './CowModal.vue'

import DDLCow from '@/components/DDL/Cow.vue'
import CowService from '@/services/cow'
import { getCurrentUser } from "@/utils";
import getAge from "@/utils/age-calculate";
import { cowStatus } from '@/constants/cow'


export default {
  data (){
    return {
      modalCow : false,
      items : [],
      forms : [
        {
          label : 'โค',
          value : 'code',
          type : 'ddl',
          module : 'cow',
          valueType : 'code'
        },
        {
          label : 'วันเกิด',
          value : 'birthDate',
          icon : 'calendar',
          type : 'date'
        },
        {
          label : 'สถานะ',
          value : 'status',
          options : cowStatus()
        },
        {
          label : 'คอก',
          value : 'corral',
          icon : 'barn',
        },
      ],
      search : {
        code : null,
        status : "",
        birthDate : null,
        corral : "",
        flag : "Y",
        farm : getCurrentUser().farm._id
      },
      loading : false,
      mode : "create",
      dataEdit : null,
      checked : {
        code : {
          value : 'code'
        },
        label : {
          value : 'name'
        }
      },
      datas : [
        {
          label : 'รูปภาพ',
          class : 'text-center',
          value : 'image',
          type : 'image'
        },
        {
          label : 'รหัสโค',
          value : 'code',
        },
        {
          label : 'ชื่อโค',
          value : 'name',
        },
        {
          label : 'วันเกิด',
          class : 'text-center',
          value : 'birthDate',
          type : 'date'
        },
        {
          label : 'อายุ',
          class : 'text-center',
          func : (obj) => {
            return this.calAge(obj.birthDate)
          },
        },
        {
          label : 'สถานะ',
          func : (obj) => {
            return cowStatus()[obj.status].label
          },
        },
        {
          label : 'คอก',
          value : 'corral',
        },
        {
          label : 'พ่อพันธุ์',
          value : 'dad',
        },
        {
          label : 'แม่พันธุ์',
          value : 'mom',
        },
      ],
      button : {
        edit : true,
        delete : true,
        detail : {
          path : '/manage/cow/detail'
        }
      }
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    BaseButton,
    BaseIcon,
    BaseButtons,
    CardBox,
    FormControl,
    FormField,
    BaseDivider,
    DDLCow,
    CreateCowModal,
    Table,
    SectionTitleBarSub,
    Criteria
},
  created() {
    this.getCows();
  },
  methods : {
    async getCows(){
      this.loading = true
      const resp = await CowService.all(this.search);
      this.items = []
      if(resp.data){
        this.items = resp.data.cows
      }
      this.loading = false
    },
    async removeCow(){
      this.loading = true
      const resp = await CowService.update(this.idConfirm,{flag:"N"});
      if(resp.data){
        this.getCows()
      }
      this.loading = false
    },
    edit(cow){
      this.dataEdit = cow;
      this.mode='edit';
      this.dataEdit.birthDate = new Date(this.dataEdit.birthDate)
      this.modalCow = true;
    },
    reset(){
      this.search.code = null
      this.search.status = ""
      this.search.birthDate = null
      this.search.corral = ""
    },
    calAge(bdDate){
      return getAge(bdDate);
    },
  }
}
</script>
