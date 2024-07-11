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
          class="grid lg:gap-3 md:gap-2 gap-1 grid-cols-3 lg:grid-cols-6 md:grid-cols-4"
        >
          <CardBox
            v-for="item in itemsPaginated"
            :key="item.name"  
            @click="detail(item)"
            class="bg-gray-100"
            has-table
            hoverable
          >
              <div class="flex justify-between md:text-sm text-xs p-2">
                <div>คอก {{item.corral || '-' }}</div>
                <p class="">{{ calAge(item.birthDate) }}</p>

              </div>
              <hr class="border-1 dark:border-gray-800 border-gray-300"/>

              <BaseLevel type="justify-center">

                <UserAvatar
                  username="profile-card"
                  class="lg:w-20 lg:h-20 w-16 h-16 mt-2"
                  :avatar="item.image"
                />
              </BaseLevel>
            <div class="text-center mt-2">
              <hr class="border-1 dark:border-gray-800 border-gray-300"/>

              <h4 class="lg:text-lg text-xs flex justify-center">
                <p class="dark:text-gray-400 text-gray-500 mr-1">{{ item.code }}</p> - {{ item.name }} 
              </h4>
              <hr class="border-1 dark:border-gray-800 border-gray-300"/>
              <div class="justify-center flex lg:p-2 p-1">

                <BaseIcon
                    v-if="item.sex"
                    :class="filter(item)?.sex?.style"
                    :path="filter(item)?.sex?.icon"
                    w="w-4 lg:w-6"
                    h="h-4 lg:h-6"

                  />
                <p  v-if="item.grade" :class="filter(item)?.grade?.style+' flex items-center justify-center font-extrabold  lg:text-base text-sm text-center bg-gray-800 rounded-full lg:h-6 lg:w-6 w-4 h-4 shadow-xl mr-1'">
                  <div >{{ item.grade }}</div>
                </p>

                 
                  <BaseIcon
                    v-if="item.status"
                    :class="filter(item)?.status?.style"
                    :path="filter(item)?.status?.icon"
                    w="w-4 lg:w-6"
                    h="h-4 lg:h-6"

                  />
                
              
                  <!-- <BaseIcon
                  v-if="filter(item)?.quality?.icon"
                  :path="filter(item)?.quality?.icon"
                  w="w-4 lg:w-6"
                  h="h-4 lg:h-6"
                  :class="filter(item)?.quality?.style"
                /> -->

         
                <!-- <p class="dark:text-gray-300 text-left dark:bg-gray-800 font-bold lg:rounded bg-white h-6 min-w-4 text-sm col-span-3 shadow">
                  <BaseLevel
                    type="justify-between"
                  >
                  <div class="ml-1 ">อายุ</div>
                  <div class="mr-2 ">{{ calAge(item.birthDate) }}</div>

                  </BaseLevel>
                  
                </p> -->
                <!-- <p class="dark:text-gray-300 text-left dark:bg-gray-800  font-bold lg:rounded bg-white h-6 min-w-4 text-sm  lg:col-span-3 col-span-2 shadow">
                  <BaseLevel
                    type="justify-between"
                  >
                  <BaseIcon
                    path="cupWater"
                    size="16"
                  />
                  <div v-if="item.sum" class="mr-2 ">~ {{ $filters.number(item.sum?.rawmilk) }}</div>
                    <BaseIcon
                        v-else
                        path="dotsCircle"
                        size="16"
                        class="animate-spin text-gray-500 mr-2"
                      />
                  </BaseLevel>
                
                </p> -->
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

import CowService from '@/services/cow'
import getAge from "@/utils/age-calculate";
import { status,quality,sex } from '@/constants/cow'
import _ from 'lodash'


export default {
  data (){
    return {
      perPage :18,
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
        {
          label : 'เพศ',
          value : 'sex',
          options : sex()
        },
        {
          label : 'สถานะ',
          value : 'status',
          options : status()
        },
        // {
        //   label : 'คุณภาพน้ำนม',
        //   value : 'quality',
        //   options : quality()
        // },
        {
          label : 'คอก',
          value : 'corral',
          type : 'ddl',
          module : 'corral',
          valueType : 'id'
        },
      ],
      search : {
        code : null,
        status : "",
        quality : "",
        corral : null,
        sex : '',
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
      this.search.sex = ""
      this.search.corral = ""
    },
    filter(item){
      const status = {}
      const grade = {}
      const quality = {}
      const sex = {}

      if (item.sex == 'F') {
        sex.icon ='genderFemale'
        sex.style = 'text-rose-500 bg-red-300 rounded-full  p-1 mr-1'
      }else if (item.sex == 'M') {
        sex.icon ='genderMale'
        sex.style = 'text-blue-500 bg-indigo-300 rounded-full p-1 mr-1'
      }

      if (item.status == 1) {
        status.icon ='humanPregnant'
        status.style = 'text-blue-500 bg-indigo-900 rounded-full  p-1 mr-1'
      }else if (item.status == 2) {
        status.icon ='waterOff'
        status.style = 'text-rose-500 bg-red-900 rounded-full p-1 mr-1'
      }else if (item.status == 3) {
        status.icon ='water'
        status.style = 'text-white bg-teal-700 rounded-full p-1 mr-1'
      }else if (item.status == 4) {
        status.icon ='babyFaceOutline'
        status.style = 'text-yellow-400 bg-amber-900 rounded-full mr-1'
      }

      status.desc = this.cowStatus[item.status].label

      if(item.grade === 'A+'){
        grade.style = 'text-lime-500'
      }else if(item.grade === 'A'){
        grade.style = 'text-green-500'
      }else if(item.grade === 'B'){
        grade.style = 'text-white'
      }else if(item.grade === 'C'){
        grade.style = 'text-orange-500'
      }else if(item.grade === 'D'){
        grade.style = 'text-red-500'
      }

      if (item.quality == 1) { // good
        quality.icon = 'medalOutline'
        quality.style = 'text-green-600  bg-gray-800 rounded-full'
      }else if (item.quality == 3) { // bad
        quality.icon = 'medalOutline'
        quality.style = 'text-red-600 bg-gray-800 rounded-full'
      }else if (item.quality == 2) { // normal
        quality.icon = 'medalOutline'
        quality.style = 'text-gray-400 bg-gray-800 rounded-full'
      }

      return {status,grade,quality,sex}
    },
    calAge(bdDate){
      return getAge(bdDate).ageString;
    },
  }
}
</script>
