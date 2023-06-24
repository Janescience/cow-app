<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleBarSub
        icon="chartPie"
        title="ภาพรวมฟาร์ม"
      />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div class="grid grid-cols-1 gap-5">
            <CardBox
              v-if="!loading.cow"
              icon="cow"
              title="สถานะโค"
              class="text-center"
              header-icon=""
            >
              <div
                class="grid grid-cols-2 gap-5"
              >
                <p class="text-left mt-2">
                  ให้ผลผลิต 
                </p>
                <h1 class="lg:text-3xl text-2xl text-yellow-600">{{  cow.milk }}</h1>
                <p class="text-left mt-2">
                  ท้อง 
                </p>
                <h1 class="lg:text-3xl text-2xl text-yellow-600">{{  cow.pregnant }}</h1>
                <p class="text-left mt-2">
                  เด็ก 
                </p>
                <h1 class="lg:text-3xl text-2xl text-yellow-600">{{  cow.baby }}</h1>
                <p class="text-left mt-2">
                  นมแห้ง 
                </p>
                <h1 class="lg:text-3xl text-2xl text-yellow-600">{{  cow.dry }}</h1>
                
              </div>
            </CardBox>
            <CardBox 
              title="สถานะโค"
              header-icon=""
              v-else loading/>
            <CardBox
              v-if="!loading.cow"
                icon="thermometerWater"
                title="คุณภาพนม"
                class="text-center"
                header-icon=""
              >
                <div class="grid grid-cols-2 gap-5">
                  <p class="text-left mt-2">
                    คุณภาพดี 
                  </p>
                  <h1 class="lg:text-3xl text-2xl text-yellow-600">{{  cow.premiuem }}</h1>
                </div>
                
            </CardBox>
            <CardBox 
              title="คุณภาพนม"
              header-icon=""
              v-else loading/>
          </div>
        


            
            <CardBox
              v-if="!loading.events"
                icon="calendarBadgeOutline"
                title="กำหนดการ"
                class="text-center"
                header-icon=""
              >
                <table class="text-sm ">
                  <tbody >
                      <tr
                      v-for="event in events"
                        :key="event.title"
                      >
                        <td data-label="หัวข้อ">{{ event.title }}</td>
                        <td data-label="โค">{{ event.cow }}</td>
                        <td class="text-orange-600" data-label="วันที่">{{ event.date }}</td>
                      </tr>
                  </tbody>
                </table>               
            </CardBox>
            <CardBox 
              icon="calendarBadgeOutline"
              title="กำหนดการ"
              header-icon=""
              v-else loading/>

            <CardBox
                v-if="!loading.rawMilkSort"
                icon="sort"
                title="5 อันดับน้ำนมดิบมากที่สุด"
                class="text-center text-sm"
                header-icon=""
              >
                <table class="text-sm ">
                  <tbody >
                      <tr
                      v-for="rawMilk in rawMilkSort"
                        :key="rawMilk.cow.code"
                      >
                        <td data-label="">
                          <UserAvatar
                            :avatar="rawMilk.cow.image"
                            username="profile"
                            class="w-10 mx-auto lg:h-12 lg:w-12"
                          />
                        </td>
                        <!-- <td data-label="รหัส">{{ rawMilk.cow.code }}
                        </td> -->
                        <td data-label="ชื่อ">{{ rawMilk.cow.name }}</td>
                        <td class="text-orange-600 text-right text-xl font-extrabold" data-label="น้ำนมดิบ">{{ rawMilk.sumMilk }}</td>
                      </tr>
                  </tbody>
                </table>               
            </CardBox>
            <CardBox 
              icon="sort"
              title="5 อันดับน้ำนมดิบมากที่สุด"
              header-icon=""
              v-else loading/>
          </div>
          <div class="grid grid-cols-1 gap-5 mt-5">
          <CardBox
                icon="cashRegister"
                class="text-sm "
                title="ผลประกอบการ"
                header-icon=""
              >
                <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
                  <CardBox
                    icon="finance"
                    class="dark:border-gray-500"
                    title="ราคาผันผวน"
                    header-icon=""
                  >
                    <div class="grid grid-cols-2 gap-5 ">
                      <p>ค่าอาหาร/วัน</p>
                      <p class="text-right">{{ expense?.fluctuate?.food ? $filters.currency(expense.fluctuate.food) : '-' }}</p>
                      <p>ค่าจ้างคนงาน <br/>(ตามระยะเวลาจ้าง)</p>  
                      <p class="text-right">{{ expense?.fluctuate?.worker ? $filters.currency(expense.fluctuate.worker) : '-'}}</p>
                      <!-- <p class="mt-3 font-extrabold">รวม</p>
                      <p class="text-right mt-3 underline font-extrabold decoration-red-500 decoration-4">{{ sumExpense() ? $filters.currency(sumExpense().sumFluctuate) : '-' }}</p> -->
                    </div>
                  </CardBox>
                  <CardBox
                    class="dark:border-gray-500"
                    icon="needle"
                    title="ดูแล"
                    header-icon=""
                  >
                    <div class="grid grid-cols-2 gap-5 grid-flow-row-dense">
                      <p>การรักษา</p>
                      <p class="text-right">{{ expense?.care?.heal ? $filters.currency(expense.care.heal) : '-' }}</p>
                      <p>การป้องกัน/บำรุง</p>  
                      <p class="text-right">{{ expense?.care?.protection ? $filters.currency(expense.care.protection) : '-'}}</p>
                      <!-- <p class="mt-3 font-extrabold ">รวม</p>
                      <p class="text-right mt-3 underline font-extrabold decoration-red-500 decoration-4">{{ sumExpense() ? $filters.currency(sumExpense().sumCare) : '-'  }}</p> -->
                    </div>
                    
                  </CardBox>
                  <CardBox
                    icon="accountCashOutline"
                    class="dark:border-gray-500"
                    title="ต้นทุน"
                    header-icon=""
                  >
                    <div class="grid grid-cols-2 gap-5">
                      <p>อุปกรณ์</p>
                    <p class="text-right">{{ expense.cost?.equipment ? $filters.currency(expense.cost.equipment) : '-'}}</p>
                    <p>สิ่งปลูกสร้าง</p>
                    <p class="text-right">{{ expense.cost?.building ? $filters.currency(expense.cost.building) : '-'}}</p>
                    <p>การซ่อมบำรุง</p>
                    <p class="text-right">{{ expense.cost?.maintenance ? $filters.currency(expense.cost.maintenance) : '-'}}</p>
                    <p>ค่าใช้จ่ายเพิ่มเติม</p>
                    <p class="text-right ">{{ expense.cost?.bill ? $filters.currency(expense.cost.bill) : '-'}}</p>
                    <!-- <p class="mt-3 font-extrabold">รวม</p>
                    <p class="text-right mt-3 underline font-extrabold decoration-red-500 decoration-4">{{ sumExpense() ? $filters.currency(sumExpense().sumCost) : '-'}}</p> -->
                    </div>
                    
                  
                  </CardBox>
                  <CardBox
                    icon="cashMultiple"
                    class="dark:border-gray-500"
                    title="ผลผลิต"
                    header-icon=""
                  >
                    <div class="grid grid-cols-2 gap-5 ">
                      <p>น้ำนมดิบ</p>
                      <p class="text-right">{{ income?.rawMilk ? $filters.currency(income.rawMilk) : '-' }}</p>
                      <p>นมพาสเจอร์ไรส์</p>  
                      <p class="text-right">-</p>
                      <p>มูลสัตว์</p>  
                      <p class="text-right">-</p>
                      <p>จำหน่ายโค</p>  
                      <p class="text-right">-</p>
                      <p>จำหน่ายเนื้อโค</p>  
                      <p class="text-right">-</p>
                      <!-- <p>รวม</p>
                      <p class="text-right">{{ }}</p> -->
                    </div>
                    
                  
                  </CardBox>
                  <CardBox
                    icon=""
                    class="dark:border-gray-500 text-2xl text-center text-red-500"
                    title=""
                    header-icon=""
                  >
                  {{  sumExpense() ? $filters.currency(sumExpense().sumFluctuate) : '-' }}
                </CardBox>
                <CardBox
                    icon=""
                    class="dark:border-gray-500 text-2xl text-center text-red-500"
                    title=""
                    header-icon=""
                  >
                  {{  sumExpense() ? $filters.currency(sumExpense().sumCare) : '-' }}
                </CardBox>
                <CardBox
                    icon=""
                    class="dark:border-gray-500 text-2xl text-center text-red-500"
                    title=""
                    header-icon=""
                  >
                  {{  sumExpense() ? $filters.currency(sumExpense().sumCost) : '-' }}
                </CardBox>
                <CardBox
                    icon=""
                    class="dark:border-gray-500 text-2xl text-center text-green-500"
                    title=""
                    header-icon=""
                  >
                  {{  income.rawMilk ? $filters.currency(income.rawMilk) : '-' }}

                </CardBox>
                </div>
                
                                  
        
            </CardBox>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
            <CardBox
              :title="'น้ำนมดิบรวมรายเดือน ปี '+(new Date().getFullYear())"
              icon="chartBellCurveCumulative"
              class="lg:col-span-2"
              header-icon=""
            >
              <div v-if="chartData">
                <line-chart
                  :data="chartData"
                  class="h-66"
                />
              </div>
              <div v-else>
                ไม่มีรายการรีดนม...
              </div>
            </CardBox>
            <CardBox
              class="text-center items-center p-5"
              header-icon=""
            >
              <h1 class="text-4xl">น้ำนมดิบทั้งหมด</h1>
              <h1 class="text-5xl mt-4 text-green-600">{{ milk.sum }}</h1>
              <h1 class="text-4xl mt-4">กิโลกรัม</h1>
            </CardBox>
          </div>
              
    </SectionMain>
    
  </LayoutAuthenticated>
