<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleBarSub
        icon="chartPie"
        title="ภาพรวมฟาร์ม"
      />
      <div
        v-if="!loading"
      >
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div class="grid grid-cols-1 gap-5">
            <CardBox
              icon="cow"
              title="สถานะโค"
              class="text-center "
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
                <p class="text-left mt-2">
                  ป่วย/กำลังรักษา 
                </p>
                <h1 class="lg:text-3xl text-2xl text-yellow-600">{{  cow.sick }}</h1>
              </div>
            </CardBox>
            <CardBox
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
          </div>
        
            <CardBox
              icon="cashRegister"
              title="ผลประกอบการ"
              header-icon=""
            >
              <CardBox
                icon=""
                class="text-sm"
                title="รายรับรวม"
                has-table
                header-icon=""
              >
                <table>
                  <thead>
                      <th>รายการ</th>
                      <th>จำนวนเงิน</th>
                  </thead>
                  <tbody>
                      <tr>
                        <td data-label="รายการ">น้ำนมดิบ</td>
                        <td data-label="จำนวนเงิน">15,317</td>
                      </tr>
                  </tbody>
                </table>
              </CardBox>
              
              <BaseDivider/>

              <CardBox
                icon=""
                class="text-sm"
                title="รายจ่ายรวม"
                has-table
                header-icon=""
              >
                <table>
                  <thead>
                      <th>รายการ</th>
                      <th>จำนวนเงิน</th>
                  </thead>
                  <tbody>
                      <tr>
                        <td data-label="รายการ">อาหาร</td>
                        <td data-label="จำนวนเงิน">25,000</td>
                      </tr>
                      <tr>
                        <td data-label="รายการ">การรักษา</td>
                        <td data-label="จำนวนเงิน">12,000</td>
                      </tr>
                  </tbody>
                </table>
              </CardBox>
            </CardBox>
            <CardBox
                icon="calendarBadgeOutline"
                title="กำหนดการ"
                class="text-center"
                header-icon=""
              >
                <table class="text-sm ">
                  <!-- <thead>
                      <th>หัวข้อ</th>
                      <th>โค</th>
                      <th>วันที่</th>
                  </thead> -->
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
                <!-- <div 
                  v-for="event in events"
                  :key="event.title"
                  class="grid grid-cols-2 gap-5 p-1">
                  <p class="text-left text-sm">
                    {{ event.title }}
                  </p>
                  <h1 class="text-base text-orange-600 text-right">{{ event.date }}</h1>
                </div> -->
                
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
          
      </div>
      <CardBox v-else loading/>
      
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
      loading : false
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
    this.getDashboard()
  },
  methods : {
    async getDashboard(){
      this.loading = true;
      const resp = await DashboardService.get(this.user.farm._id)
      if(resp){
        this.milk.sum = 0;
        this.events = _.orderBy(resp.data.events,'date')
        for(let event of this.events){
          event.date = moment(event.date).format('DD/MM/YYYY')
        }
        for(let milk of resp.data.milks){
          milk.date = moment(milk.date,'DD-MM-YYYY').format('MMM')
          let sum  = milk.milkDetails.reduce((prev,cur) => prev + cur.qty,0)
          this.milk.sum += sum
        }
        this.milks = _.groupBy(resp.data.milks,'date')
        this.cow = resp.data.cow
        this.chartData = this.createChart()
        this.loading = false;

      }
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


