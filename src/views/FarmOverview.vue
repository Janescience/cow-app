<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleBarSub icon="chartPie" title="ภาพรวมฟาร์ม" />
      <div class="grid grid-cols-1 gap-5 ">

        <!-- การให้อาหาร -->
        <CardBoxCollapse :title="'การให้อาหาร (ปี พ.ศ. ' + (foodYear + 543) + ')'" icon="corn"
          @header-icon-click="() => { this.foodYearSearch = !this.foodYearSearch }" header-icon="magnifyExpand">
          <div v-if="foodYearSearch" class="lg:col-span-2 grid lg:grid-cols-6 grid-cols-3 mb-5">
            <FormField label="ปี พ.ศ." help="เลือกปีแสดงผล">
              <FormControl v-model="foodYear" :options="years()" />
            </FormField>

          </div>

          <Table title="คอก" icon="barn" :items="food.corral" :datas="foodColumns" perPage="5"
            :loading="loading.food" />

          <div v-if="chart.food.year" class="h-52 mt-5">
            <bar-chart :data="chart.food.year" />
          </div>
          <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>

        </CardBoxCollapse>

        <!-- การผสมพันธุ์ -->
        <!-- ผสมจากพ่อพันธ์ (สำเร็จ ไม่สำเร็จ รอผล) -->
        <!-- ผสมจากน้ำเชื้อ (สำเร็จ ไม่สำเร็จ รอผล) -->
        <CardBox :title="'การผสมพันธุ์ (ปี พ.ศ. ' + (reproYearValue + 543) + ')'" icon="reproduction"
          @header-icon-click="() => { this.reproYearSearch = !this.reproYearSearch }"  has-table   header-icon="magnifyExpand">
          <div class="lg:p-4">
            <div v-if="reproYearSearch" class="lg:col-span-2 grid lg:grid-cols-6 grid-cols-3 p-4">
              <FormField label="ปี พ.ศ." help="เลือกปีแสดงผล">
                <FormControl v-model="reproYearValue" :options="years()" />
              </FormField>

            </div>

            <CardBox title="พ่อพันธุ์" class="mb-5" header-icon="">
              <div v-if="chart.reproduct.breeder.year" class="h-52 ">
                <bar-chart :data="chart.reproduct.breeder.year" />
              </div>
              <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
            </CardBox>

            <CardBox title="ผสมเทียม" header-icon="">
              <div v-if="chart.reproduct.artificial.year" class="h-52 ">
                <bar-chart :data="chart.reproduct.artificial.year" />
              </div>
              <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
            </CardBox>
          </div>
          
          

        </CardBox>
        <!-- การฉีดวัคซีน -->
        <!-- ยอดการส่งน้ำนมดิบให้สหกร แบ่งเช้า บ่าย และ รวม -->

        <CardBoxCollapse title="น้ำนมดิบ" icon="water" has-table header-icon="" >
          <div class="grid grid-cols-1 gap-5 lg:p-4">
            <CardBox :title="'รายเดือน (ปี พ.ศ. ' + (milkYearValue + 543) + ')'" icon="chartBellCurveCumulative" class=""
              :loading="loading.milks" @header-icon-click="() => { this.milkYearSearch = !this.milkYearSearch }"
              header-icon="magnifyExpand">
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
                <div v-if="milkYearSearch" class="lg:col-span-2 grid lg:grid-cols-6 grid-cols-3">
                  <FormField label="ปี พ.ศ." help="เลือกปีแสดงผล">
                    <FormControl v-model="milkYearValue" :options="years()" />
                  </FormField>

                </div>
                <CardBox title="ปริมาณ" header-icon="" has-table class="lg:p-4">
                  <div class="overflow-x-auto">
                    <table>
                      <thead>
                        <tr>
                          <th class=" whitespace-nowrap text-center">รีดนมแล้ว (วัน)</th>
                          <th class=" whitespace-nowrap text-center">ทั้งหมด (กก.)</th>
                          <th class=" whitespace-nowrap text-center">เฉลี่ย/เดือน (กก.)</th>
                          <th class=" whitespace-nowrap text-center">เฉลี่ย/วัน (กก.)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="font-extrabold text-2xl">
                          <td class="text-center"> {{ milkYear.countDate }}</td>
                          <td class="text-center">{{ $filters.number(milkYear.sumQty) }}</td>
                          <td class="text-center">{{ $filters.number(milkYear.avgMonthQty) }}</td>
                          <td class="text-center">{{ $filters.number(milkYear.avgDayQty) }}</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div class="mt-3 h-60 mb-5" v-if="chart.milk.year.qty?.datasets[0]?.data[0] > 0">
                    <bar-chart :data="chart.milk.year.qty" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </CardBox>
                <CardBox title="จำนวนเงิน" header-icon="" has-table class="lg:p-4">
                  <div class="overflow-x-auto">
                    <table>
                      <thead>
                        <tr>
                          <th class=" whitespace-nowrap text-center">รายได้ทั้งหมด (บาท)</th>
                          <th class=" whitespace-nowrap text-center">รายได้เฉลี่ย/เดือน (บาท)</th>
                          <th class=" whitespace-nowrap text-center">รายได้เฉลี่ย/วัน (บาท)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="font-extrabold text-2xl">
                          <td class="text-center">{{ $filters.currency(milkYear.sumAmt) }}</td>
                          <td class="text-center">{{ $filters.currency(milkYear.avgMonthAmt) }}</td>
                          <td class="text-center">{{ $filters.currency(milkYear.avgDayAmt) }}</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div class="mt-3 h-60" v-if="chart.milk.year.amt?.datasets[0]?.data[0] > 0">
                    <bar-chart :data="chart.milk.year.amt" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </CardBox>
              </div>
            </CardBox>

            <CardBox title="รายปี" icon="chartBellCurveCumulative" header-icon="">
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
                <CardBox title="ปริมาณ" header-icon="" has-table class="lg:p-4">
                  <div class="overflow-x-auto">
                    <table>
                      <thead>
                        <tr>
                          <th class=" whitespace-nowrap text-center">รีดนมแล้ว (ปี)</th>
                          <th class=" whitespace-nowrap text-center">ทั้งหมด (กก.)</th>
                          <th class=" whitespace-nowrap text-center">เฉลี่ย/เดือน (กก.)</th>
                          <th class=" whitespace-nowrap text-center">เฉลี่ย/ปี (กก.)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="font-extrabold text-2xl">
                          <td class="text-center"> {{ milkAll.countYear}}</td>
                          <td class="text-center">{{ $filters.number(milkAll.sumQty) }}</td>
                          <td class="text-center">{{ $filters.number(milkAll.avgMonthQty) }}</td>
                          <td class="text-center">{{ $filters.number(milkAll.avgYearQty) }}</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div class="lg:h-62" v-if="chart.milk.all.qty?.datasets[0]?.data[0] > 0">
                    <line-chart :data="chart.milk.all.qty" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </CardBox>
                <CardBox title="จำนวนเงิน" header-icon="" has-table class="lg:p-4">
                  <div class="overflow-x-auto">
                    <table>
                      <thead>
                        <tr>
                          <th class=" whitespace-nowrap text-center">รายได้ทั้งหมด (บาท)</th>
                          <th class=" whitespace-nowrap text-center">รายได้เฉลี่ย/เดือน (บาท)</th>
                          <th class=" whitespace-nowrap text-center">รายได้เฉลี่ย/ปี (บาท)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="font-extrabold text-2xl">
                          <td class="text-center">{{ $filters.currency(milkAll.sumAmt) }}</td>
                          <td class="text-center">{{ $filters.currency(milkAll.avgMonthAmt) }}</td>
                          <td class="text-center">{{ $filters.currency(milkAll.avgYearAmt) }}</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div class="lg:h-62" v-if="chart.milk.all.amt?.datasets[0]?.data[0] > 0">
                    <line-chart :data="chart.milk.all.amt" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </CardBox>
              </div>
            </CardBox>
          </div>

        </CardBoxCollapse>

        <CardBoxCollapse :title="'ผลประกอบการ (ปี พ.ศ. ' + (businessYear + 543) + ')'" icon="cashRegister" header-icon="magnifyExpand"
        @header-icon-click="() => { this.businessYearSearch = !this.businessYearSearch }"
        >
          <div v-if="businessYearSearch" class="lg:col-span-2 grid lg:grid-cols-6 grid-cols-3 mb-5">
            <FormField label="ปี พ.ศ." help="เลือกปีแสดงผล">
              <FormControl v-model="businessYear" :options="years('search')" />
            </FormField>
          </div>
          <div  v-if="chart.business.all" class="h-80 mt-5 col-span-2 mb-5">
            <bar-chart :data="chart.business.all" />
          </div>

          <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
            
            <CardBox title="รายจ่าย"  class="lg:col-span-2" header-icon="">
              <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 text-center">

                <div>
                  <p >ต้นทุน</p>
                  <div class="text-red-500 underline decoration-2 font-extrabold">
                    {{
                      $filters.currency(sumExpense().cost)
                    }}
                  </div>
                  <div v-if="sumExpense().cost > 0" class="h-80">
                    <pie-chart :data="chart.expense.cost" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </div>

                <div>
                  <p>ค่าดูแลโค</p>
                  <div class="text-red-500 underline decoration-2 font-extrabold">
                    {{
                      $filters.currency(sumExpense().care)
                    }}
                  </div>
                  <div v-if="sumExpense().care > 0" class="h-80">
                    <pie-chart :data="chart.expense.care" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </div>

                <div >
                  <p >ค่าใช้จ่ายเพิ่มเติม</p>
                  <div class="text-red-500 underline decoration-2 font-extrabold">
                    {{
                      $filters.currency(sumExpense().bill)
                    }}
                  </div>
                  <div v-if="sumExpense().bill > 0" class="h-80">
                    <pie-chart :data="chart.expense.bill" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>                
                </div>

              </div>
            </CardBox>

            <CardBox title="รายรับ" header-icon="">
              <div class="grid grid-cols-1 gap-5 text-center">
                <div>
                  <p >ผลผลิต</p>
                  <div class="text-lime-500  underline decoration-2 font-extrabold">
                    {{
                      $filters.currency(sumIncome().total)
                    }}
                  </div>
                  <div v-if="sumIncome().total > 0" class="h-80">
                    <pie-chart :data="chart.income" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </div>
              </div>
            </CardBox>

            <CardBox title="สรุป" header-icon="">
              <div class="grid grid-cols-1 gap-5 text-center ">
                
                  <div class=" dark:text-gray-300">
                      รายรับ
                  </div>
                  <div class="font-extrabold text-2xl">
                    {{
                      $filters.currency(sumIncome().total)
                    }}
                  </div>
                  <div class=" dark:text-gray-300">
                      รายจ่าย
                  </div>
                  <div class="font-extrabold text-2xl">
                    {{
                      $filters.currency(sumExpense().total)
                    }}
                  </div>
                  <div class=" dark:text-gray-300">
                    {{
                      sumProfit().profit > 0 ? 'กำไร' : 'ขาดทุน' 
                    }}
                    </div>
                  <div class="font-extrabold text-2xl">
                    {{
                      $filters.currency(sumProfit()?.profit)
                    }}

                  </div>
                  <div class=" font-extrabold text-2xl">
                    {{
                      $filters.number(sumProfit().percent | 0) 
                    }} %
                  </div>

                
              </div>
            </CardBox>
          </div>
        </CardBoxCollapse>

        <CardBoxCollapse icon="poll" :title="'สถิติ (ปี พ.ศ. ' + (statYearValue + 543) + ')'" header-icon="magnifyExpand"
        @header-icon-click="() => { this.statYearSearch = !this.statYearSearch }" class=" mb-1 lg:mb-5">
          <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
            <div v-if="statYearSearch" class="lg:col-span-4 grid lg:grid-cols-6 grid-cols-1">
              <FormField label="ปี พ.ศ." help="เลือกปีแสดงผล">
                <FormControl v-model="statYearValue" :options="years()" />
              </FormField>

            </div>
            <CardBox title="การรักษา" header-icon="" class="dark:border-gray-800 border">
              <div class="grid grid-cols-2 gap-5">
                <p class="mt-1">
                  <BaseIcon class="bg-red-900 text-rose-400 rounded-full p-1 mr-2" path="plusThick" size="16" />ทั้งหมด
                </p>
                <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                  {{ statistics?.heal?.count }}
                </h1>
              </div>
              <div class="grid grid-cols-2 gap-5 mt-5" v-if="statistics?.heal?.max?.cow?.name">
                <p class="mt-1">
                  <BaseIcon class="bg-gray-700 text-white rounded-full p-1 mr-2" path="cow" size="16" />โค{{
          statistics?.heal?.max?.cow?.name }}
                <div class="text-xs text-gray-500">(รักษามากที่สุด)</div>
                </p>
                <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                  {{ statistics?.heal?.max?.count }}
                </h1>
              </div>
            </CardBox>
            <CardBox title="การผสมพันธุ์" header-icon="" class="dark:border-gray-800 border">
              <div class="grid grid-cols-2 gap-5">
                <p class="mt-1">
                  <BaseIcon class="bg-teal-900 text-green-500 rounded-full p-1 mr-2" path="check" size="16" />สำเร็จ
                </p>
                <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                  {{ statistics?.reproduction?.success }}
                </h1>
                <p class="mt-1">
                  <BaseIcon class="bg-red-900 text-rose-500 rounded-full p-1 mr-2" path="close" size="16" />ล้มเหลว
                </p>
                <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                  {{ statistics?.reproduction?.fail }}
                </h1>
              </div>
            </CardBox>
            <CardBox title="การตั้งครรภ์" header-icon="" class="dark:border-gray-800 border">
              <div class="grid grid-cols-2 gap-5">
                <p class="mt-1">
                  <BaseIcon class="bg-black text-gray-300 rounded-full p-1 mr-2" path="emoticonCryOutline" size="16" />
                  แท้ง
                </p>
                <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                  {{ statistics?.pregnant?.abort }}
                </h1>
                <p class="mt-1">
                  <BaseIcon class="bg-orange-900 text-yellow-500 rounded-full p-1 mr-2" path="calendarClock"
                    size="16" />
                  ใกล้คลอด
                <div class="text-xs text-gray-500">(มากกว่า 8 เดือน)</div>
                </p>
                <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                  {{ statistics?.pregnant?.nearBirth }}
                </h1>
              </div>
            </CardBox>
            <CardBox title="การคลอด" header-icon="" class="dark:border-gray-800 border">
              <div class="grid grid-cols-2 gap-5">
                <p class="mt-1">
                  <BaseIcon class="bg-indigo-900 text-white rounded-full p-1 mr-2" path="genderMale" size="16" />เพศผู้
                </p>
                <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                  {{ statistics?.born?.male }}
                </h1>
                <p class="mt-1">
                  <BaseIcon class="bg-rose-900 text-white rounded-full p-1 mr-2" path="genderFemale" size="16" />เพศเมีย
                </p>
                <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                  {{ statistics?.born?.female }}
                </h1>
              </div>
            </CardBox>

          </div>
        </CardBoxCollapse>
      </div>





    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import SectionMain from "@/components/SectionMain.vue";
