<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleBarSub icon="chartPie" title="ภาพรวมฟาร์ม" />
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div class="grid grid-cols-1 gap-5">
          <CardBox
            v-if="!loading.cow"
            icon="cow"
            title="สถานะโค"
            class="text-center"
            header-icon=""
          >
            <div class="grid grid-cols-2 gap-5">
              <p class="text-left mt-2">โครีดนม</p>
              <h1 class="lg:text-3xl text-2xl text-yellow-600">
                {{ cow.milk }}
              </h1>
              <p class="text-left mt-2">โคท้อง</p>
              <h1 class="lg:text-3xl text-2xl text-yellow-600">
                {{ cow.pregnant }}
              </h1>
              <p class="text-left mt-2">โคเด็ก</p>
              <h1 class="lg:text-3xl text-2xl text-yellow-600">
                {{ cow.baby }}
              </h1>
              <p class="text-left mt-2">โคดราย</p>
              <h1 class="lg:text-3xl text-2xl text-yellow-600">
                {{ cow.dry }}
              </h1>
            </div>
          </CardBox>
          <CardBox title="สถานะโค" header-icon="" v-else loading />
          <CardBox
            v-if="!loading.cow"
            icon="thermometerWater"
            title="คุณภาพนม"
            class="text-center"
            header-icon=""
          >
            <div class="grid grid-cols-2 gap-5">
              <p class="text-left mt-2">คุณภาพดี</p>
              <h1 class="lg:text-3xl text-2xl text-yellow-600">
                {{ cow.premiuem }}
              </h1>
              <p class="text-left mt-2">ปกติ</p>
              <h1 class="lg:text-3xl text-2xl text-yellow-600">
                {{ cow.premiuem }}
              </h1>
              <p class="text-left mt-2">แย่</p>
              <h1 class="lg:text-3xl text-2xl text-yellow-600">
                {{ cow.premiuem }}
              </h1>
              <p class="text-left mt-2">ไม่ได้ตรวจ</p>
              <h1 class="lg:text-3xl text-2xl text-yellow-600">
                {{ cow.premiuem }}
              </h1>
            </div>
          </CardBox>
          <CardBox title="คุณภาพนม" header-icon="" v-else loading />
        </div>
        <div class="grid grid-cols-1 gap-5 text-3xl">
          <CardBox class="justify-center flex h-full w-full items-center" header-icon="">
            <div class="text-center">
              <h1 class="">รีดนมแล้ว</h1>
              <h1 class=" mt-4 text-blue-600">
                {{ milk.count }}
              </h1>
              <h1 class=" mt-4">วัน</h1>
            </div>
              
        </CardBox>
          <CardBox class="justify-center flex h-full w-full items-center" header-icon="">
            <div class="text-center">
              <h1 class="">น้ำนมดิบทั้งหมด</h1>
              <h1 class="mt-4 text-green-600">
                {{ $filters.number(milk.sum) }}
              </h1>
              <h1 class=" mt-4">กิโลกรัม</h1>
            </div>  
          
        </CardBox>
        <CardBox class="justify-center flex h-full w-full items-center" header-icon="">
          <div class="text-center">
            <h1 class="">น้ำนมดิบเฉลี่ย/วัน</h1>
            <h1 class=" mt-4 text-orange-600">
              {{ $filters.number(milk.avg) }}
            </h1>
            <h1 class=" mt-4">กิโลกรัม</h1>
          </div>
        </CardBox>
        </div>
        
        <div class="grid grid-cols-1 gap-5">
          <Table
            title="คอก"
            :items="corrals"
            :datas="corralColumns"
            perPage="5"
            :loading="loading.corral"
          />

          <CardBox
            v-if="!loading.events"
            icon="calendarBadgeOutline"
            title="กำหนดการ"
            class="text-center"
            header-icon=""
          >
            <table class="text-sm">
              <tbody>
                <tr v-for="event in events" :key="event.title">
                  <td data-label="หัวข้อ">{{ event.title }}</td>
                  <td data-label="โค">{{ event.cow }}</td>
                  <td class="text-orange-600" data-label="วันที่">
                    {{ event.date }}
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBox>
          <CardBox
            icon="calendarBadgeOutline"
            title="กำหนดการ"
            header-icon=""
            v-else
            loading
          />
        </div>

        <CardBox
          :title="'น้ำนมดิบ ปี ' + new Date().getFullYear()"
          icon="chartBellCurveCumulative"
          class="lg:col-span-3"
          header-icon=""
        >
          <div v-if="chartData">
            <line-chart :data="chartData"  />
          </div>
          <div v-else>ไม่มีรายการรีดนม...</div>
        </CardBox>

        <CardBox
          icon="cashRegister"
          class="lg:col-span-3"
          title="ผลประกอบการ"
          header-icon=""
        >
          <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
            <CardBox
              icon="accountCashOutline"
              class="dark:border-zinc-500 shadow-xl"
              title="ต้นทุน"
              header-icon=""
            >
              <div class="grid grid-cols-2 gap-5">
                <p>อุปกรณ์</p>
                <p class="text-right">
                  {{
                    expense.cost?.equipment
                      ? $filters.currency(expense.cost.equipment)
                      : "-"
                  }}
                </p>
                <p>สิ่งปลูกสร้าง</p>
                <p class="text-right">
                  {{
                    expense.cost?.building
                      ? $filters.currency(expense.cost.building)
                      : "-"
                  }}
                </p>
                <p>การซ่อมบำรุง</p>
                <p class="text-right">
                  {{
                    expense.cost?.maintenance
                      ? $filters.currency(expense.cost.maintenance)
                      : "-"
                  }}
                </p>
                <p>ค่าใช้จ่ายเพิ่มเติม</p>
                <p class="text-right">
                  {{
                    expense.cost?.bill
                      ? $filters.currency(expense.cost.bill)
                      : "-"
                  }}
                </p>
              </div>
            </CardBox>
            <CardBox
              class="dark:border-zinc-500 shadow-xl"
              icon="doctor"
              title="ค่าดูแล"
              header-icon=""
            >
              <div class="grid grid-cols-2 gap-5 grid-flow-row-dense">
                <p>รักษา</p>
                <p class="text-right">
                  {{
                    expense?.care?.heal
                      ? $filters.currency(expense.care.heal)
                      : "-"
                  }}
                </p>
                <p>ป้องกัน/บำรุง</p>
                <p class="text-right">
                  {{
                    expense?.care?.protection
                      ? $filters.currency(expense.care.protection)
                      : "-"
                  }}
                </p>
                <p>อาหาร</p>
                <p class="text-right">
                  {{
                    expense?.care?.food
                      ? $filters.currency(expense.care.food)
                      : "-"
                  }}
                </p>
                <p>จ้างคนงาน</p>
                <p class="text-right">
                  {{
                    expense?.care?.worker
                      ? $filters.currency(expense.care.worker)
                      : "-"
                  }}
                </p>
              </div>
            </CardBox>
            <CardBox
              icon="cashMultiple"
              class="dark:border-zinc-500 shadow-xl"
              title="ผลผลิต"
              header-icon=""
            >
              <div class="grid grid-cols-2 gap-5">
                <p>น้ำนมดิบ</p>
                <p class="text-right">
                  {{
                    income?.rawMilk ? $filters.currency(income.rawMilk) : "-"
                  }}
                </p>
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
              class="dark:border-gray-300 border-2 shadow-xl"
              icon="homeAnalytics"
              title="สรุป"
              header-icon=""
            >
              <div class="grid grid-cols-2 gap-5 grid-flow-row-dense">
                <p>รายได้</p>
                <p class="text-right font-extrabold text-green-500 text-lg">
                  {{ $filters.currency(income.rawMilk) }}
                </p>
                <p>ค่าใช้จ่าย</p>
                <p class="text-right font-extrabold text-red-500 text-lg">
                  {{
                    $filters.currency(
                      sumExpense().sumCost + sumExpense().sumCare
                    )
                  }}
                </p>
              </div>
            </CardBox>

            <CardBox
              icon=""
              class="dark:border-red-500 shadow-xl"
              title=""
              header-icon=""
            >
              <div class="grid grid-cols-2 gap-5">
                <div class="mt-2">รวมต้นทุนฟาร์ม</div>
                <div
                  class="underline decoration-4 decoration-red-500 text-right text-xl"
                >
                  {{
                    sumExpense() ? $filters.currency(sumExpense().sumCost) : "-"
                  }}
                </div>
              </div>
            </CardBox>
            <CardBox
              class="dark:border-red-500 shadow-xl"
              icon=""
              title=""
              header-icon=""
            >
              <div class="grid grid-cols-2 gap-5">
                <div class="mt-2">รวมค่าดูแล</div>
                <div
                  class="underline decoration-4 decoration-red-500 text-right text-xl"
                >
                  {{
                    sumExpense() ? $filters.currency(sumExpense().sumCare) : "-"
                  }}
                </div>
              </div>
            </CardBox>

            <CardBox
              icon=""
              class="dark:border-green-500 shadow-xl"
              title=""
              header-icon=""
            >
              <div class="grid grid-cols-2 gap-5">
                <div class="mt-2">รวมผลผลิต</div>
                <div
                  class="underline decoration-4 decoration-green-500 text-right text-xl"
                >
                  {{ income.rawMilk ? $filters.currency(income.rawMilk) : "-" }}
                </div>
              </div>
            </CardBox>
            <CardBox
              icon=""
              :class="
                (sumExpense().profit < 0
                  ? 'dark:border-red-500 text-red-500'
                  : 'dark:border-green-500 text-green-500') +
                ' border-2 shadow-xl'
              "
              title=""
              header-icon=""
            >
              <div class="grid grid-cols-1 gap-5">
                <div
                  class="underline decoration-4 text-center font-extrabold text-2xl"
                >
                  {{
                    $filters.currency(
                      income.rawMilk -
                        (sumExpense().sumCost + sumExpense().sumCare)
                    )
                  }}
                </div>
              </div>
            </CardBox>
          </div>
        </CardBox>
      

        <CardBox
          icon="sort"
          title="อันดับน้ำนมดิบ"
          header-icon=""
          class="lg:col-span-2"
        >
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <Table
              title="มากที่สุด 5 อันดับ"
              :items="rawMilkDescSort"
              :datas="rawMilkSortColumns"
              no-paging
              :loading="loading.rawMilkSort"
            />
            <Table
              title="น้อยที่สุด 5 อันดับ"
              :items="rawMilkAscSort"
              :datas="rawMilkSortColumns"
              no-paging
              :loading="loading.rawMilkSort"
            />
          </div>
        </CardBox>
        <div class="grid grid-cols-1 gap-5">
          <CardBox title="สถิติการรักษา" header-icon="">
            <div class="grid grid-cols-3 gap-5">
              <p class="mt-1">รักษาทั้งหมด</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.heal?.count }}
              </h1>
              <p class="mt-1">ครั้ง</p>
            </div>
            <div class="grid grid-cols-5 gap-5">
              <p class="mt-1 col-span-3">
                โค{{ statistics?.heal?.max?.cow?.name }} รักษามากที่สุด
              </p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.heal?.max?.count }}
              </h1>
              <p class="mt-1">ครั้ง</p>
            </div>
          </CardBox>

          <CardBox title="สถิติการคลอด" header-icon="">
            <div class="grid grid-cols-3 gap-5">
              <p class="mt-1">คลอดทั้งหมด</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.born?.count }}
              </h1>
              <p class="mt-1">ครั้ง</p>
              <p class="mt-1">เพศผู้</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.born?.male }}
              </h1>
              <p class="mt-1">ตัว</p>
              <p class="mt-1">เพศเมีย</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.born?.female }}
              </h1>
              <p class="mt-1">ตัว</p>
            </div>
          </CardBox>
          <CardBox title="การตั้งครรภ์" header-icon="">
            <div class="grid grid-cols-3 gap-5">
              <p class="mt-1">กำลังตั้งครรภ์</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.pregnant?.count }}
              </h1>
              <p class="mt-1">ตัว</p>
              <p class="mt-1">ใกล้คลอด</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.pregnant?.nearBirth }}
              </h1>
              <p class="mt-1">ตัว</p>
            </div>
          </CardBox>
        </div>
      </div>
      
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script >
import * as chartConfig from "@/components/Charts/chart.config.js";
import LineChart from "@/components/Charts/LineChart.vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import SectionHeroBar from "@/components/SectionHeroBar.vue";
import CardBoxWidget from "@/components/CardBoxWidget.vue";
import CardBox from "@/components/CardBox.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import CardBoxTransaction from "@/components/CardBoxTransaction.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import FormControl from "@/components/FormControl.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import Table from "@/components/Table.vue";

