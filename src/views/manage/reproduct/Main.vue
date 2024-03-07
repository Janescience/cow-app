<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="reproduction" 
        title="การผสมพันธุ์"
        btnText="เพิ่มการผสมพันธุ์"
        has-btn-add
        @openModal="mode='create';openModal = true;"
      />

      <Modal
        v-model="openModal"
        :mode="mode" 
        :data="getDataCopy" 
        @confirm="getReproductions"
        @cancel="resetData" 
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getReproductions" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
        :btnLoading="loading"
      />

      <div
        v-if="!loading"
        class="grid lg:gap-3 md:gap-2 gap-1 grid-cols-2 lg:grid-cols-5 md:grid-cols-3"
      >
        <CardBox
          v-for="item in itemsPaginated"
          :key="item?.cow?._id"
          class="bg-gray-200 p-2"
            has-table
            hoverable
        >
          <BaseLevel type="justify-center">
            <UserAvatar
              username="profile-card"
              class="lg:w-24 lg:h-24 w-16 h-16 mt-2"
              :avatar="item?.cow?.image"
            />
          </BaseLevel>
          <div class="text-center mt-2">
            <h4 class="lg:text-lg text-xs flex justify-center">
              <p class="dark:text-gray-400 text-orange-600 mr-1">{{ item?.cow?.code }}</p> - {{ item?.cow?.name }} 
            </h4>
          </div>


          <div class="grid grid-cols-2 gap-1 text-sm">
            <div class="dark:text-gray-400">
              ผสมทั้งหมด
            </div>
            <div>
              <div class="text-orange-600 font-extrabold">{{ item.count }}</div>  
            </div>
            <div class="dark:text-gray-400">
              ผสมล่าสุด
            </div>
            <h4 class="dark:text-gray-100">{{ formatDate(item.reproducts[0].matingDate) }}</h4>  
            <div class="dark:text-gray-400">
              ผลล่าสุด
            </div>
            <div class="dark:text-gray-100">{{ mapReproductStatus(item.reproducts[0].status) }}</div>  
          </div>
        </CardBox>
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
          class="p-3 mt-2 border-t border-gray-100 dark:border-gray-800 dark:bg-gray-900 lg:rounded-lg shadow-lg "
        >
          <BaseLevel>
              <BaseButtons>
                <BaseButton
                    v-for="page in pagesList"
                    :key="page"
                    :active="page === currentPage"
                    :label="page + 1"
                    teeny
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
import SectionMain from '@/components/SectionMain.vue';
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";
import UserAvatar from "@/components/UserAvatar.vue"
import CardBox from "@/components/CardBox.vue"
import BaseLevel from "@/components/BaseLevel.vue"
import BaseButton from "@/components/BaseButton.vue"
import BaseButtons from "@/components/BaseButtons.vue"
import Table from "@/components/Table.vue";
import Criteria from "@/components/Criteria.vue";

import Modal from './Modal.vue'
import ReproductionService from '@/services/reproduction'

import { reproductStatus,reproductResult } from '@/constants/reproduct'
import { Toast } from "@/utils/alert";
import _ from "lodash";
import moment from "moment"