</template>

<script >
import * as chartConfig from '@/components/Charts/chart.config.js'
import LineChart from '@/components/Charts/LineChart.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleBar from '@/components/SectionTitleBar.vue'
import SectionHeroBar from '@/components/SectionHeroBar.vue'
import CardBoxWidget from '@/components/CardBoxWidget.vue'
import CardBox from '@/components/CardBox.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import CardBoxTransaction from '@/components/CardBoxTransaction.vue'
import CardBoxClient from '@/components/CardBoxClient.vue'
import SectionTitleBarSub from '@/components/SectionTitleBarSub.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import FormControl from '@/components/FormControl.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import BaseDivider from '@/components/BaseDivider.vue'

import DashboardService from '@/services/dashboard'
import moment from "moment";
import _ from "lodash";

import { addDays,addMonths } from 'date-fns'

export default {
  data(){
    return {
      chartData : null,
      chartColors : {primary: '#00D1B2',danger: '#FF3860'},
      milks : [],
      events : [],
      milk : {},
      cow : {},
      rawMilkSort : [],
      expense : {},
      income : {},
      loading : {
        cow : false,
        milks : false,
        events : false,
        expense : false,
        income : false,
        rawMilkSort : false
      }
    }
  },
  components : {
    LineChart,
    SectionMain,
    SectionTitleBar,
    SectionHeroBar,
    CardBoxWidget,
    CardBox,
    NotificationBar,
    BaseButton,
    CardBoxTransaction,
    CardBoxClient,
    SectionTitleBarSub,
    LayoutAuthenticated,
    FormControl,
    BaseIcon,
    UserAvatar,
    BaseDivider
},
  computed : {
    user() {
      return this.$store.state.auth.user;
    }
  },
  created(){
    this.getCow()
    this.getMilks()
    this.getEvents()
    this.getExpense()
    this.getIncome()
    this.getRawMilkSort()
  },
  methods : {
    async getCow(){
      this.loading.cow = true;
      const resp = await DashboardService.getCow()
      if(resp){
        this.cow = resp.data
      }
      this.loading.cow = false;
    },
    async getMilks(){
      this.loading.milks = true;
      const resp = await DashboardService.getMilks()
      if(resp){
        this.milk.sum = 0;
        for(let milk of resp.data){
          milk.date = moment(milk.date,'DD-MM-YYYY').format('MMM')
          let sum  = milk.milkDetails.reduce((prev,cur) => prev + cur.qty,0)
          this.milk.sum += sum
        }
        this.milks = _.groupBy(resp.data,'date')
      }
      this.chartData = this.createChart()
      this.loading.milks = false;
    },
    async getEvents(){
      this.loading.events = true;
      const resp = await DashboardService.getEvents()
      if(resp){
        this.events = _.orderBy(resp.data,'date')
        for(let event of this.events){
          event.date = moment(event.date).format('DD/MM/YYYY')
        }
      }
      this.loading.events = false;
    },
    async getExpense(){
      this.loading.expense = true;
      const resp = await DashboardService.getExpense()
      if(resp){
        this.expense = resp.data
      }
      this.loading.expense = false;
    },
    async getIncome(){
      this.loading.income = true;
      const resp = await DashboardService.getIncome()
      if(resp){
        this.income = resp.data
      }
      this.loading.income = false;
    },
    async getRawMilkSort(){
      this.loading.rawMilkSort = true;
      const resp = await DashboardService.getRawMilkSort()
      if(resp){
        this.rawMilkSort = resp.data
      }
      this.loading.rawMilkSort = false;
    },
    getChartData(type){
      const datas = []
      Object.keys(this.milks).forEach(key => {
        let milks = this.milks[key];
        let sum = 0 ;
        milks.map((m) => {
          m.milkDetails.map((d) => {
            sum += d.qty
          })
        })
        datas.push(sum)
      })
      return datas;
    },
    getDatasetObject(color,type){
      return {
        label : 'น้ำนมดิบ',
        fill: true,
        borderColor: this.chartColors[color],
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: this.chartColors[color],
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: this.chartColors[color],
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: this.getChartData(type),
        tension: 0.5,
        cubicInterpolationMode: 'default'
      }
    },
    createChart(){
      const labels = []

      Object.keys(this.milks).forEach(m => {
        labels.push(`${m}`)
      })

      return {
        labels,
        datasets: [
          this.getDatasetObject('primary', 'qty'),
        ]
      }
    },
    sumExpense(){
      let sumFluctuate = 0,sumCost = 0,sumCare = 0
      if(this.expense?.fluctuate){
        for(let key of Object.keys(this.expense?.fluctuate)){
          const amount = this.expense.fluctuate[key]
          if(amount){
            sumFluctuate += amount
          }
        }
      }
      if(this.expense?.care){
        for(let key of Object.keys(this.expense?.care)){
          const amount = this.expense.care[key]
          if(amount){
            sumCare += amount
          }
        }
      }
      if(this.expense?.cost){
        for(let key of Object.keys(this.expense?.cost)){
          const amount = this.expense.cost[key]
          if(amount){
            sumCost += amount
          }
        }
      }
      
      return {sumFluctuate,sumCare,sumCost}
    },
    formatDate(date){
        if(!date){
            return ""
        }
        return moment(new Date(date)).format('DD/MM/YYYY');
    },
    addMonths(date,months){
      return this.formatDate(addMonths(date,months))
    }
  }
}
</script>


