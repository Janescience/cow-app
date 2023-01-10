<template>
  <LayoutAuthenticated>
    <SectionMain>
      
      <SectionTitleBarSub 
        icon="cow" 
        title="โค"
        btnText="เพิ่มโค"
        has-btn-add
        has-btn-search
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
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getCows" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
      />

      <!-- <Table 
        title="รายการโค" 
        has-checkbox
        :checked-data="checked"
        :datas="datas" 
        :items="items" 
        :buttons="buttons"
        @edit="edit"
        @delete="removeCow"
        :loading="loading"
      /> -->


        <div
          v-if="!loading"
          class="grid lg:gap-3 md:gap-2 gap-1 grid-cols-3 lg:grid-cols-6 md:grid-cols-4"
        >
          <CardBoxClient
            v-for="item in itemsPaginated"
            :key="item.name"
            :img="item.image"
            :name="item.name"
            :sub-text="'คอก '+item.corral"
            :date="item.birthDate"
            :status="item.status"
            @click="edit(item)"
            :quality="item.quality"
          />
        </div>
        <div
            v-else
            class="text-center py-10 text-gray-500 dark:text-gray-400 "
          >
            <BaseIcon
              path="dotsCircle"
              size="22"
              class="animate-spin"
            />
            <p> กำลังโหลดข้อมูล...</p>
        </div>

        <div
          class="p-2 mt-2 border-t border-gray-100 dark:border-gray-800"
        >
          <BaseLevel>
              <BaseButtons>
              <BaseButton
                  v-for="page in pagesList"
                  :key="page"
                  :active="page === currentPage"
                  :label="page + 1"
                  small
                  @click="currentPage = page"
              />
              </BaseButtons>
              <small>หน้า {{ currentPageHuman }} จาก {{ numPages }}</small>
          </BaseLevel>
        </div>
        

    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from '@/components/SectionMain.vue';
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxClient from "@/components/CardBoxClient.vue";
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
      perPage :18,
      currentPage : 0,
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
        },
        {
          label : 'รายละเอียด',
          type : 'detail',
          color : 'info',
          path : '/manage/cow/detail'
        }
      ]
    }
  },
  computed : {
      itemsPaginated() {
          return this.items ? this.items.slice(this.perPage * this.currentPage, this.perPage * (this.currentPage + 1)) : []
      },
      numPages(){
          return Math.ceil((this.items ? this.items.length : 0) / this.perPage);
      },
      currentPageHuman() {
          return this.currentPage + 1
      },
      pagesList() {
          const pagesList = []

          for (let i = 0; i < this.numPages; i++) {
              pagesList.push(i)
          }

          return pagesList
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
    Criteria,
    CardBoxClient,
    BaseLevel,
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
    async removeCow(id){
      this.loading = true
      const resp = await CowService.update(id,{flag:"N"});
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