export default {
  data (){
    return {
      perPage :12,
      currentPage : 0,
      openModal : false,
      items : [],
      forms : [
        {
          label : 'โค',
          value : 'cow',
          type : 'ddl',
          module : 'cow'
        },
        {
          label : 'สถานะ',
          value : 'status',
          options : reproductStatus()
        },
        {
          label : 'ผล',
          value : 'result',
          options : reproductResult()
        },
        {
          label : 'วันที่เข้าระบบสืบพันธุ์',
          value : 'loginDate',
          icon : 'calendar',
          type : 'date'
        },
        {
          label : 'วันที่เป็นสัด',
          value : 'estrusDate',
          icon : 'calendar',
          type : 'date'
        },
        {
          label : 'วันที่ผสมพันธุ์',
          value : 'matingDate',
          icon : 'calendar',
          type : 'date'
        },
        {
          label : 'วันที่ตรวจท้อง',
          value : 'checkDate',
          icon : 'calendar',
          type : 'date'
        },
        
      ],
      search : {
        cow : null,
        loginDate : null,
        estrusDate : null,
        matingDate : null,
        checkDate : null,
        status : "",
        result : "",
      },
      loading : false,
      mode : "create",
      modalData : null,
      checked : {
        code : {
          value : 'seq',
        },
        label : {
          value : 'cow.name'
        }
      },
      datas : [
        {
          label : "ครั้งที่",
          class : 'text-center',
          value : 'seq',
        },
        {
          label : "รหัสโค",
          value : 'cow.code',
        },
        {
          label : "ชื่อโค",
          value : 'cow.name',
        },
        {
          label : "วันที่เข้าระบบสืบพันธุ์",
          class : 'text-center',
          value : 'loginDate',
          type : 'date',
        },
        {
          label : 'ผล',
          func : (obj) => {
            return reproductResult()[obj.result].label
          },
        },
        {
          label : "วันที่เป็นสัด",
          class : 'text-center',
          value : 'estrusDate',
          type : 'date',
        },
        {
          label : "วันที่ผสมพันธุ์",
          class : 'text-center',
          value : 'matingDate',
          type : 'date',
        },
        {
          label : "วันที่ตรวจท้อง",
          class : 'text-center',
          value : 'checkDate',
          type : 'date',
        },
        {
          label : "พ่อพันธุ์",
          value : 'dad',
        },
        {
          label : 'สถานะ',
          func : (obj) => {
            return reproductStatus()[obj.status].label
          },
        },
        {
          label : "วิธีรักษา",
          value : 'howTo',
        },
      ],
      buttons : [
        {
          label : 'ลบ',
          type : 'delete',
          color : 'danger',
          condition : (obj) => {
            return obj.status != '2' && obj.status != '3'
          }
        },
        {
          label : 'แก้ไข',
          type : 'edit',
          color : 'warning',
          condition : (obj) => {
            return obj.status != '2' && obj.status != '3'
          }
        },
      ]
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    SectionTitleBarSub,
    Table,
    Modal,
    Criteria,
    UserAvatar,
    CardBox,
    BaseLevel,
    BaseButtons,
    BaseButton
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
    },
    getDataCopy() {
      return {...this.modalData};
    }
  },
  created() {
    this.getReproductions();
  },
  methods : {
    async getReproductions(){
      this.loading = true
      const resp = await ReproductionService.all(this.search);
      this.items = []
      if(resp.data){
        const datas = resp.data.reproducts;
        const groupCow = _.groupBy(datas,'cow._id')
        for(let key of Object.keys(groupCow)){
          const reproducts = groupCow[key];
          let count = reproducts.length
          this.items.push({cow:reproducts[0].cow,count:count,reproducts})
          
        }
      }
      this.loading = false
    },
    async remove(id){
      this.loading = true
      const resp = await ReproductionService.delete(id);
      if(resp.data){
        this.getReproductions()
        Toast.fire({
          icon: 'success',
          title: 'ลบข้อมูลสำเร็จ'
        })
      }
      this.loading = false
    },
    async removeSelected(datas){
      this.loading = true
      let ids = []
      for(let data of datas){
        ids.push(data._id)
      }
      const resp = await ReproductionService.deletes(ids);
      if(resp.data){
        this.getReproductions()
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
    reset(){
      this.search.cow = null
      this.search.loginDate = null
      this.search.estrusDate = null
      this.search.matingDate = null
      this.search.checkDate = null
      this.search.status = ""
      this.search.result = ""
      this.getReproductions()
    },
    resetData(){
      this.modalData = null
    },
    formatDate(date){
      return moment(date).format('DD/MM/YYYY')
    },
    mapReproductResult(result){
      return reproductResult()[result].label
    },
    mapReproductStatus(status){
      return reproductStatus()[status].label
    }
  }
}
</script>
