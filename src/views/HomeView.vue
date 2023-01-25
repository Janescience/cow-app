<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleBarSub
        icon="chartLine"
        title="ภาพรวมฟาร์ม"
      />
      <CardBox
        title="โค"
        class="text-center"
        header-icon=""
      >
        <div
          class="grid gap-5 grid-cols-3 lg:grid-cols-6"
        >
          <CardBox
          >
            <BaseIcon path="cow" size="50" class="mt-5 text-gray-400"/>
            <div class="text-center mt-2">
              <h1 class="lg:text-5xl text-4xl text-orange-700">{{  cow.all }}</h1>
              <p class="text-sm mt-2">
                 ทั้งหมด 
              </p>
            </div>
          </CardBox>
          <CardBox>
            <BaseIcon path="water" size="50" class="mt-5 text-gray-400"/>
            <div class="text-center mt-2">
              <h1 class="lg:text-5xl text-4xl text-yellow-600">{{  cow.milk }}</h1>
              <p class="text-sm mt-2">
                 ให้ผลผลิต 
              </p>
            </div>
          </CardBox>
          <CardBox>
            <BaseIcon path="humanPregnant" size="50" class="mt-5 text-gray-400"/>
            <div class="text-center mt-2">
              <h1 class="lg:text-5xl text-4xl text-yellow-600">{{  cow.pregnant }}</h1>
              <p class="text-sm mt-2">
                 ท้อง 
              </p>
            </div>
          </CardBox>
          <CardBox>
            <BaseIcon path="babyFaceOutline" size="50" class="mt-5 text-gray-400"/>
            <div class="text-center mt-2">
              <h1 class="lg:text-5xl text-4xl text-yellow-600">{{  cow.baby }}</h1>
              <p class="text-sm mt-2">
                 เด็ก 
              </p>
            </div>
          </CardBox>
          <CardBox>
            <BaseIcon path="waterOff" size="50" class="mt-5 text-gray-400"/>
            <div class="text-center mt-2">
              <h1 class="lg:text-5xl text-4xl text-yellow-600">{{  cow.dry }}</h1>
              <p class="text-sm mt-2">
                 นมแห้ง
              </p>
            </div>
          </CardBox>
          <CardBox>
            <BaseIcon path="medicalBag" size="50" class="mt-5 text-gray-400"/>
            <div class="text-center mt-2">
              <h1 class="lg:text-5xl text-4xl text-red-500">{{  cow.dry }}</h1>
              <p class="text-sm mt-2">
                 ป่วย/กำลังรักษา
              </p>
            </div>
          </CardBox>
        </div>
      </CardBox>
      <div class="grid gap-5 grid-cols-1 lg:grid-cols-3">
        <CardBox
          :title="'ปริมาณน้ำนมดิบรวมรายเดือน ปี '+(new Date().getFullYear())"
          icon=""
          class="mt-5 lg:col-span-2 lg:row-span-5"
          header-icon=""
        >
          <div v-if="chartData">
            <line-chart
              :data="chartData"
              class="h-96"
            />
          </div>
        </CardBox>
        <CardBox
          class="mt-5"
          icon=""
          title="ผลประกอบการ"
          header-icon=""
        >
          <div class="grid grid-cols-2">
            <div class="row-span-2">
              <p >ราคาน้ำนมดิบ/กก. 53 บาท</p>
              <p>น้ำนมดิบทั้งหมด 289 กก.</p>
            </div>
            <p class="text-3xl text-right text-green-500">+15,317</p>
            
          </div>
          <BaseDivider/>

          <div class="grid grid-cols-2">
            <div class="row-span-2">
              <p >ค่าอาหาร 25,000 บาท</p>
              <p>ค่ารักษา 12,000 บาท</p>
            </div>
            <p class="text-3xl text-right text-red-500">-37,000</p>
          </div>
        </CardBox>
        <CardBox
          icon=""
          header-icon=""
        >
          <div class="grid grid-cols-3">
            <UserAvatar :avatar="cow.avgMaxMilk?.cow?.image" class="w-16 h-16 shadow-lg row-span-2 " />
            <div class="col-span-2">
              <p class="text-lg"> {{ cow.avgMaxMilk?.cow?.name }} - {{ cow.avgMaxMilk?.avg }} กก.</p>
              <p class="text-gray-400">น้ำนมดิบเฉลี่ย/วัน มากที่สุด</p>
            </div>
          </div>
        </CardBox>
        <CardBox
          icon=""
          header-icon=""
        >
          <div class="grid grid-cols-3">
            <UserAvatar :avatar="cow.sumMaxMilk?.cow?.image" class="w-16 h-16 shadow-lg row-span-2 " />
            <div class="col-span-2">
              <p class="text-lg"> {{ cow.sumMaxMilk?.cow?.name }} - {{ cow.sumMaxMilk?.sum }} กก.</p>
              <p class="text-gray-400">น้ำนมดิบรวมมากที่สุด</p>
            </div>
          </div>
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

export default {
  data(){
    return {
      chartData : null,
      chartColors : {primary: '#00D1B2',danger: '#FF3860'},
      milks : [],
      cow : {}
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
      const resp = await DashboardService.get(this.user.farm._id)
      if(resp){
        for(let milk of resp.data.milks){
          milk.date = moment(milk.date,'DD-MM-YYYY').format('MMM')
        }
        this.milks = _.groupBy(resp.data.milks,'date')
        this.cow = resp.data.cow
        this.chartData = this.createChart()
      }
    },
    getChartData(type){
      const datas = []
      Object.keys(this.milks).forEach(key => {
        let milks = this.milks[key];
        let sum = 0 ;
        milks.map((m) => {
          sum += m.morningQty + m.afternoonQty
        })
        datas.push(sum)
      })
      return datas;
    },
    getDatasetObject(color,type){
      return {
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
        tension: 1,
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
  }
}
</script>


