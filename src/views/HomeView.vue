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
          class="grid gap-5 grid-cols-2 lg:grid-cols-5"
        >
          <CardBox
          >
            <BaseIcon path="cow" size="70" class="mt-5 text-gray-400"/>
            <div class="text-center mt-2">
              <h1 class="text-5xl text-orange-700">48</h1>
              <p class="text-sm mt-2">
                 โคทั้งหมด 
              </p>
            </div>
          </CardBox>
          <CardBox>
            <BaseIcon path="water" size="70" class="mt-5 text-gray-400"/>
            <div class="text-center mt-2">
              <h1 class="text-5xl text-yellow-600">20</h1>
              <p class="text-sm mt-2">
                 โคให้ผลผลิต 
              </p>
            </div>
          </CardBox>
          <CardBox>
            <BaseIcon path="humanPregnant" size="70" class="mt-5 text-gray-400"/>
            <div class="text-center mt-2">
              <h1 class="text-5xl text-yellow-600">10</h1>
              <p class="text-sm mt-2">
                 โคท้อง 
              </p>
            </div>
          </CardBox>
          <CardBox>
            <BaseIcon path="babyFaceOutline" size="70" class="mt-5 text-gray-400"/>
            <div class="text-center mt-2">
              <h1 class="text-5xl text-yellow-600">10</h1>
              <p class="text-sm mt-2">
                 โคเด็ก 
              </p>
            </div>
          </CardBox>
          <CardBox>
            <BaseIcon path="waterOff" size="70" class="mt-5 text-gray-400"/>
            <div class="text-center mt-2">
              <h1 class="text-5xl text-yellow-600">8</h1>
              <p class="text-sm mt-2">
                 โคนมแห้ง
              </p>
            </div>
          </CardBox>
        </div>
      </CardBox>
      <div class="grid gap-5 grid-cols-3">
        <CardBox
          title="ปริมาณน้ำนม"
          icon=""
          class="mt-5 col-span-2 row-span-5"
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
          icon=""
          class="mt-5 "
          header-icon=""
        >
        <div class="flex">
          <BaseIcon path="cow" size="26" />
          <p class="text-lg"> มหาชน โคที่ให้น้ำนมเฉลี่ย/วัน มากที่สุด</p>
        </div>
        </CardBox>
        <CardBox
          icon=""
          header-icon=""
        >
         
        </CardBox>
        <CardBox
          icon=""
          header-icon=""
        >
         
        </CardBox>
        <CardBox
          icon=""
          header-icon=""
        >
         
        </CardBox>
        <CardBox
          icon=""
          header-icon=""
        >
         
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

import MilkService from '@/services/milking'
import moment from "moment";
import _ from "lodash";

export default {
  data(){
    return {
      chartData : null,
      chartColors : {primary: '#00D1B2',danger: '#FF3860'},
      milks : [],
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
    BaseIcon
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
      const resp = await MilkService.all({farm:this.user.farm._id})
      if(resp){
        this.milks = _.groupBy(resp.data.milkings,'date')
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
        tension: 0.5,
        cubicInterpolationMode: 'default'
      }
    },
    createChart(){
      const labels = []

      Object.keys(this.milks).forEach(m => {
        labels.push(`${this.formatDate(m)}`)
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