import BarChart from "@/components/Charts/BarChart.vue";
import LineChart from "@/components/Charts/LineChart.vue";
import DoughnutChart from "@/components/Charts/DoughnutChart.vue";
import PieChart from "@/components/Charts/PieChart.vue";

import SectionTitleBar from "@/components/SectionTitleBar.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxCollapse from "@/components/CardBoxCollapse.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import Table from "@/components/Table.vue";
import FormControl from "@/components/FormControl.vue";
import FormField from "@/components/FormField.vue";

import DashboardService from "@/services/dashboard";
import moment from "moment";
import _ from "lodash";

import { months, years, monthMini } from "@/constants/date";

export default {
  data() {
    return {
      chart : {
        milk : {
          all : {
            qty : null,
            amt : null
          },
          year : {
            qty : null,
            amt : null
          }
        },
        business :{
          all : null
        },
        expense : {
          cost : null,
          bill : null,
          care : null
        },
        income : null,
        food : {
          year : null
        },
        reproduct : {
          breeder : {
            year:null,
            all:null
          },
          artificial : {
            year:null,
            all:null
          }
        }
      },
      milkYears: [],
      reproBreeders : [],
      reproArtificials : [],
      milkAlls: [],
      statistics: {},
      corrals: [],
      food: {},
      foodYear: new Date().getFullYear(),
      milkYearValue: new Date().getFullYear(),
      statYearValue: new Date().getFullYear(),
      businessYear: new Date().getFullYear(),
      reproYearValue: new Date().getFullYear(),
      reproYearSearch : false,
      statYearSearch: false,
      milkYearSearch: false,
      foodYearSearch: false,
      businessYearSearch: false,
      milkYear : {},
      milkAll: {},
      cow: {},
      corralColumns: [
        {
          label: "คอก",
          value: "corral",
          class: "text-center",
        },
        {
          label: "จำนวนโค",
          value: "numCows",
          class: "text-center",
        },
      ],
      foodColumns: [
        {
          label: "คอก",
          value: "corral",
          class: "text-center",
        },
        {
          label: "จำนวนโค",
          value: "numCow",
          class: "text-center",
        },
        {
          label: "จำนวนเฉลี่ย/เดือน (กก.)",
          value: "avgQty",
          class: "text-center",
          type: "number",
        },
        {
          label: "ค่าใช้จ่ายเฉลี่ย/เดือน (บาท)",
          value: "avgAmount",
          class: "text-right",
          type: "currency",
        },
        {
          label: "จำนวนเดือน",
          value: "count",
        },
      ],
      expense: {},
      expenseSum: {},
      income: {},
      incomeSum: {},
      loading: {
        milks: true,
        expense: true,
        income: true,
        corral: true,
        statistic: true,
        food: true,
      },
    };
  },
  components: {
    DoughnutChart,
    LineChart,
    BarChart,
    SectionMain,
    SectionTitleBar,
    CardBox,
    CardBoxCollapse,
    SectionTitleBarSub,
    LayoutAuthenticated,
    BaseIcon,
    BaseDivider,
    Table,
    FormControl,
    FormField,
    PieChart
  },
  watch: {
    foodYear(n) {
      if (n) {
        this.getFood(n);
      }
    },
    milkYearValue(n) {
      if (n) {
        this.getMilks(n);
      }
    },
    reproYearValue(n) {
      if (n) {
        this.getReproduction(n);
      }
    },
    businessYear(n) {
      if(n){
        this.incomeSum = {}
        this.expenseSum = {}
        this.getExpense(n);
        this.getIncome(n);
      }else{
        this.getExpenseAll();
        this.getIncomeAll();
      }
      
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    this.getFood();
    this.getIncome();
    this.getMilks();
    this.getExpense();
    this.getCorrals();
    this.getStatistics();
    this.getReproduction();
  },
  methods: {
    async getMilks(year) {
      this.loading.milks = true;
      const resp = await DashboardService.getMilks(year || this.milkYearValue);
      if (resp) {
        this.processMilkYears(resp.data.last);
        this.processMilkAlls(resp.data.all);
      }

      this.chart.milk.year.qty = this.milkChart('qty',this.milkYears,'year');
      this.chart.milk.year.amt = this.milkChart('amount',this.milkYears,'year');
      this.chart.milk.all.qty = this.milkChart('qty',this.milkAlls,'all');
      this.chart.milk.all.amt = this.milkChart('amount',this.milkAlls,'all');

      this.loading.milks = false;
    },
    processMilkYears(datas) {
      let sumQty = 0, sumAmt = 0;
      datas.forEach(milk => {
        milk.month = moment(milk.date, "YYYY-MM-DD").format("M");
        sumQty += milk.milkDetails.reduce((prev, cur) => prev + cur.qty, 0);
        sumAmt += milk.milkDetails.reduce((prev, cur) => prev + cur.amount, 0);
      })

      const groupByDate = _.groupBy(datas, "date");
      const countDate = Object.keys(groupByDate).length;
      const avgDayQty = sumQty > 0 ? sumQty / countDate : 0;
      const avgDayAmt = sumAmt > 0 ? sumAmt / countDate : 0;

      const groupByMonth = _.groupBy(datas, "month");
      const countMonth = Object.keys(groupByMonth).length; 
      const avgMonthQty = sumQty > 0 ? sumQty / countMonth : 0;
      const avgMonthAmt = sumAmt > 0 ? sumAmt / countMonth : 0;

      this.milkYears = _.orderBy(groupByMonth,'ASC')
      this.milkYear = {
        sumQty,
        sumAmt,
        avgDayQty,
        avgDayAmt,
        avgMonthQty,
        avgMonthAmt,
        countDate,
        countMonth
      }
    },
    processMilkAlls(datas) {
      let sumQty = 0, sumAmt = 0;

      datas.forEach(milk => {
        const date = moment(milk.date, "YYYY-MM-DD");
        milk.year = date.format("YYYY");
        milk.month = date.format("M");

        sumQty += milk.milkDetails.reduce((prev, cur) => prev + cur.qty,0);
        sumAmt += milk.milkDetails.reduce((prev, cur) => prev + cur.amount,0);
      });
      const groupByMonth = _.groupBy(datas, "month");
      const groupByYear = _.groupBy(datas, "year");

      const countMonth = Object.keys(groupByMonth).length;
      const countYear = Object.keys(groupByYear).length;

      const avgMonthQty = sumQty > 0 ? sumQty / countMonth : 0;
      const avgYearQty = sumQty > 0 ? sumQty / countYear : 0;

      const avgMonthAmt = sumAmt > 0 ? sumAmt / countMonth : 0;
      const avgYearAmt = sumAmt > 0 ? sumAmt / countYear : 0;

      this.milkAll = {
        sumQty,
        sumAmt,
        avgMonthQty,
        avgYearQty,
        avgMonthAmt,
        avgYearAmt,
        countMonth,
        countYear
      }
      this.milkAlls = _.orderBy(groupByYear,'ASC')
    },
    
    async getFood(year) {
      this.loading.food = true;
      const resp = await DashboardService.getFood(year || this.foodYear);
      if (resp.data) {
        this.food = resp.data;
        this.chart.food.year = this.foodChart();
      }
      this.loading.food = false;
    },
    async getExpense(year) {
      this.loading.expense = true;
      const resp = await DashboardService.getExpense(year || this.businessYear);
      if (resp) {
        this.expense = resp.data;
      }

      this.chart.expense.cost = this.expenseChart('cost')
      this.chart.expense.bill = this.expenseChart('bill')
      this.chart.expense.care = this.expenseChart('care')

      this.loading.expense = false;
    },
    async getExpenseAll() {
      this.loading.expense = true;
      const resp = await DashboardService.getExpenseAll();
      if (resp) {
        this.expense = resp.data.expenseDetail;
        this.expenseSum = resp.data.expenseSum;
      }

      this.chart.expense.cost = this.expenseChart('cost')
      this.chart.expense.bill = this.expenseChart('bill')
      this.chart.expense.care = this.expenseChart('care')

      this.loading.expense = false;
    },
    async getIncome(year) {
      this.loading.income = true;
      const resp = await DashboardService.getIncome(year || this.businessYear);
      if (resp) {
        this.income = resp.data;
      }
      this.loading.income = false;
      this.chart.income = this.incomeChart()

    },
    async getIncomeAll() {
      this.loading.income = true;
      const resp = await DashboardService.getIncomeAll();
      if (resp) {
        this.income = resp.data.incomeDetail;
        this.incomeSum = resp.data.incomeSum;
      }
      this.loading.income = false;
      
      this.chart.business.all = this.businessAllChart()
      this.chart.income = this.incomeChart()
    },
    async getCorrals() {
      this.loading.corral = true;
      const resp = await DashboardService.getCorrals();
      if (resp) {
        this.corrals = resp.data;
      }
      this.loading.corral = false;
    },
    async getStatistics(year) {
      this.loading.statistic = true;
      const resp = await DashboardService.getStatistics(year || this.statYearValue);
      if (resp) {
        this.statistics = resp.data;
      }
      this.loading.statistic = false;
    },
    async getReproduction(year){
      this.loading.reproduct = true;
      const resp = await DashboardService.getReproduction(year || this.reproYearValue);
      if (resp) {
        this.reproBreeders = this.processReproductYear(resp.data.breeder);
        this.reproArtificials = this.processReproductYear(resp.data.artificial);
      }
      this.chart.reproduct.breeder.year = this.reproChart('F')
      this.chart.reproduct.artificial.year = this.reproChart('A')
      this.loading.reproduct = false;
    },
    processReproductYear(datas) {
      const results = [];
      datas.forEach(repro => {
        repro.month = moment(repro.matingDate, "YYYY-MM-DD").format("M");
      })

      const groupByMonth = _.groupBy(datas, "month");
      const reproductKeys = Object.keys(groupByMonth); 

      reproductKeys.forEach((key)=>{
        const reproducts = groupByMonth[key];

        const success = reproducts.filter(r =>  r.status == 2 || r.status == 3).length;
        const fail = reproducts.filter(r => r.status == 4).length;
        const wait = reproducts.filter(r => r.status == 1).length;

        results[key] = {success,fail,wait} ;
      })

      return results
    },
    reproChart(type) {
      const successDatas = [],failDatas = [],waitDatas = [];
      const datas = type === 'F' ? this.reproBreeders : this.reproArtificials
      datas.map((r) => {
        successDatas.push(r.success);
        failDatas.push(r.fail);
        waitDatas.push(r.wait);
      });

      const labels = [];

      monthMini().forEach((m) => {
        labels.push(`${m}`);
      });

      if(successDatas.length == 0 && failDatas.length == 0 && waitDatas.length == 0){
        return null
      }else{
        return {
          labels,
          datasets: [
            {
              label: 'สำเร็จ',
              borderColor:'#16a34a',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: true,
              backgroundColor: '#65a30d',
              data: successDatas,
              tension: 0.5,
            },{
              label:'ล้มเหลว',
              borderColor:'#e11d48',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: true,
              backgroundColor: '#db2777',
              data: failDatas,
              tension: 0.5,
            },{
              label:'รอผล',
              borderColor:'#E8A317',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: true,
              backgroundColor: '#FFA500',
              data: waitDatas,
              tension: 0.5,
            }
          ],
        };
      }
      
    },
    milkChart(field,datas,type) {
      //Prepare datas
      const chartDatas = [];
      Object.keys(datas).forEach((key) => {
        let milks = datas[key];
        let sum = 0;
        milks.map((m) => {
          m.milkDetails.map((d) => {
            sum += d[field];
          });
        });
        chartDatas.push(sum);
      });

      const label = {qty:'น้ำนมดิบ',amount:'รายได้'}
      const borderColor = {qty:'#e11d48',amount:'#16a34a'}
      const backgroundColor = {qty:'#db2777',amount:'#65a30d'}

      const obj = {
        label: label[field],
        borderColor: borderColor[field],
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: true,
        barPercentage: 0.5,
        backgroundColor: backgroundColor[field],
        data: chartDatas,
        tension: 0.5,
      }

      const labels = [];
      
      if(type == 'year'){
        monthMini().forEach((m) => {
          labels.push(`${m}`);
        });
      }else{
        Object.keys(datas).forEach((m) => {
          labels.push(`${m}`);
        });
      }

      return {
        labels,
        datasets: [
          obj
        ],
      };
    },

    foodChart(){

      const qtyDatas = [],amtDatas = [];
      this.food?.month.map((m) => {
        qtyDatas.push(m.sumQty);
        amtDatas.push(m.sumAmount);
      });

      const labels = [];

      monthMini().forEach((m) => {
        labels.push(`${m}`);
      });

      return {
        labels,
        datasets: [
          {
            label: 'จำนวน (กก.)',
            borderColor:'#E83105',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: true,
            backgroundColor: '#F6461C',
            data: qtyDatas,
            tension: 0.5,
          },{
            label:'ค่าอาหาร',
            borderColor:'#566573',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: true,
            backgroundColor: '#5D6D7E',
            data: amtDatas,
            tension: 0.5,
          }
        ],
      };
    },
    businessAllChart(){
      const costDatas = [],billDatas = [],careDatas = [],incomeDatas = [];

      Object.keys(this.expenseSum.cost).forEach((key) => {
        costDatas.push(this.expenseSum.cost[key]);
      });

      Object.keys(this.expenseSum.bill).forEach((key) => {
        billDatas.push(this.expenseSum.bill[key]);
      });

      Object.keys(this.expenseSum.care).forEach((key) => {
        careDatas.push(this.expenseSum.care[key]);
      });

      Object.keys(this.incomeSum.rawMilk).forEach((key) => {
        incomeDatas.push(this.incomeSum.rawMilk[key]);
      });
      
      const labels = [];
      let allYears = new Set([
        ...Object.keys(this.expenseSum.bill), 
        ...Object.keys(this.expenseSum.care), 
        ...Object.keys(this.expenseSum.cost),
        ...Object.keys(this.incomeSum.rawMilk),
      ]);
      allYears = Array.from(allYears);

      Object.keys(this.incomeSum).forEach(key => {
        let obj = this.incomeSum[key];
        allYears.forEach(year => {
            if (!obj.hasOwnProperty(year)) {
              obj[year] = 0;
          }
        });
      });

      Object.keys(this.expenseSum).forEach(key => {
        let obj = this.expenseSum[key];
        allYears.forEach(year => {
            if (!obj.hasOwnProperty(year)) {
              obj[year] = 0;
          }
        });
      });

      Object.keys(this.expenseSum.bill).forEach((m) => {
        labels.push(`${m}`);
      });

      return {
        labels,
        datasets: [
          {
            label:"ผลผลิต",
            data: incomeDatas,
            borderWidth: 2,
            weight: 2,
            backgroundColor:  "#bbf7d0",
            hoverOffset: 4,
          },
          {
            label: "ต้นทุน" ,
            data: costDatas,
            borderWidth: 2,
            weight: 2,
            backgroundColor: "#d1d5db",
            hoverOffset: 4,
          },
          {
            label: "ค่าใช้จ่ายเพิ่มเติม",
            data: billDatas,
            borderWidth: 2,
            weight: 2,
            backgroundColor: "#fca5a5" ,
            hoverOffset: 4,
          },
          {
            label: "ค่าดูแลโค",
            data: careDatas,
            borderWidth: 2,
            weight: 2,
            backgroundColor: "#fcd34d" ,
            hoverOffset: 4,
          }
        ],
      };
    },
    incomeChart(){

      const datas = [];

      Object.keys(this.income).forEach((key) => {
        datas.push(this.income[key]);
      });

      const obj = {
        data: datas,
        borderWidth: 2,
        weight: 2,
        backgroundColor: [
            "#d1d5db",
            "#fca5a5",
            "#fcd34d",
            "#bbf7d0",
            "#a5f3fc",
            "#c7d2fe",
            "#fbcfe8",
          ],
        hoverOffset: 4,
      }

      const desc = { rawMilk: 'น้ำนมดิบ', cowExport: 'จำหน่ายโค', pasteuri: 'นมพาสเจอไรซ์', dung: 'มูลสัตว์', meat: 'จำหน่ายเนื้อโค' }


      const labels = [];
      Object.keys(this.income).forEach((item) => {
        labels.push(`${desc[item]}`);
      });

      return {
        labels,
        datasets: [
          obj
        ],
      };
    },
    expenseChart(field){
      const datas = [];
      Object.keys(this.expense[field]).forEach((key) => {
        datas.push(this.expense[field][key]);
      });

      const obj = {
        data: datas,
        borderWidth: 2,
        weight: 2,
        backgroundColor: [
            "#d1d5db",
            "#fca5a5",
            "#fcd34d",
            "#bbf7d0",
            "#a5f3fc",
            "#c7d2fe",
            "#fbcfe8",
          ],
        hoverOffset: 4,
      }
      const desc =  {
        cost : { building: 'สิ่งปลูกสร้าง', equipment: 'อุปกรณ์', cow: 'ค่านำเข้าโค', maintenance: 'ซ่อมบำรุง' },
        bill : { water: 'ค่าน้ำ', electric: 'ค่าไฟ', accom: 'ค่าที่พักคนงาน', rent: 'ค่าเช่า', internet: 'ค่าอินเทอร์เน็ต',waste : 'ค่าของเสีย',oth : 'อื่นๆ' },
        care : { food: 'ค่าอาหาร', heal: 'ค่ารักษา', protection: 'ค่าวัคซีน', worker: 'ค่าจ้างคนงาน' },
      }

      const labels = [];
      Object.keys(this.expense[field]).forEach((item) => {
        labels.push(`${desc[field][item]}`);
      });

      return {
        labels,
        datasets: [
          obj
        ],
      };
    },
    sumExpense() {
      let cost = 0,
        care = 0,
        bill = 0;
      if (this.expense?.care) {
        for (let key of Object.keys(this.expense?.care)) {
          const amount = this.expense.care[key];
          if (amount) {
            care += amount;
          }
        }
      }
      if (this.expense?.cost) {
        for (let key of Object.keys(this.expense?.cost)) {
          const amount = this.expense.cost[key];
          if (amount) {
            cost += amount;
          }
        }
      }

      if (this.expense?.bill) {
        for (let key of Object.keys(this.expense?.bill)) {
          const amount = this.expense.bill[key];
          if (amount) {
            bill += amount;
          }
        }
      }

      const total = care + cost + bill

      return { total,care,cost,bill };
    },
    sumIncome(){
      let total = 0
      for (let key of Object.keys(this.income)) {
        const amount = this.income[key];
        if (amount) {
          total += amount;
        }
      }
      return {total}
    },
    sumProfit(){
      const expense = this.sumExpense().total;
      const income = this.sumIncome().total;

      let profit = income - expense;
      let percent = 0;

      if (profit >= 0) {
        percent = ((profit / income) * 100);
      } else {
        percent = ((profit / expense) * 100);
      }

      return {profit,percent}
    },
    formatDate(date) {
      if (!date) {
        return "";
      }
      return moment(new Date(date)).format("DD/MM/YYYY");
    },
    years(type){
      return years(type)
    }
  },
};
</script>
