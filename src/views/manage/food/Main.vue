<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="corn" 
        title="การให้อาหาร (แยกตามคอก)"
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
        class="grid lg:gap-3 md:gap-2 gap-1 grid-cols-2 lg:grid-cols-4 md:grid-cols-3"
      >
        <CardBox
          v-for="item in itemsPaginated"
          :key="item.corral"
          @click="detail(item)"
          hoverable
        >
          <BaseLevel type="justify-center mt-1">
            <div class="bg-orange-800 rounded-full text-orange-400 lg:text-3xl text-xl lg:w-16 lg:h-16 w-12 h-12 justify-center flex items-center font-extrabold">
              {{ item.corral }} 
            </div>
            
          </BaseLevel>
          <div class="mt-2 h-18 lg:text-sm text-xs mb-1">
            <div v-if="item.qtyDay" class=" dark:text-gray-400  grid grid-cols-2 ">
              <div>
                จำนวนรวม/วัน
              </div>
              <div class="flex justify-end">
                <div class="underline decoration-2 dark:text-gray-100 mr-1">{{ $filters.number(item.qtyDay) }}</div>  
                กก.
              </div>
            </div>
            <p  v-if="item.qtyDay" class="dark:text-gray-400 grid grid-cols-2">
               <div>
                ราคารวม/วัน
               </div> 
               <div class="flex justify-end">
                <div class="underline decoration-2 dark:text-gray-100 mr-1">{{ $filters.currency(item.amountDay) }}  </div> 
                บาท
               </div>
            </p>
            <div   v-if="item.qtyDay" class=" dark:text-gray-400  grid grid-cols-2 ">
              <div>
                จำนวนรวม/เดือน
              </div>
              <div class="flex justify-end">
                <div class="underline decoration-2 dark:text-gray-100 mr-1">{{ $filters.number(item.qtyMonth) }}</div>  
                กก.
              </div>
            </div>
            <p   v-if="item.qtyDay" class="dark:text-gray-400 grid grid-cols-2">
               <div>
                ราคารวม/เดือน
               </div> 
               <div class="flex justify-end">
                <div class="underline decoration-2 dark:text-gray-100 mr-1">{{ $filters.currency(item.amountMonth) }}  </div> 
                บาท
               </div>
            </p>
            <p v-if="item?.foods?.length > 0" class="dark:text-gray-400 grid grid-cols-2">
               <div>
                บันทึกแล้ว
               </div> 
               <div class="flex justify-end">
                <div class="underline decoration-2 dark:text-gray-100 mr-1">{{ item?.foods?.length }} </div> 

                เดือน
               </div>
            </p>
            <p v-if="!item.qtyDay" class="dark:text-gray-600 text-center pt-5">
               (ไม่ได้บันทึกการให้อาหาร)
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

import FoodService from '@/services/food'
import CowService from '@/services/cow'

import _ from 'lodash'

import { Toast } from "@/utils/alert";

export default {
  data (){
    return {
      perPage :12,
      currentPage : 0,
      openModal : false,
      modalData : null,
      items : [],
      ddlCorral : [],
      forms : [
        // {
        //   label : 'สูตรอาหาร',
        //   value : 'recipe',
        //   type : 'ddl',
        //   module : 'recipe'
        // },
        {
          label : 'คอก',
          value : 'corral',
          icon : 'barn',
          type : 'number'
        }, 
      ],
      search : {
        corral : '',
      },
      loading : false,
      mode : "create",
      dataEdit : null,
      checked : {
        code : {
          value : 'corral'
        },
        label : {
          value : 'recipe.name'
        }
      },
      datas : [
        {
          label : "คอก",
          class : 'text-center',
          value : 'corral'
        },
        {
          label : "จำนวนวัว",
          class : 'text-center',
          value : 'numCow',
        },
        {
          label : "สูตรอาหาร",
          class : 'text-center',
          value : 'recipe.name'
        },
        {
          label : "จำนวนที่ให้/วัน (กก.)",
          class : 'text-center',
          value : 'qty',
        },
        {
          label : "รวมเป็นเงิน/วัน",
          class : 'text-center',
          value : 'amount',
          func : (obj) => {
            return obj.amount.toFixed(2)
          }
        },
        {
          label : "คิดเป็นเงิน/ตัว",
          class : 'text-center',
          value : 'amountAvg',
          func : (obj) => {
            return obj.amountAvg.toFixed(2)
          }
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
      ]
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
    getDataCopy() {
      return {...this.modalData};
    },
    corral(){
      return this.ddlCorral;
    },
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
      const resp = await FoodService.all(search);
      this.items = []
      if(resp.data){
        const foods = resp.data.foods;
        const groupCorrals = _.groupBy(foods,'corral')
        for(let key of Object.keys(groupCorrals)){
            const foods = groupCorrals[key];
            let sumDayQty = 0,sumMonthQty = 0;
            let sumDayAmount = 0,sumMonthAmount = 0;
            let count = 0
            for(let food of foods){
              sumDayQty += food.foodDetails.reduce((sum, item) => sum + item.qty, 0);
              sumMonthQty += sumDayQty * new Date(food.year,food.month,0).getDate();
              sumDayAmount += food.foodDetails.reduce((sum, item) => sum + item.amount, 0);
              sumMonthAmount += sumDayAmount * new Date(food.year,food.month,0).getDate();
              count += food.foodDetails.length
            }
              
            this.items.push({corral:key,
              amountDay:sumDayAmount,
              amountMonth : sumMonthAmount,
              qtyDay:sumDayQty,
              qtyMonth : sumMonthQty,
              count:count,foods}) 
        }
      }
      this.getCorrals();
    },
    async remove(id){
      this.loading = true
      const resp = await FoodService.delete(id);
      if(resp.data){
        this.getDatas()
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
      const resp = await FoodService.deletes(ids);
      if(resp.data){
        this.getReproductions()
        Toast.fire({
          icon: 'success',
          title: 'ลบข้อมูลสำเร็จ'
        })
      }
      this.loading = false
    },
    async getCorrals(){
      const resp = await CowService.all();
      if(resp){
        const cows = resp.data.cows
        const corrals = _.groupBy(cows,'corral')
        for(let key of Object.keys(corrals)){
          if(key != 'undefined'){
            this.ddlCorral.push({id:key,label:key})
            const index = this.items.map(item => item.corral).indexOf(key);
            if(index < 0){
              this.items.push({corral:key})
            }
          }
          
        }

      }
      this.loading = false
    },
    detail(obj){
      this.$router.push({
          name: "foodDetail",
          params: {
            corral: obj.corral ,
          }
      });
    },
    reset(){
      this.search.corral = ''
      this.getDatas()
    },
    resetData(){
      this.modalData = null;
    }
  }
}
</script>
