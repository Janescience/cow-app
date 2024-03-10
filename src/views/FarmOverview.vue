<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleBarSub icon="chartPie" title="ภาพรวมฟาร์ม" />
      <div class="grid grid-cols-1 gap-5 ">

        <!-- การให้อาหาร -->
        <CardBox :title="'การให้อาหาร (ปี พ.ศ. ' + (foodYear + 543) + ')'" icon="corn"
          @header-icon-click="() => { this.foodYearSearch = !this.foodYearSearch }" header-icon="magnifyExpand">
          <div v-if="foodYearSearch" class="lg:col-span-2 grid lg:grid-cols-6 grid-cols-3 mb-5">
            <FormField label="ปี พ.ศ." help="เลือกปีแสดงผล">
              <FormControl v-model="foodYear" :options="years" />
            </FormField>

          </div>

          <Table title="คอก" icon="barn" :items="food.corral" :datas="foodColumns" perPage="5"
            :loading="loading.food" />

          <div v-if="foodMonthChart?.datasets[0]?.data.length > 0" class="h-52 mt-5">
            <bar-chart :data="foodMonthChart" />
          </div>
          <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>

        </CardBox>
        <!-- การผสมพันธุ์ -->
        <!-- การฉีดวัคซีน -->
        <!-- ยอดการส่งน้ำนมดิบให้สหกร แบ่งเช้า บ่าย และ รวม -->

        <CardBox title="น้ำนมดิบ" icon="water" class="lg:p-4 md:p-4" has-table header-icon="">
          <div class="grid grid-cols-1 gap-5">
            <CardBox :title="'รายเดือน (ปี พ.ศ. ' + (milkYear + 543) + ')'" icon="chartBellCurveCumulative" class=""
              :loading="loading.milks" @header-icon-click="() => { this.milkYearSearch = !this.milkYearSearch }"
              header-icon="magnifyExpand">
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
                <div v-if="milkYearSearch" class="lg:col-span-2 grid lg:grid-cols-6 grid-cols-3">
                  <FormField label="ปี พ.ศ." help="เลือกปีแสดงผล">
                    <FormControl v-model="milkYear" :options="years" />
                  </FormField>

                </div>
                <CardBox title="ปริมาณ" header-icon="" has-table class="">
                  <div class="overflow-x-auto">
                    <table>
                      <thead>
                        <tr>
                          <th class=" whitespace-nowrap text-center">รีดนมแล้ว (วัน)</th>
                          <th class=" whitespace-nowrap text-center">ทั้งหมด (กก.)</th>
                          <th class=" whitespace-nowrap text-center">เฉลี่ย/วัน (กก.)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="font-extrabold text-2xl">
                          <td class="text-center"> {{ milkLast.count }}</td>
                          <td class="text-center">{{ $filters.number(milkLast.sumQty) }}</td>
                          <td class="text-center">{{ $filters.number(milkLast.avgQty) }}</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div class="mt-3 h-60 mb-5" v-if="milkLastQtyChart?.datasets[0]?.data[0] > 0">
                    <bar-chart :data="milkLastQtyChart" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </CardBox>
                <CardBox title="จำนวนเงิน" header-icon="" has-table class="">
                  <div class="overflow-x-auto">
                    <table>
                      <thead>
                        <tr>
                          <th class=" whitespace-nowrap text-center">รายได้ทั้งหมด (บาท)</th>
                          <th class=" whitespace-nowrap text-center">รายได้เฉลี่ย/วัน (บาท)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="font-extrabold text-2xl">
                          <td class="text-center">{{ $filters.currency(milkLast.sumAmt) }}</td>
                          <td class="text-center">{{ $filters.currency(milkLast.avgAmt) }}</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div class="mt-3 h-60" v-if="milkLastAmtChart?.datasets[0]?.data[0] > 0">
                    <bar-chart :data="milkLastAmtChart" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </CardBox>
              </div>
            </CardBox>

            <CardBox title="รายปี" icon="chartBellCurveCumulative" header-icon="">
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
                <CardBox title="ปริมาณ" header-icon="" has-table class="">
                  <div class="overflow-x-auto">
                    <table>
                      <thead>
                        <tr>
                          <th class=" whitespace-nowrap text-center">รีดนมแล้ว (ปี)</th>
                          <th class=" whitespace-nowrap text-center">ทั้งหมด (กก.)</th>
                          <th class=" whitespace-nowrap text-center">เฉลี่ย/เดือน (กก.)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="font-extrabold text-2xl">
                          <td class="text-center"> {{ milkAll.count }}</td>
                          <td class="text-center">{{ $filters.number(milkAll.sumQty) }}</td>
                          <td class="text-center">{{ $filters.number(milkAll.avgQty) }}</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div class="lg:h-62" v-if="milkAllQtyChart?.datasets[0]?.data[0] > 0">
                    <line-chart :data="milkAllQtyChart" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </CardBox>
                <CardBox title="จำนวนเงิน" header-icon="" has-table class="">
                  <div class="overflow-x-auto">
                    <table>
                      <thead>
                        <tr>
                          <th class=" whitespace-nowrap text-center">รายได้ทั้งหมด (บาท)</th>
                          <th class=" whitespace-nowrap text-center">รายได้เฉลี่ย/ปี (บาท)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="font-extrabold text-2xl">
                          <td class="text-center">{{ $filters.currency(milkAll.sumAmt) }}</td>
                          <td class="text-center">{{ $filters.currency(milkAll.avgAmt) }}</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <div class="lg:h-62" v-if="milkAllAmtChart?.datasets[0]?.data[0] > 0">
                    <line-chart :data="milkAllAmtChart" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </CardBox>
              </div>
            </CardBox>
          </div>

        </CardBox>

        <CardBox :title="'ผลประกอบการ (ปี พ.ศ. ' + (businessYear + 543) + ')'" icon="cashRegister" header-icon="magnifyExpand"
        @header-icon-click="() => { this.businessYearSearch = !this.businessYearSearch }"
        >
        <div v-if="businessYearSearch" class="lg:col-span-2 grid lg:grid-cols-6 grid-cols-3 mb-5">
            <FormField label="ปี พ.ศ." help="เลือกปีแสดงผล">
              <FormControl v-model="businessYear" :options="years" />
            </FormField>

          </div>
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
            
            <CardBox title="รายจ่าย"  class="lg:col-span-2" header-icon="">
              <div class="grid lg:grid-cols-4 grid-cols-1 gap-5 text-center">

                <div>
                  <p >ต้นทุนคงที่</p>
                  <div class="text-red-500 underline decoration-2 font-extrabold">
                    {{
                      $filters.currency(sumExpense().sumFixedCost)
                    }}
                  </div>
                  <div v-if="sumExpense().sumFixedCost > 0" class="h-80">
                    <pie-chart :data="doughnutFixedCostChartData" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </div>

                <div>
                  <p >ต้นทุนผันผวน</p>
                  <div class="text-red-500 underline decoration-2 font-extrabold">
                      {{
                      $filters.currency(sumExpense().sumVaryCost)
                    }}
                  </div>
                  <div v-if="sumExpense().sumVaryCost > 0" class="h-80">
                    <pie-chart :data="doughnutVaryCostChartData" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </div>

                <div>
                  <p>ค่าดูแลโค</p>
                  <div class="text-red-500 underline decoration-2 font-extrabold">
                    {{
                      $filters.currency(sumExpense().sumCare)
                    }}
                  </div>
                  <div v-if="sumExpense().sumCare > 0" class="h-80">
                    <pie-chart :data="doughnutCareChartData" />
                  </div>
                  <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
                </div>

                <div>
                  <p >ค่าใช้จ่ายเพิ่มเติม</p>
                  <div class="text-red-500 underline decoration-2 font-extrabold">
                    {{
                      $filters.currency(sumExpense().sumBill)
                    }}
                  </div>
                  <div v-if="doughnutBillChartData?.datasets[0]?.data[0] > 0" class="h-80">
                    <pie-chart :data="doughnutBillChartData" />
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
                      $filters.currency(income.rawMilk)
                    }}
                  </div>
                  <div v-if="income.rawMilk > 0" class="h-80">
                    <pie-chart :data="doughnutIncomeChartData" />
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
                      $filters.currency(this.income.rawMilk)
                    }}
                  </div>
                  <div class=" dark:text-gray-300">
                      รายจ่าย
                  </div>
                  <div class="font-extrabold text-2xl">
                    {{
                      $filters.currency(sumExpense().sumExpense)
                    }}
                  </div>
                  <div class=" dark:text-gray-300">
                    {{
                      sumExpense().profit > 0 ? 'กำไร' : 'ขาดทุน' 
                    }}
                    </div>
                  <div class="font-extrabold text-2xl">
                    {{
                      $filters.currency(sumExpense()?.profit)
                    }}

                  </div>
                  <div class=" font-extrabold text-2xl">
                    {{
                      $filters.number(sumExpense().percent | 0) 
                    }} %
                  </div>

                
              </div>
            </CardBox>
          </div>
        </CardBox>

        <CardBox icon="poll" title="สถิติ" header-icon="" class=" mb-1 lg:mb-5">
          <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
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
        </CardBox>
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
      milkLastQtyChart: null,
      milkLastAmtChart: null,
      foodMonthChart: null,
      milkAllQtyChart: null,
      milkAllAmtChart: null,
      doughnutFixedCostChartData: null,
      doughnutVaryCostChartData: null,
      doughnutBillChartData: null,
      doughnutCareChartData: null,
      doughnutIncomeChartData: null,
      lineChartColors: { primary: "#00D1B2", danger: "#FF3860" },
      milkLasts: [],
      milkAlls: [],
      statistics: {},
      corrals: [],
      food: {},
      foodYear: new Date().getFullYear(),
      milkYear: new Date().getFullYear(),
      businessYear: new Date().getFullYear(),
      milkYearSearch: false,
      foodYearSearch: false,
      businessYearSearch: false,
      milkLast: {},
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
      years: years(),
      expense: {},
      income: {},
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
    milkYear(n) {
      if (n) {
        this.getMilks(n);
      }
    },
    businessYear(n) {
      if (n) {
        this.getExpense(n);
        this.getIncome(n);
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
  },
  methods: {
    async getMilks(year) {
      this.loading.milks = true;
      const resp = await DashboardService.getMilks(year ? year : this.milkYear);
      if (resp) {
        //Last Year
        const milkLasts = resp.data.last;
        this.milkLast.sumQty = 0;
        this.milkLast.sumAmt = 0;
        for (let milk of milkLasts) {
          milk.month = moment(milk.date, "DD-MM-YYYY").format("M");
          let sumQty = milk.milkDetails.reduce((prev, cur) => prev + cur.qty, 0);
          let sumAmt = milk.milkDetails.reduce((prev, cur) => prev + cur.amount, 0);
          this.milkLast.sumQty += sumQty;
          this.milkLast.sumAmt += sumAmt;
        }
        const milkLastGroupDate = _.groupBy(milkLasts, "date");
        this.milkLast.avgQty =
          this.milkLast.sumQty > 0
            ? this.milkLast.sumQty / Object.keys(milkLastGroupDate).length
            : 0;
        this.milkLast.avgAmt =
          this.milkLast.sumAmt > 0
            ? this.milkLast.sumAmt / Object.keys(milkLastGroupDate).length
            : 0;
        this.milkLast.count = Object.keys(milkLastGroupDate).length;

        this.milkLasts = _.groupBy(milkLasts, "month");

        //Rename key
        for (let key of Object.keys(this.milkLasts)) {
          this.milkLasts[key][0].date = moment(
            this.milkLasts[key][0].date,
            "DD-MM-YYYY"
          ).format("MMM");
          this.milkLasts[this.milkLasts[key][0].date] = this.milkLasts[key];
          delete this.milkLasts[key];
        }

        //All
        const milkAlls = resp.data.all;
        this.milkAll.sumQty = 0;
        this.milkAll.sumAmt = 0;
        for (let milkAll of milkAlls) {
          milkAll.year = moment(milkAll.date, "YYYY-MM-DD").format("YYYY");
          milkAll.month = moment(milkAll.date, "YYYY-MM-DD").format("M");
          let sumQty = milkAll.milkDetails.reduce(
            (prev, cur) => prev + cur.qty,
            0
          );
          let sumAmt = milkAll.milkDetails.reduce(
            (prev, cur) => prev + cur.amount,
            0
          );
          this.milkAll.sumQty += sumQty;
          this.milkAll.sumAmt += sumAmt;
        }
        const milkAllGroupMonth = _.groupBy(milkAlls, "month");
        this.milkAlls = _.groupBy(milkAlls, "year");
        this.milkAll.count = Object.keys(this.milkAlls).length;


        this.milkAll.avgQty =
          this.milkAll.sumQty > 0
            ? this.milkAll.sumQty / Object.keys(milkAllGroupMonth).length
            : 0;
        this.milkAll.avgAmt =
          this.milkAll.sumAmt > 0
            ? this.milkAll.sumAmt / this.milkAll.count
            : 0;


      }

      this.milkLastQtyChart = this.createMilkLastChart('qty');
      this.milkLastAmtChart = this.createMilkLastChart('amt');
      this.milkAllQtyChart = this.createMilkAllChart('qty');
      this.milkAllAmtChart = this.createMilkAllChart('amt');
      this.loading.milks = false;
    },
    async getFood(year) {
      this.loading.food = true;
      const resp = await DashboardService.getFood(year || this.foodYear);
      if (resp.data) {
        this.food = resp.data;
        this.foodMonthChart = this.createFoodMonthChart();
      }
      this.loading.food = false;
    },
    async getExpense(year) {
      this.loading.expense = true;
      const resp = await DashboardService.getExpense(year || this.businessYear);
      if (resp) {
        this.expense = resp.data;
      }
      this.loading.expense = false;
      this.doughnutFixedCostChartData = this.createDoughnutChart('fixedCost')
      this.doughnutVaryCostChartData = this.createDoughnutChart('varyCost')
      this.doughnutBillChartData = this.createDoughnutChart('bill')
      this.doughnutCareChartData = this.createDoughnutChart('care')
    },
    async getIncome(year) {
      this.loading.income = true;
      const resp = await DashboardService.getIncome(year || this.businessYear);
      if (resp) {
        this.income = resp.data;
      }
      this.loading.income = false;
      this.doughnutIncomeChartData = this.createDoughnutChart('income')
    },
    async getCorrals() {
      this.loading.corral = true;
      const resp = await DashboardService.getCorrals();
      if (resp) {
        this.corrals = resp.data;
      }
      this.loading.corral = false;
    },
    async getStatistics() {
      this.loading.statistic = true;
      const resp = await DashboardService.getStatistics();
      if (resp) {
        this.statistics = resp.data;
      }
      this.loading.statistic = false;
    },
    milkLastChartAnlyz(type) {
      const datas = [];
      if (type == "qty") {
        Object.keys(this.milkLasts).forEach((key) => {
          let milks = this.milkLasts[key];
          let sum = 0;
          milks.map((m) => {
            m.milkDetails.map((d) => {
              sum += d.qty;
            });
          });
          datas.push(sum);
        });
      } else {
        Object.keys(this.milkLasts).forEach((key) => {
          let milks = this.milkLasts[key];
          let sum = 0;
          milks.map((m) => {
            m.milkDetails.map((d) => {
              sum += d.amount;
            });
          });
          datas.push(sum);
        });
      }

      return datas;
    },
    milkAllChartAnlyz(type) {
      const datas = [];
      if (type === 'qty') {
        Object.keys(this.milkAlls).forEach((key) => {
          let milks = this.milkAlls[key];
          let sum = 0;
          milks.map((m) => {
            m.milkDetails.map((d) => {
              sum += d.qty;
            });
          });
          datas.push(sum);
        });
      } else {
        Object.keys(this.milkAlls).forEach((key) => {
          let milks = this.milkAlls[key];
          let sum = 0;
          milks.map((m) => {
            m.milkDetails.map((d) => {
              sum += d.amount;
            });
          });
          datas.push(sum);
        });
      }

      return datas;
    },
    foodMonthChartAnlyz(type) {
      const amts = [],
        qtys = [];
      let foods = this.food.month;
      foods.map((m) => {
        amts.push(m.sumAmount);
        qtys.push(m.sumQty);
      });

      return { amount: amts, qty: qtys };
    },
    foodMonthAmountChartObj(color, type) {
      return {
        label: "ค่าอาหาร",
        borderColor: "#566573",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: true,
        backgroundColor: "#5D6D7E",
        data: this.foodMonthChartAnlyz().amount,
        tension: 0.5,
      };
    },
    foodMonthQtyChartObj(color, type) {
      return {
        label: "จำนวน (กก.)",
        borderColor: "#E83105",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: true,
        backgroundColor: "#F6461C",
        data: this.foodMonthChartAnlyz().qty,
        tension: 0.5,
      };
    },
    milkLastChartObj(color, type) {
      return {
        label: type == 'qty' ? "น้ำนมดิบ" : "รายได้",
        borderColor: type == 'qty' ? "#e11d48" : "#16a34a",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: true,
        barPercentage: 0.5,
        backgroundColor: type == 'qty' ? "#db2777" : "#65a30d",
        data: this.milkLastChartAnlyz(type),
        tension: 0.5,
      };
    },
    milkAllChartObj(color, type) {
      return {
        label: type == 'qty' ? "น้ำนมดิบ" : "รายได้",
        fill: false,
        borderColor: type == 'qty' ? "#e11d48" : "#16a34a",
        backgroundColor: type == 'qty' ? "#db2777" : "#65a30d",
        borderWidth: 3,
        data: this.milkAllChartAnlyz(type),
        tension: 0.4,
        cubicInterpolationMode: "monotone",
      };
    },
    createFoodMonthChart() {
      const labels = [];

      monthMini().forEach((m) => {
        labels.push(`${m}`);
      });

      return {
        labels,
        datasets: [this.foodMonthAmountChartObj(), this.foodMonthQtyChartObj()],
      };
    },
    createMilkLastChart(type) {
      const labels = [];
      const milks = Object.keys(this.milkLasts)
      monthMini().forEach((m) => {
        labels.push(`${m}`);
      });

      return {
        labels,
        datasets: [
          this.milkLastChartObj("primary", type)
        ],
      };
    },
    createMilkAllChart(type) {
      const labels = [];

      Object.keys(this.milkAlls).forEach((m) => {
        labels.push(`${m}`);
      });

      return {
        labels,
        datasets: [this.milkAllChartObj("danger", type)],
      };
    },
    getDoughnutChartData(type) {
      const datas = [];
      if (type == 'fixedCost') {
        Object.keys(this.expense.fixedCost).forEach((key) => {
          datas.push(this.expense.fixedCost[key]);
        });
      } else if (type == 'varyCost') {
        Object.keys(this.expense.varyCost).forEach((key) => {
          datas.push(this.expense.varyCost[key]);
        });
      }else if (type == 'bill') {
        Object.keys(this.expense.bill).forEach((key) => {
          datas.push(this.expense.bill[key]);
        });
      }else if (type == 'care') {
        Object.keys(this.expense.care).forEach((key) => {
          datas.push(this.expense.care[key]);
        });
      } else if (type == 'income') {
        Object.keys(this.income).forEach((key) => {
          datas.push(this.income[key]);
        });
      }

      return datas;
    },
    getDoughnutChartObject(type) {
      return {
        data: this.getDoughnutChartData(type),
        borderWidth: 2,
        weight: 2,
        backgroundColor: type === 'cost' || type === 'income' ?
          [
            "#84cc16",
            "#f59e0b",
            "#34d399",
            "#38bdf8",
            "#fb7185"
          ] : [
            "#d1d5db",
            "#fca5a5",
            "#fcd34d",
            "#bbf7d0",
            "#a5f3fc",
            "#c7d2fe",
            "#fbcfe8",
          ],
        hoverOffset: 4,
      };
    },
    createDoughnutChart(type) {
      const labels = [];
      if (type == 'fixedCost') {
        Object.keys(this.expense.fixedCost).forEach((item) => {
          labels.push(`${this.mapText(type)[item]}`);
        });
      } else if (type == 'varyCost') {
        Object.keys(this.expense.varyCost).forEach((item) => {
          labels.push(`${this.mapText(type)[item]}`);
        });
      }else if (type == 'bill') {
        Object.keys(this.expense.bill).forEach((item) => {
          labels.push(`${this.mapText(type)[item]}`);
        });
      }else if (type == 'care') {
        Object.keys(this.expense.care).forEach((item) => {
          labels.push(`${this.mapText(type)[item]}`);
        });
      } else if (type == 'income') {
        Object.keys(this.income).forEach((item) => {
          labels.push(`${this.mapText(type)[item]}`);
        });
      }

      return {
        labels,
        datasets: [this.getDoughnutChartObject(type)],
      };
    },
    mapText(type) {
      if (type == 'fixedCost') {
        return { building: 'สิ่งปลูกสร้าง', equipment: 'อุปกรณ์' }
      }else if (type == 'varyCost') {
        return {  cow: 'ค่านำเข้าโค', maintenance: 'ซ่อมบำรุง' }
      } else if (type == 'bill') {
        return { water: 'ค่าน้ำ', electric: 'ค่าไฟ', accom: 'ค่าที่พักคนงาน', rent: 'ค่าเช่า', internet: 'ค่าอินเทอร์เน็ต',waste : 'ค่าของเสีย',oth : 'อื่นๆ' }
      }else if (type == 'care') {
        return { food: 'ค่าอาหาร', heal: 'ค่ารักษา', protection: 'ค่าวัคซีน', worker: 'ค่าจ้างคนงาน' }
      } else if (type == 'income') {
        return { rawMilk: 'น้ำนมดิบ', cowExport: 'จำหน่ายโค', pasteuri: 'นมพาสเจอไรซ์', dung: 'มูลสัตว์', meat: 'จำหน่ายเนื้อโค' }
      }
    },
    sumExpense() {
      let sumFixedCost = 0,
      sumVaryCost = 0,
        sumCare = 0,
        sumBill = 0;
      let percent = 0;
      if (this.expense?.care) {
        for (let key of Object.keys(this.expense?.care)) {
          const amount = this.expense.care[key];
          if (amount) {
            sumCare += amount;
          }
        }
      }
      if (this.expense?.fixedCost) {
        for (let key of Object.keys(this.expense?.fixedCost)) {
          const amount = this.expense.fixedCost[key];
          if (amount) {
            sumFixedCost += amount;
          }
        }
      }

      if (this.expense?.varyCost) {
        for (let key of Object.keys(this.expense?.varyCost)) {
          const amount = this.expense.varyCost[key];
          if (amount) {
            sumVaryCost += amount;
          }
        }
      }

      if (this.expense?.bill) {
        for (let key of Object.keys(this.expense?.bill)) {
          const amount = this.expense.bill[key];
          if (amount) {
            sumBill += amount;
          }
        }
      }

      let sumExpense = sumCare + sumFixedCost + sumVaryCost + sumBill

      let  profit = this.income.rawMilk - sumExpense;
      

      if (profit >= 0) {
        percent = ((profit / this.income?.rawMilk) * 100);
      } else {
        percent = ((profit / sumExpense) * 100);
      }

      return { sumExpense,sumCare, sumFixedCost,sumVaryCost,sumBill, profit, percent };
    },
    formatDate(date) {
      if (!date) {
        return "";
      }
      return moment(new Date(date)).format("DD/MM/YYYY");
    },
  },
};
</script>