import DashboardService from "@/services/dashboard";
import moment from "moment";
import _ from "lodash";

import { addDays, addMonths } from "date-fns";

export default {
  data() {
    return {
      chartData: null,
      chartColors: { primary: "#00D1B2", danger: "#FF3860" },
      milks: [],
      statistics: {},
      events: [],
      corrals: [],
      milk: {},
      cow: {},
      rawMilkDescSort: [],
      rawMilkAscSort: [],
      rawMilkSortColumns: [
        {
          label: "รูปโค",
          value: "cow.image",
          class: "text-center",
          type: "image",
          size: 12,
        },
        {
          label: "ชื่อโค",
          value: "cow.name",
        },
        {
          label: "น้ำนมดิบ (กก.)",
          class: "text-right",
          value: "sumMilk",
          type: "number",
        },
      ],
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
      expense: {},
      income: {},
      loading: {
        cow: true,
        milks: true,
        events: true,
        expense: true,
        income: true,
        rawMilkSort: true,
        corral: true,
        statistic: true,
      },
    };
  },
  components: {
    LineChart,
    SectionMain,
    SectionTitleBar,
    SectionHeroBar,
    CardBoxWidget,
    CardBox,
    NotificationBar,
    BaseButton,
    CardBoxTransaction,
    SectionTitleBarSub,
    LayoutAuthenticated,
    FormControl,
    BaseIcon,
    UserAvatar,
    BaseDivider,
    Table,
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    this.getIncome();
    this.getCow();
    this.getMilks();
    this.getEvents();
    this.getExpense();
    this.getRawMilkSort();
    this.getCorrals();
    this.getStatistics();
  },
  methods: {
    async getCow() {
      this.loading.cow = true;
      const resp = await DashboardService.getCow();
      if (resp) {
        this.cow = resp.data;
      }
      this.loading.cow = false;
    },
    async getMilks() {
      this.loading.milks = true;
      const resp = await DashboardService.getMilks();
      if (resp) {
        this.milk.sum = 0;
        for (let milk of resp.data) {
          milk.month = moment(milk.date, "DD-MM-YYYY").format("M");
          let sum = milk.milkDetails.reduce((prev, cur) => prev + cur.qty, 0);
          this.milk.sum += sum;
        }
        const milkGroupDate = _.groupBy(resp.data, "date")
        this.milk.avg = this.milk.sum / Object.keys(milkGroupDate).length
        this.milk.count = Object.keys(milkGroupDate).length
        this.milks = _.groupBy(resp.data, "month");

        //Rename key
        for(let key of Object.keys(this.milks)){
          this.milks[key][0].date =  moment(this.milks[key][0].date, "DD-MM-YYYY").format("MMM")
          this.milks[this.milks[key][0].date] = this.milks[key];
          delete this.milks[key];
        }

      }
      this.chartData = this.createChart();
      this.loading.milks = false;
    },
    async getEvents() {
      this.loading.events = true;
      const resp = await DashboardService.getEvents();
      if (resp) {
        this.events = _.orderBy(resp.data, "date");
        for (let event of this.events) {
          event.date = moment(event.date).format("DD/MM/YYYY");
        }
      }
      this.loading.events = false;
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
    async getRawMilkSort() {
      this.loading.rawMilkSort = true;
      const respDesc = await DashboardService.getRawMilkDescSort();
      if (respDesc) {
        this.rawMilkDescSort = respDesc.data.desc;
      }
      const respAsc = await DashboardService.getRawMilkAscSort();
      if (respAsc) {
        this.rawMilkAscSort = respAsc.data.asc;
      }
      this.loading.rawMilkSort = false;
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
    getChartData(type) {
      const datas = [];
      Object.keys(this.milks).forEach((key) => {
        let milks = this.milks[key];
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
    getDatasetObject(color, type) {
      return {
        label: "น้ำนมดิบ",
        fill: true,
        borderColor: this.chartColors[color],
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: this.chartColors[color],
        pointBorderColor: "rgba(255,255,255,0)",
        pointHoverBackgroundColor: this.chartColors[color],
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: this.getChartData(type),
        tension: 0.5,
        cubicInterpolationMode: "default",
      };
    },
    createChart() {
      const labels = [];

      Object.keys(this.milks).forEach((m) => {
        labels.push(`${m}`);
      });

      return {
        labels,
        datasets: [this.getDatasetObject("primary", "qty")],
      };
    },
    sumExpense() {
      let sumCost = 0,
        sumCare = 0;
      let profit = 0;
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

      return { sumCare, sumCost, profit };
    },
    formatDate(date) {
      if (!date) {
        return "";
      }
      return moment(new Date(date)).format("DD/MM/YYYY");
    },
    addMonths(date, months) {
      return this.formatDate(addMonths(date, months));
    },
  },
};
</script>


