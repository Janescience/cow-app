<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleBarSub icon="chartPie" title="ภาพรวมฟาร์ม" />
      <div class="grid grid-cols-1 lg:gap-5 gap-1 mb-1 lg:mb-5">
        
        <!-- การให้อาหาร -->
        <CardBox
          title="การให้อาหาร"
          icon="corn"
          header-icon=""
        >
        <div class="grid lg:grid-cols-6 grid-cols-1 gap-5">
          <FormControl
            v-model="foodYear"
            :options="years"
          />
        </div>
        
        <Table title="คอก" icon="barn" :items="food.corral" :datas="foodColumns" perPage="5" :loading="loading.food" />

        <div v-if="foodMonthChart?.datasets[0]?.data.length > 0" class="h-52 mt-5">
          <bar-chart :data="foodMonthChart" />
        </div>

      </CardBox>
        <!-- การผสมพันธุ์ -->
        <!-- การฉีดวัคซีน -->
        <!-- ยอดการส่งน้ำนมดิบให้สหกร แบ่งเช้า บ่าย และ รวม -->
      </div>

      <div class="grid grid-cols-1 gap-5">
        <CardBox
          title="น้ำนมดิบ"
          icon="water"
          class=""
          header-icon=""
        >
        <div class="grid grid-cols-2 ">
          <CardBox
            :title="'รายเดือน ปี ' + new Date().getFullYear()"
            icon="chartBellCurveCumulative"
            class=" mb-1 lg:mb-5 lg:mr-5"
            header-icon=""
          >
          <div class="grid grid-cols-3 gap-1 lg:gap-5 lg:text-lg  mb-1 lg:mb-5 ">
            <CardBox class="justify-center flex h-full w-full items-center dark:border-gray-800 border" header-icon="">
              <div class="text-center">
                <h1 class="">รีดนมแล้ว</h1>
                <h1 class="mt-4 bg-indigo-900 p-1 rounded-lg text-blue-500 font-extrabold">
                  <div v-if="milkLast?.count >= 0">{{ milkLast.count }}</div>
                  <BaseIcon
                    v-else
                    path="dotsCircle"
                    size="22"
                    class="animate-spin"
                  />
                </h1>
                <h1 class="mt-4">วัน</h1>
              </div>
            </CardBox>
            <CardBox class="justify-center flex h-full w-full items-center dark:border-gray-800 border" header-icon="">
              <div class="text-center">
                <h1 class="">ทั้งหมด</h1>
                <h1 class="mt-4 bg-teal-900 text-green-500 p-1 rounded-lg font-extrabold">
                  <div v-if="milkLast.sum >= 0">{{ $filters.number(milkLast.sum) }}</div>
                  <BaseIcon
                    v-else
                    path="dotsCircle"
                    size="22"
                    class="animate-spin"
                  />
                </h1>
                <h1 class="mt-4">กิโลกรัม</h1>
              </div>
            </CardBox>
            <CardBox class="justify-center flex h-full w-full items-center dark:border-gray-800 border" header-icon="">
              <div class="text-center">
                <h1 class="">เฉลี่ย/วัน</h1>
                <h1 class="mt-4 bg-amber-900 text-yellow-500 p-1 rounded-lg font-extrabold">
                  <div v-if="milkLast.avg >= 0">{{ $filters.number(milkLast.avg) }}</div>
                  <BaseIcon
                    v-else
                    path="dotsCircle"
                    size="22"
                    class="animate-spin"
                  />
                </h1>
                <h1 class="mt-4">กิโลกรัม</h1>
              </div>
            </CardBox>
          </div>
            <div v-if="milkLastChart?.datasets[0]?.data[0] > 0">
              <bar-chart :data="milkLastChart" />
            </div>
            <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
          </CardBox>

          <CardBox
            title="รายปี"
            icon="chartBellCurveCumulative"
            class="mb-1 lg:mb-5"
            header-icon=""
          >
          <div class="grid grid-cols-2 gap-1 lg:gap-5 lg:text-lg  mb-1 lg:mb-5">

            <CardBox class="justify-center flex h-full w-full items-center dark:border-gray-800 border" header-icon="">
              <div class="text-center">
                <h1 class="">ทั้งหมด</h1>
                <h1 class="mt-4 bg-teal-900 text-green-500 p-1 rounded-lg font-extrabold">
                  <div v-if="milkAll.sum >= 0">{{ $filters.number(milkAll.sum) }}</div>
                  <BaseIcon
                    v-else
                    path="dotsCircle"
                    size="22"
                    class="animate-spin"
                  />
                </h1>
                <h1 class="mt-4">กิโลกรัม</h1>
              </div>
            </CardBox>
            <CardBox class="justify-center flex h-full w-full items-center dark:border-gray-800 border" header-icon="">
              <div class="text-center">
                <h1 class="">เฉลี่ย/เดือน</h1>
                <h1 class="mt-4 bg-amber-900 text-yellow-500 p-1 rounded-lg font-extrabold">
                  <div v-if="milkAll.avg >= 0">{{ $filters.number(milkAll.avg) }}</div>
                  <BaseIcon
                    v-else
                    path="dotsCircle"
                    size="22"
                    class="animate-spin"
                  />
                </h1>
                <h1 class="mt-4">กิโลกรัม</h1>
              </div>
            </CardBox>
          </div>
            <div v-if="milkAllChart?.datasets[0]?.data[0] > 0">
              <line-chart :data="milkAllChart" />
            </div>
            <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
          </CardBox>
        </div>
          
        </CardBox>
        
      </div>

      <CardBox icon="cashRegister" class="lg:col-span-3 mb-1 lg:text-base text-sm lg:mb-5" title="ผลประกอบการ" header-icon="">
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-5">
          <CardBox icon="accountCashOutline" class="border-gray-400 border-2 shadow" title="ต้นทุน" header-icon="">
            <div class="grid grid-cols-1">
              <p class="dark:text-gray-300">อุปกรณ์</p>
              <p class="text-right font-extrabold">
                {{
                  $filters.currency(expense?.cost?.equipment)
                }}
              </p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">สิ่งปลูกสร้าง</p>
              <p class="text-right font-extrabold">
                {{
                  $filters.currency(expense?.cost?.building)
                }}
              </p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">การซ่อมบำรุง</p>
              <p class="text-right font-extrabold">
                {{
                  $filters.currency(expense?.cost?.maintenance)
                }}
              </p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">ค่านำเข้าโค</p>
              <p class="text-right font-extrabold">
                {{
                  $filters.currency(expense?.cost?.cow)
                }}
              </p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">ค่าใช้จ่ายเพิ่มเติม</p>
              <p class="text-right font-extrabold">
                {{
                  $filters.currency(expense?.cost?.bill)
                }}
              </p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">รวมต้นทุน</p>

              <div class="text-red-500 text-right text-xl underline decoration-2 font-extrabold">
                {{
                  $filters.currency(sumExpense().sumCost) 
                }}
              </div>
            </div>

          </CardBox>
          <CardBox class="border-gray-400 border-2 shadow-xl" icon="doctor" title="การดูแล" header-icon="">
            <div class="grid grid-cols-1 ">
              <p class="dark:text-gray-300">ค่ารักษา</p>
              <p class="text-right font-extrabold">
                {{
                  $filters.currency(expense?.care?.heal)
                }}
              </p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">ค่าป้องกัน/บำรุง</p>
              <p  class="text-right font-extrabold">
                {{
                  $filters.currency(expense?.care?.protection)
                }}
              </p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">ค่าอาหาร</p>
              <p  class="text-right font-extrabold">
                {{
                  $filters.currency(expense?.care?.food)
                }}
              </p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">ค่าจ้างคนงาน</p>
              <p  class="text-right font-extrabold" >
                {{
                  $filters.currency(expense?.care?.worker)
                }}
              </p>
              <hr class="dark:border-gray-700"/>
                  <p class="dark:text-gray-300">รวมค่าดูแล</p>

                  <div class="text-red-500 text-right text-xl underline decoration-2 font-extrabold">
                    {{
                      $filters.currency(sumExpense().sumCare) 
                    }}
                  </div>
            </div>
          </CardBox>
          <CardBox icon="cashMultiple" class="border-gray-400 border-2 shadow-xl" title="ผลผลิต" header-icon="">
            <div class="grid grid-cols-1">
              <p class="dark:text-gray-300">น้ำนมดิบ</p>
              <p class="text-right font-extrabold">
                {{ $filters.currency(income.rawMilk) }}
              </p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">นมพาสเจอร์ไรส์</p>
              <p class="text-right font-extrabold">{{ $filters.currency(0) }}</p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">มูลสัตว์</p>
              <p class="text-right font-extrabold">{{ $filters.currency(0) }}</p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">จำหน่ายโค</p>
              <p class="text-right font-extrabold">{{ $filters.currency(0) }}</p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">จำหน่ายเนื้อโค</p>
              <p class="text-right font-extrabold">{{ $filters.currency(0) }}</p>
              <hr class="dark:border-gray-700"/>
              <p class="dark:text-gray-300">รวมผลผลิต</p>

              <div class="text-green-500 text-right text-xl underline decoration-2 font-extrabold">
                {{ $filters.currency(income.rawMilk)  }}
              </div>
            </div>
          </CardBox>
        </div>
      </CardBox>

      <CardBox icon="poll" title="สถิติ" header-icon="" class=" mb-1 lg:mb-5">
        <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
          <CardBox title="การรักษา" header-icon="" class="dark:border-gray-800 border">
            <div class="grid grid-cols-2 gap-5">
              <p class="mt-1"><BaseIcon class="bg-red-900 text-rose-400 rounded-full p-1 mr-2" path="plusThick" size="16" />ทั้งหมด</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.heal?.count }}
              </h1>            
            </div>
            <div class="grid grid-cols-2 gap-5 mt-5" v-if="statistics?.heal?.max?.cow?.name">
              <p class="mt-1">
                <BaseIcon class="bg-gray-700 text-white rounded-full p-1 mr-2" path="cow" size="16" />โค{{ statistics?.heal?.max?.cow?.name }} 
                <div class="text-xs text-gray-500">(รักษามากที่สุด)</div>
              </p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.heal?.max?.count }}
              </h1>
            </div>
          </CardBox>
          <CardBox title="การผสมพันธุ์" header-icon="" class="dark:border-gray-800 border">
            <div class="grid grid-cols-2 gap-5">
              <p class="mt-1"><BaseIcon class="bg-teal-900 text-green-500 rounded-full p-1 mr-2" path="check" size="16" />สำเร็จ</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.reproduction?.success }}
              </h1>
              <p class="mt-1"><BaseIcon class="bg-red-900 text-rose-500 rounded-full p-1 mr-2" path="close" size="16" />ล้มเหลว</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.reproduction?.fail }}
              </h1>
            </div>
          </CardBox>
          <CardBox title="การตั้งครรภ์" header-icon="" class="dark:border-gray-800 border">
            <div class="grid grid-cols-2 gap-5">
              <p class="mt-1"><BaseIcon class="bg-black text-gray-300 rounded-full p-1 mr-2" path="emoticonCryOutline" size="16" />แท้ง</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.pregnant?.abort }}
              </h1>
              <p class="mt-1"><BaseIcon class="bg-orange-900 text-yellow-500 rounded-full p-1 mr-2" path="calendarClock" size="16" />ใกล้คลอด <div class="text-xs text-gray-500">(มากกว่า 8 เดือน)</div></p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.pregnant?.nearBirth }}
              </h1>
            </div>
          </CardBox>
          <CardBox title="การคลอด" header-icon="" class="dark:border-gray-800 border">
            <div class="grid grid-cols-2 gap-5">
              <p class="mt-1"><BaseIcon class="bg-indigo-900 text-white rounded-full p-1 mr-2" path="genderMale" size="16" />เพศผู้</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.born?.male }}
              </h1>
              <p class="mt-1"><BaseIcon class="bg-rose-900 text-white rounded-full p-1 mr-2" path="genderFemale" size="16" />เพศเมีย</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.born?.female }}
              </h1>
            </div>
          </CardBox>
          
        </div>
      </CardBox>

    </SectionMain>
  </LayoutAuthenticated>
