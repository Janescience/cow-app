<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="needle" 
        title="ฉีดวัคซีน"
        has-btn-add
        @openModal="add"
        btnText="เพิ่มการฉีดวัคซีน"
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getDatas" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
        :btnLoading="loading"
      />

      <div
        v-if="!loading"
        class="grid lg:gap-3 md:gap-2 gap-1 grid-cols-1 lg:grid-cols-4 md:grid-cols-3"
      >
        <CardBox
          v-for="item in itemsPaginated"
          :key="item.name"
          @click="history(item)"
          hoverable
        >
          <BaseLevel type="justify-center mt-1">
            <div class="bg-gray-600 rounded-md lg:text-base text-md p-2  flex justify-center ">
              {{ item.vaccine?.name }} 
            </div>
          </BaseLevel>

          <div class="mt-2 h-18 mb-1">
            <div v-if="item.count" class="dark:text-gray-400  grid grid-cols-2 ">
              <div>
                จำนวนรวม
              </div>
              <div class="flex justify-end">
                <div class="dark:text-gray-100 mr-1">{{ item.count }}</div>  
                ครั้ง
              </div>
               <!-- จำนวนรวม <div class="underline decoration-2 ml-1 mr-1">{{ item.count }}</div> ครั้ง -->
            </div>
            <p v-if="item.amount" class= " dark:text-gray-400  grid grid-cols-2  ">
              <div>
                ราคารวม
              </div>
              <div class="flex justify-end">
                <div class="underline decoration-2 dark:text-gray-100 mr-1">{{ $filters.currency(item.amount) }}</div>  
                
              </div>
            </p>
            <p class="dark:text-gray-400  grid grid-cols-3">
              <div>
                ล่าสุด
              </div>
              <div class="flex justify-end col-span-2">
                <div class=" dark:text-gray-100 mr-1">{{formatDate(item.vaccine?.currentDate) }}</div>  
              </div>
            </p>
            <p class="dark:text-gray-400 grid grid-cols-3">
              <div>
                ต่อไป
              </div>
              <div class="flex justify-end col-span-2">
                <div class=" dark:text-gray-100 mr-1">{{formatDate(item.vaccine?.nextDate) }}</div>  
              </div>
            </p>
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

    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import SectionMain from '@/components/SectionMain.vue';
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";

import Table from "@/components/Table.vue";
import Criteria from "@/components/Criteria.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import CardBox from "@/components/CardBox.vue";

import ProtectionService from '@/services/protection'


import _ from 'lodash'
import moment from 'moment'

import { Toast } from "@/utils/alert";

export default {
  data (){
    return {
      perPage :12,
      currentPage : 0,
      items : [],
      forms : [
        {
          label : 'วัคซีน',
          value : 'vaccine',
          icon : 'needle',
          type : 'ddl',
          module : 'vaccine',
          valueType : '_id'
        },
      ],
      search : {
        vaccine : null,
      },
      loading : false,
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    SectionTitleBarSub,
    Table,
    Criteria,
    BaseLevel,
    UserAvatar,
    CardBox,
    BaseIcon
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
  },
  created() {
    this.getDatas();
  },
  methods : {
    async getDatas(search){
      this.loading = true
      const resp = await ProtectionService.all(search);
      this.items = []
      if(resp.data){
        const datas = resp.data.protections;
        const groupVaccines = _.groupBy(datas,'vaccine._id')
        const today = new Date().setUTCHours(0, 0, 0, 0)
        for(let key of Object.keys(groupVaccines)){
          const protections = groupVaccines[key];
          let sumAmount = null;
          let count = 0
          for(let protection of protections){
            const dateVac = new Date(protection.date).setUTCHours(0,0,0,0)
            if(today >= dateVac){
              sumAmount += protection.amount;
              count++
            }
          }
          this.items.push({vaccine:protections[0].vaccine,amount:sumAmount,count:count,protections})
        }
      }
      this.loading = false

    },
    add(){
      this.$router.push({
          name: "protectionDetail",
          params: {
              id: 'add',
          }
      });
    },
    history(obj){
      this.$router.push({
          name: "protectionHistory",
          params: {
            vaccine: obj.vaccine._id ,
          }
      });
    },
    formatDate(date){
        if(!date){
            return null
        }
        return moment(date).format('DD/MM/YYYY');
    },
    reset(){
      this.search.vaccine = null
      this.getDatas()
    },
  }
}
</script>
