<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleBarSub
        icon="chartLine"
        title="ภาพรวมฟาร์ม"
      />
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
import CardBoxTransaction from '@/components/CardBoxTransaction.vue'
import CardBoxClient from '@/components/CardBoxClient.vue'
import SectionTitleBarSub from '@/components/SectionTitleBarSub.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import DashboardService from '@/services/dashboard'
import FormControl from '@/components/FormControl.vue'

export default {
  data(){
    return {
      chartData : null,
      chartColors : {primary: '#00D1B2',danger: '#FF3860'},
      dashboard : null,
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
    FormControl
  },
  created(){
    this.getDashboard()
  },
  methods : {
    async getDashboard(){
      
    },
    getChartData(type){
      const datas = []
      this.dashboard?.summaries.map((summary) => {
        if(type === 'inc'){
          datas.push(summary.amount)
        }
        if(type === 'exp'){
          datas.push(summary.paid)
        }
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

      this.dashboard.summaries.map((summary) => {
        labels.push(`${summary.month}`)
      })

      return {
        labels,
        datasets: [
          this.getDatasetObject('primary', 'exp'),
          this.getDatasetObject('danger', 'inc')
        ]
      }
    }
  }
}
</script>


