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
        :mode="mode" 
        :dataEdit="dataEdit"
      />

      <Criteria
        grid="grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        @search="getCows" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
      />

        <div
          v-if="!loading"
          class="grid lg:gap-3 md:gap-2 gap-1 grid-cols-3 lg:grid-cols-5 md:grid-cols-4"
        >
          <CardBox
            v-for="item in itemsPaginated"
            :key="item.name"
            @click="detail(item)"
            has-table
            hoverable
          >
              
              <BaseLevel type="justify-center">
                <UserAvatar
                  username="profile-card"
                  class="lg:w-24 lg:h-24 w-20 h-20 mt-2"
                  :avatar="item.image"
                />
              </BaseLevel>
            <div class="text-center mt-2">
              <h4 class="lg:text-xl text-md flex justify-center">
                <p  :class="filter(item)?.grade?.style+'  font-extrabold  lg:text-base text-sm text-center dark:bg-black rounded-full lg:h-6 h-5 w-6 shadow-xl mr-1'">
                  <div v-if="item.grade">{{ item.grade }}</div>
                  <div v-else>
                    <BaseIcon
                      path="dotsCircle"
                      size="16"
                      class="animate-spin text-gray-500"
                    />
                  </div>
                </p>
                <!-- <BaseIcon
                  v-if="item.quality === 2"
                  class="text-amber-400"
                  path="crownCircleOutline"
                  size="20"
                /> -->
                
                {{ item.name }} 
              </h4>
              <div class="grid lg:grid-cols-5 grid-cols-2 gap-1 mt-2 lg:p-2">
                
                <p class="text-gray-900 col-span-2 font-bold  text-sm text-center dark:bg-zinc-500 lg:rounded  h-6 min-w-4 shadow-lg">
                  <BaseLevel
                    type="justify-between"
                  >
                  <BaseIcon
                    path="barn"
                    size="16"
                  />
                  <div class="mr-2 ">{{ item.corral }}</div>

                  </BaseLevel>
                </p>
                <p class=" font-bold  dark:bg-zinc-900 lg:rounded h-6 text-sm min-full lg:col-span-3 col-span-2 shadow-lg">
                  <BaseLevel
                    type="justify-between"
                  >
                  <BaseIcon
                    v-if="item.status"
                    :class="filter(item)?.status?.style"
                    :path="filter(item)?.status?.icon"
                    size="16"
                  />
                  <div class="mr-2 ">{{ filter(item)?.status?.desc }}</div>
                  </BaseLevel>
                </p>
                <p class="text-left dark:bg-zinc-700 text-gray-300 lg:rounded h-6 min-w-4 text-xs lg:col-span-3 col-span-2 shadow-lg">
                  <BaseLevel
                    type="justify-between"
                  >
                  <BaseIcon
                    path="timelapse"
                    size="16"
                  />
                  <div class="mr-2 ">{{ calAge(item.birthDate) }}</div>

                  </BaseLevel>
                  
                </p>
                <p class="text-left dark:bg-gray-700 text-black font-bold lg:rounded h-6 min-w-4 text-xs  col-span-2 shadow-lg">
                  <BaseLevel
                    type="justify-between"
                  >
                  <BaseIcon
                    path="cupWater"
                    size="16"
                  />
                  <div v-if="item.sum" class="mr-2 ">{{ $filters.number(item.sum?.rawmilk) }}</div>
                    <BaseIcon
                        v-else
                        path="dotsCircle"
                        size="16"
                        class="animate-spin text-gray-500 mr-2"
                      />
                  </BaseLevel>
                
                </p>
              </div>
              
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
import UserAvatar from "@/components/UserAvatar.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";
import CreateCowModal from './Modal.vue'

import DDLCow from '@/components/DDL/Cow.vue'
import CowService from '@/services/cow'
import getAge from "@/utils/age-calculate";
import { status,quality } from '@/constants/cow'


export default {
  data (){
    return {
      perPage :20,
      currentPage : 0,
      modalCow : false,
      cowStatus : status(),
      items : [],
      forms : [
        {
          label : 'โค',
          value : 'code',
          type : 'ddl',
          module : 'cow',
          valueType : 'code'
        },
        // {
        //   label : 'วันเกิด',
        //   value : 'birthDate',
        //   icon : 'calendar',
        //   type : 'date'
        // },
        {
          label : 'สถานะ',
          value : 'status',
          options : status()
        },
        {
          label : 'คุณภาพน้ำนม',
          value : 'quality',
          options : quality()
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
        quality : "",
        corral : "",
        flag : "Y",
      },
      mode : 'create',
      loading : false,
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
      },
      user() {
        return this.$store.state.auth.user;
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
    UserAvatar,
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
        this.loading = false

        for(let item of this.items){
          const resp  = await CowService.getDetails(item._id);
          if(resp.data){
            item.grade = resp.data?.quality?.grade
            item.sum = resp.data.sum
          }
          
        }
      }
    },
    async removeCow(id){
      this.loading = true
      const resp = await CowService.update(id,{flag:"N"});
      if(resp.data){
        this.getCows()
      }
      this.loading = false
    },
    detail(cow){
      this.$router.push({
          name: "cowDetail",
          params: {
              id: cow._id ,
          }
      });
    },
    reset(){
      this.search.code = null
      this.search.status = ""
      this.search.quality = ""
      this.search.corral = ""
    },
    filter(item){
      const status = {}
      const grade = {}

      if (item.status == 1) {
        status.icon ='humanPregnant'
        status.style = 'warning'
      }else if (item.status == 2) {
        status.icon ='waterOff'
        status.style = 'danger'
      }else if (item.status == 3) {
        status.icon ='water'
        status.style = 'success'
      }else if (item.status == 4) {
        status.icon ='babyFaceOutline'
        status.style = 'light'
      }

      status.desc = this.cowStatus[item.status].label

      if(item.grade === 'A+'){
        grade.style = 'text-lime-500'
      }else if(item.grade === 'A'){
        grade.style = 'text-green-500'
      }else if(item.grade === 'B'){
        grade.style = ''
      }else if(item.grade === 'C'){
        grade.style = 'text-orange-500'
      }else if(item.grade === 'D'){
        grade.style = 'text-red-500'
      }

      return {status,grade}
    },
    calAge(bdDate){
      return getAge(bdDate);
    },
  }
}
</script>