</template>

<script >
import SectionMain from "@/components/SectionMain.vue";
import BarChart from "@/components/Charts/BarChart.vue";
import LineChart from "@/components/Charts/LineChart.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import CardBox from "@/components/CardBox.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import Table from "@/components/Table.vue";
import FormControl from "@/components/FormControl.vue";

import DashboardService from "@/services/dashboard";
import moment from "moment";
import _ from "lodash";

import { months,years } from "@/constants/date"

export default {
  data() {
    return {
      milkLastChart: null,
      foodMonthChart : null,
      milkAllChart: null,
      lineChartColors: { primary: "#00D1B2", danger: "#FF3860" },
      milkLasts: [],
      milkAlls: [],
      statistics: {},
      corrals: [],
      food : {},
      foodYear : new Date().getFullYear(),
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
          type : "number"
        },
        {
          label: "ค่าใช้จ่ายเฉลี่ย/เดือน (บาท)",
          value: "avgAmount",
          class: "text-right",
          type : "currency"
        },
        {
          label: "จำนวนเดือน",
          value: "count",
        },
      ],
      years : years(),
      expense: {},
      income: {},
      loading: {
        milks: true,
        expense: true,
        income: true,
        corral: true,
        statistic: true,
        food : true
      },
    };
  },
  components: {
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
    FormControl
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
    async getMilks() {
      this.loading.milks = true;
      const resp = await DashboardService.getMilks();
      if (resp) {
        //Last Year
        const milkLasts = resp.data.last;
        this.milkLast.sum = 0;
        for (let milk of milkLasts) {
          milk.month = moment(milk.date, "DD-MM-YYYY").format("M");
          let sum = milk.milkDetails.reduce((prev, cur) => prev + cur.qty, 0);
          this.milkLast.sum += sum;
        }
        const milkLastGroupDate = _.groupBy(milkLasts, "date");
        this.milkLast.avg =
          this.milkLast.sum > 0
            ? this.milkLast.sum / Object.keys(milkLastGroupDate).length
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
        this.milkAll.sum = 0;
        for (let milkAll of milkAlls) {
          milkAll.year = moment(milkAll.date, "YYYY-MM-DD").format("YYYY");
          milkAll.month = moment(milkAll.date, "YYYY-MM-DD").format("M");
          let sum = milkAll.milkDetails.reduce((prev, cur) => prev + cur.qty, 0);
          this.milkAll.sum += sum;
        }
        const milkAllGroupMonth = _.groupBy(milkAlls, "month");
        this.milkAll.avg =
          this.milkAll.sum > 0
            ? this.milkAll.sum / Object.keys(milkAllGroupMonth).length
            : 0;

        this.milkAlls = _.groupBy(milkAlls, "year");

      }

      this.milkLastChart = this.createMilkLastChart();
      this.milkAllChart = this.createMilkAllChart();
      this.loading.milks = false;
    },
    async getFood() {
      this.loading.food = true;
      const resp = await DashboardService.getFood(this.foodYear);
      if (resp) {
        this.food = resp.data;
      }
      this.foodMonthChart = this.createFoodMonthChart()
      this.loading.food = false;
    },
    async getExpense() {
      this.loading.expense = true;
      const resp = await DashboardService.getExpense();
      if (resp) {
        this.expense = resp.data;
      }
      this.loading.expense = false;
    },
    async getIncome() {
      this.loading.income = true;
      const resp = await DashboardService.getIncome();
      if (resp) {
        this.income = resp.data;
      }
      this.loading.income = false;
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
      return datas;
    },
    milkAllChartAnlyz(type) {
      const datas = [];
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
      return datas;
    },
    foodMonthChartAnlyz(type) {
      const amts = [],qtys = [];
      let foods = this.food.month;
      foods.map((m) => {
        amts.push(m.sumAmount)
        qtys.push(m.sumQty)
      });

      return {amount:amts,qty:qtys};
    },
    foodMonthAmountChartObj(color, type) {
      return {
        label: "ค่าอาหาร",
        borderColor: '#566573',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: true,
        backgroundColor: '#5D6D7E',
        data: this.foodMonthChartAnlyz().amount,
        tension: 0.5,
      };
    },
    foodMonthQtyChartObj(color, type) {
      return {
        label: "จำนวน (กก.)",
        borderColor: '#E83105',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: true,
        backgroundColor: '#F6461C',
        data: this.foodMonthChartAnlyz().qty,
        tension: 0.5,
      };
    },
    milkLastChartObj(color, type) {
      return {
        label: "น้ำนมดิบ",
        borderColor: '#566573',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: true,
        backgroundColor: '#5D6D7E',
        data: this.milkLastChartAnlyz(type),
        tension: 0.5,
      };
    },
    milkAllChartObj(color, type) {
      return {
        label: "น้ำนมดิบ",
        fill: true,
        borderColor: this.lineChartColors[color],
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: this.lineChartColors[color],
        pointBorderColor: "rgba(255,255,255,0)",
        pointHoverBackgroundColor: this.lineChartColors[color],
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: this.milkAllChartAnlyz(type),
        tension: 0.5,
        cubicInterpolationMode: "default",
      };
    },
    createFoodMonthChart() {
      const labels = [];

      Object.keys(this.food.month).forEach((m) => {
        labels.push(`${months()[m].label}`);
      });

      return {
        labels,
        datasets: [this.foodMonthAmountChartObj(),this.foodMonthQtyChartObj()],
      };
    },
    createMilkLastChart() {
      const labels = [];

      Object.keys(this.milkLasts).forEach((m) => {
        labels.push(`${m}`);
      });

      return {
        labels,
        datasets: [this.milkLastChartObj("primary", "qty")],
      };
    },
    createMilkAllChart() {
      const labels = [];

      Object.keys(this.milkAlls).forEach((m) => {
        labels.push(`${m}`);
      });

      return {
        labels,
        datasets: [this.milkAllChartObj("danger", "qty")],
      };
    },
    sumExpense() {
      let sumCost = 0,
        sumCare = 0;
      let profit = 0;
      let percent = 0;
      if (this.expense?.care) {
        for (let key of Object.keys(this.expense?.care)) {
          const amount = this.expense.care[key];
          if (amount) {
            sumCare += amount;
          }
        }
      }
      if (this.expense?.cost) {
        for (let key of Object.keys(this.expense?.cost)) {
          const amount = this.expense.cost[key];
          if (amount) {
            sumCost += amount;
          }
        }
      }

      if (this.income?.rawMilk) {
        profit = this.income?.rawMilk - (sumCare + sumCost);
      }

      if(profit >= 0){
        percent = ((profit / this.income?.rawMilk) * 100).toFixed(2)
      }else{
        percent = ((profit / (sumCare + sumCost)) * 100).toFixed(2)
      }

      return { sumCare, sumCost, profit , percent};
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


