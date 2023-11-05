<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleBarSub icon="chartPie" title="ภาพรวมฟาร์ม" />
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 gap-1 mb-1 lg:mb-5">
        <CardBox icon="formatListChecks" title="รายการที่ต้องทำ" header-icon="" class=" row-span-2" :loading="loading.todolist">
          
          <div v-if="Object.keys(todolist?.setting).length > 0" class="mb-5">
            <p class="underline decoration-4 font-extrabold " >ตั้งค่าเริ่มต้น</p>
            <div class="p-2" v-for="key in Object.keys(todolist?.setting)" :key="todolist.setting[key]">
              - <a v-for="todo in todolist.setting[key]" :key="todo" :href="todo.href" :class="todo.href?'text-blue-500 underline':''">{{  todo.text }}</a>
            </div>
          </div>

          <div v-if="Object.keys(todolist?.important).length > 0" class="mb-5">
            <!-- <hr class="border-t border-gray-100 dark:border-gray-600 mb-5 mt-3"/> -->
            <p class="underline decoration-4 font-extrabold " >ข้อมูลที่ควรบันทึก</p>
            <div class="p-2" v-for="key in Object.keys(todolist?.important)" :key="todolist.important[key]">
              - <a v-for="todo in todolist.important[key]" :key="todo" :href="todo.href" :class="todo.href?'text-blue-500 underline':(todo.remark?'text-gray-500 text-xs':'')">{{  todo.text }}</a>
            </div>
          </div>
          
          <div v-if="Object.keys(todolist.dairy).length > 0" class="mb-5">
            <!-- <hr class="border-t border-gray-100 dark:border-gray-600 mb-5 mt-3"/> -->
            <p class="underline decoration-4 font-extrabold " >รายวัน</p>
            <div class="p-2" v-for="key in Object.keys(todolist?.dairy)" :key="todolist.dairy[key]">
              - <a v-for="todo in todolist.dairy[key]" :key="todo" :href="todo.href" :class="todo.href?'text-blue-500 underline':''">{{  todo.text }}</a>
            </div>
          </div>

          <div v-if="Object.keys(todolist.monthly).length > 0" class="mb-5">
            <!-- <hr class="border-t border-gray-100 dark:border-gray-600 mb-5 mt-3"/> -->
            <p class="underline decoration-4 font-extrabold " >รายเดือน</p>
            <div class="p-2" v-for="key in Object.keys(todolist?.monthly)" :key="todolist.monthly[key]">
              - <a v-for="todo in todolist.monthly[key]" :key="todo" :href="todo.href" :class="todo.href?'text-blue-500 underline':''">{{  todo.text }}</a>
            </div>
          </div>

          <div v-if="Object.keys(todolist.notification).length > 0" class="mb-5">
            <!-- <hr class="border-t border-gray-100 dark:border-gray-600 mb-5 mt-3"/> -->
            <p class="underline decoration-4 font-extrabold " >ครบกำหนด</p>
            <div class="p-2" v-for="key in Object.keys(todolist?.notification)" :key="todolist.notification[key]">
              - <a v-for="todo in todolist.notification[key]" :key="todo" :href="todo.href" :class="todo.href?'text-blue-500 underline':''">{{  todo.text }}</a>
            </div>
          </div>

        </CardBox>

        <Table title="คอก" icon="barn" :items="corrals" :datas="corralColumns" perPage="5" :loading="loading.corral" />

        <Table title="กำหนดการ" icon="calendarBadgeOutline" :items="events" :datas="eventColumns" perPage="5"
          :loading="loading.events" />

          <CardBox icon="sort" title="อันดับน้ำนมดิบ" header-icon="" class="lg:col-span-2">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <Table title="มากที่สุด 5 อันดับ" :items="rawMilkDescSort" :datas="rawMilkSortColumns" no-paging
              :loading="loading.rawMilkSort" />
            <Table title="น้อยที่สุด 5 อันดับ" :items="rawMilkAscSort" :datas="rawMilkSortColumns" no-paging
              :loading="loading.rawMilkSort" />
          </div>
        </CardBox>
          
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 gap-1 mb-1 lg:mb-5">
        
        <CardBox :loading="loading.cow" icon="cow" title="สถานะโค" class="text-center" header-icon="">
          <div class="grid grid-cols-3 gap-5">
            <p class="text-left mt-2 col-span-2">
              <BaseIcon class="text-white bg-teal-900 rounded-full p-1 mr-2" path="water" size="16" />
              โครีดนม
            </p>
            <h1 class="lg:text-3xl text-2xl text-yellow-600">
              {{ cow.milk }}
            </h1>
            <p class="text-left mt-2 col-span-2">
              <BaseIcon class="text-blue-500 bg-indigo-900 rounded-full p-1 mr-2" path="humanPregnant" size="16" />โคท้อง
            </p>
            <h1 class="lg:text-3xl text-2xl text-yellow-600">
              {{ cow.pregnant }}
            </h1>
            <p class="text-left mt-2 col-span-2">
              <BaseIcon class="text-yellow-500 bg-amber-900 rounded-full p-1 mr-2" path="babyFaceOutline" size="16" />
              โคเด็ก
            </p>
            <h1 class="lg:text-3xl text-2xl text-yellow-600">
              {{ cow.baby }}
            </h1>
            <p class="text-left mt-2 col-span-2">
              <BaseIcon class="text-rose-500 bg-red-900 rounded-full p-1 mr-2" path="waterOff" size="16" />โคดราย
            </p>
            <h1 class="lg:text-3xl text-2xl text-yellow-600">
              {{ cow.dry }}
            </h1>
          </div>
        </CardBox>

        <CardBox
          :loading="loading.cow"
          icon="thermometerWater"
          title="คุณภาพนม"
          class="text-center"
          header-icon=""
        >
          <div v-if="doughnutChartData?.datasets[0]?.data[0] > 0" class="lg:h-56">
            <doughnut-chart :data="doughnutChartData" />
          </div>
          <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
        </CardBox>

        <CardBox  icon="counter" title="คุณภาพโค" header-icon="">
          <div class="grid grid-cols-5 gap-2 ml-3 ">
            <p class="text-2xl text-lime-500 font-extrabold">
              A+
            </p>
            <p class=" mt-2 col-span-3 flex">ดีมาก<p class="text-xs text-gray-500  mt-1 ml-2 ">(กำไร > 80%)</p></p>

            

            <h1 class="lg:text-3xl text-xl " v-if="!loading.quality">
              {{ quality.aplus }}
            </h1>
            <BaseIcon
                v-else
                path="dotsCircle"
                size="22"
                class="animate-spin text-gray-500"
              />
            <p class="text-2xl  text-green-500  font-extrabold">
              A
            </p>
            <p class="mt-2 col-span-3 flex ">ดี<p class="text-xs text-gray-500 mt-1 ml-2 ">(กำไร 51% ~ 80%)</p></p>

            

            <h1 class="lg:text-3xl text-xl " v-if="!loading.quality">
              {{ quality.a }}
            </h1>
            <BaseIcon
                v-else
                path="dotsCircle"
                size="22"
                class="animate-spin text-gray-500"
              />
            <p class="dark:text-white text-black text-2xl   font-extrabold">
              B
            </p>
            <p class="text-sm  mt-2 col-span-3 flex">ปกติ<p class="text-xs text-gray-500  mt-1 ml-2 ">(กำไร 31% ~ 50%)</p></p>

            

            <h1 class="lg:text-3xl text-xl " v-if="!loading.quality">
              {{ quality.b }}
            </h1>
            <BaseIcon
                v-else
                path="dotsCircle"
                size="22"
                class="animate-spin text-gray-500"
              />
            <p class="text-2xl   text-orange-500 font-extrabold">
              C
            </p>
            <p class="text-left mt-2 col-span-3 flex">แย่<p class="text-xs text-gray-500 mt-1 ml-2">(กำไร 1% ~ 30%)</p></p>

            

            <h1 class="lg:text-3xl text-xl" v-if="!loading.quality">
              {{ quality.c }}
            </h1>
            <BaseIcon
                v-else
                path="dotsCircle"
                size="22"
                class="animate-spin text-gray-500"
              />
            <p class="text-2xl   text-red-500 font-extrabold">
              D
            </p>
            <p class="text-left mt-2 col-span-3 flex">แย่มาก<p class="text-xs text-gray-500 text-left mt-1 ml-2">(กำไร &lt;= 0%)</p></p>


            <h1 class="lg:text-3xl text-xl " v-if="!loading.quality">
              {{ quality.d }}
            </h1>
            <BaseIcon
                v-else
                path="dotsCircle"
                size="22"
                class="animate-spin text-gray-500"
              />
          </div>
        </CardBox>
      </div>

      

      <CardBox
        :title="'น้ำนมดิบ ปี ' + new Date().getFullYear()"
        icon="chartBellCurveCumulative"
        class="lg:col-span-3 mb-1 lg:mb-5"
        header-icon=""
      >
      <div class="grid grid-cols-3 gap-1 lg:gap-5 lg:text-xl  mb-1 lg:mb-5">
        <CardBox class="justify-center flex h-full w-full items-center dark:border-gray-800 border-4" header-icon="">
          <div class="text-center">
            <h1 class="">รีดนมแล้ว</h1>
            <h1 class="mt-4 bg-indigo-900 p-1 rounded-lg text-blue-500 ">
              <div v-if="milk?.count >= 0">{{ milk.count }}</div>
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
        <CardBox class="justify-center flex h-full w-full items-center dark:border-gray-800 border-4" header-icon="">
          <div class="text-center">
            <h1 class="">น้ำนมดิบทั้งหมด</h1>
            <h1 class="mt-4 bg-teal-900 text-green-500 p-1 rounded-lg ">
              <div v-if="milk.sum >= 0">{{ $filters.number(milk.sum) }}</div>
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
        <CardBox class="justify-center flex h-full w-full items-center dark:border-gray-800 border-4" header-icon="">
          <div class="text-center">
            <h1 class="">น้ำนมดิบเฉลี่ย/วัน</h1>
            <h1 class="mt-4 bg-amber-900 text-yellow-500 p-1 rounded-lg ">
              <div v-if="milk.avg >= 0">{{ $filters.number(milk.avg) }}</div>
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
        <div v-if="lineChartData?.datasets[0]?.data[0] > 0">
          <line-chart :data="lineChartData" />
        </div>
        <div v-else class="text-gray-500">ไม่มีข้อมูล...</div>
      </CardBox>

      <CardBox icon="cashRegister" class="lg:col-span-3 mb-1 lg:text-base text-sm lg:mb-5" title="ผลประกอบการ" header-icon="">
        <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
          <CardBox icon="accountCashOutline" class="border-gray-400 border-2 shadow-xl" title="ต้นทุน" header-icon="">
            <div class="grid grid-cols-2 gap-5">
              <p>อุปกรณ์</p>
              <p class="text-right">
                {{
                  $filters.currency(expense?.cost?.equipment)
                }}
              </p>
              <p>สิ่งปลูกสร้าง</p>
              <p class="text-right">
                {{
                  $filters.currency(expense?.cost?.building)
                }}
              </p>
              <p>การซ่อมบำรุง</p>
              <p class="text-right">
                {{
                  $filters.currency(expense?.cost?.maintenance)
                }}
              </p>
              <p>ค่าใช้จ่ายเพิ่มเติม</p>
              <p class="text-right">
                {{
                  $filters.currency(expense?.cost?.bill)
                }}
              </p>
            </div>
          </CardBox>
          <CardBox class="border-gray-400 border-2 shadow-xl" icon="doctor" title="ค่าดูแล" header-icon="">
            <div class="grid grid-cols-2 gap-5 grid-flow-row-dense">
              <p>รักษา</p>
              <p class="text-right">
                {{
                  $filters.currency(expense?.care?.heal)
                }}
              </p>
              <p>ป้องกัน/บำรุง</p>
              <p class="text-right">
                {{
                  $filters.currency(expense?.care?.protection)
                }}
              </p>
              <p>อาหาร</p>
              <p class="text-right">
                {{
                  $filters.currency(expense?.care?.food)
                }}
              </p>
              <p>จ้างคนงาน</p>
              <p class="text-right">
                {{
                  $filters.currency(expense?.care?.worker)
                }}
              </p>
            </div>
          </CardBox>
          <CardBox icon="cashMultiple" class="border-gray-400 border-2 shadow-xl" title="ผลผลิต" header-icon="">
            <div class="grid grid-cols-2 gap-5">
              <p>น้ำนมดิบ</p>
              <p class="text-right">
                {{ $filters.currency(income.rawMilk) }}
              </p>
              <p>นมพาสเจอร์ไรส์</p>
              <p class="text-right">{{ $filters.currency(0) }}</p>
              <p>มูลสัตว์</p>
              <p class="text-right">{{ $filters.currency(0) }}</p>
              <p>จำหน่ายโค</p>
              <p class="text-right">{{ $filters.currency(0) }}</p>
              <p>จำหน่ายเนื้อโค</p>
              <p class="text-right">{{ $filters.currency(0) }}</p>
            </div>
          </CardBox>

          <CardBox class="border-gray-300 border-4 shadow-xl" icon="homeAnalytics" title="สรุป" header-icon="">
            <div class="grid grid-cols-2 gap-5 grid-flow-row-dense">
              <p>รายได้</p>
              <p class="text-right font-extrabold bg-teal-900 rounded p-1 text-green-500">
                {{ $filters.currency(income.rawMilk) }}
              </p>
              <p>ค่าใช้จ่าย</p>
              <p class="text-right font-extrabold bg-rose-300 rounded p-1 text-red-700">
                {{
                  $filters.currency(sumExpense().sumCost + sumExpense().sumCare)
                }}
              </p>
            </div>
          </CardBox>

          <CardBox icon="" class="dark:bg-red-300 bg-red-300 shadow-xl" title="" header-icon="">
            <div class="grid grid-cols-1 text-center">
              <p class="text-black text-xs">รวมต้นทุน</p>

              <div class="text-red-500 text-center text-2xl font-extrabold">
                {{
                  $filters.currency(sumExpense().sumCost) 
                }}
              </div>
            </div>
          </CardBox>
          <CardBox class="dark:bg-red-300 bg-red-300 shadow-xl" icon="" title="" header-icon="">
            <div class="grid grid-cols-1 text-center">
              <p class="text-black text-xs">รวมค่าดูแล</p>

              <div class="text-red-500 text-center text-2xl font-extrabold">
                {{
                  $filters.currency(sumExpense().sumCare) 
                }}
              </div>
            </div>
          </CardBox>

          <CardBox icon="" class="dark:bg-teal-900 bg-teal-900 shadow-xl" title="" header-icon="">
            <div class="grid grid-cols-1 text-center">
              <p class="text-black text-xs">รวมผลผลิต</p>

              <div class="text-green-500 text-center text-2xl font-extrabold">
                {{ $filters.currency(income.rawMilk)  }}
              </div>
            </div>
          </CardBox>
          <CardBox icon="" :class="(sumExpense().profit < 0
              ? 'dark:bg-red-900 bg-red-900 text-rose-500'
              : 'dark:bg-teal-900 bg-teal-900 text-green-500') + ' shadow-xl'
            " title="" header-icon="">
            <div class="grid grid-cols-1 text-center">
              <p class="text-black text-xs">กำไร/ขาดทุน</p>
              <div class="text-center font-extrabold text-2xl">
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

      

      <CardBox icon="poll" title="สถิติ" header-icon="" class=" mb-1 lg:mb-5">
        <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
          <CardBox title="การรักษา" header-icon="" class="dark:border-gray-800 border-4">
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
          <CardBox title="การสืบพันธุ์/ผสมพันธุ์" header-icon="" class="dark:border-gray-800 border-4">
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
          <CardBox title="การตั้งครรภ์" header-icon="" class="dark:border-gray-800 border-4">
            <div class="grid grid-cols-2 gap-5">
              <p class="mt-1"><BaseIcon class="bg-black text-gray-300 rounded-full p-1 mr-2" path="emoticonCryOutline" size="16" />แท้ง</p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.pregnant?.count }}
              </h1>
              <p class="mt-1"><BaseIcon class="bg-orange-900 text-yellow-500 rounded-full p-1 mr-2" path="calendarClock" size="16" />ใกล้คลอด <div class="text-xs text-gray-500">(มากกว่า 8 เดือน)</div></p>
              <h1 class="lg:text-xl text-lg text-yellow-600 text-center">
                {{ statistics?.pregnant?.nearBirth }}
              </h1>
            </div>
          </CardBox>
          <CardBox title="การคลอด" header-icon="" class="dark:border-gray-800 border-4">
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
import * as chartConfig from "@/components/Charts/chart.config.js";
import LineChart from "@/components/Charts/LineChart.vue";
import DoughnutChart from "@/components/Charts/DoughnutChart.vue";
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
import FormCheckRadioPicker from "@/components/FormCheckRadioPicker.vue";

import DashboardService from "@/services/dashboard";
import moment from "moment";
import _ from "lodash";

import { status, quality } from "@/constants/cow";
import { addDays, addMonths } from "date-fns";

export default {
  data() {
    return {
      lineChartData: null,
      doughnutChartData: null,
      lineChartColors: { primary: "#00D1B2", danger: "#FF3860" },
      milks: [],
      statistics: {},
      events: [],
      corrals: [],
      todolist: {
        setting:{},
        important:{},
        dairy:{},
        monthly:{},
        notification:{},
      },
      milk: {},
      cow: {},
      quality: {},
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
      eventColumns: [
        {
          label: "หัวข้อ",
          value: "title",
        },
        {
          label: "โค",
          value: "cow",
        },
        {
          label: "วันที่",
          value: "date",
          type: "date",
          class: "text-center",
        },
      ],
      expense: {},
      income: {},
      loading: {
        cow: true,
        quality: true,
        milks: true,
        events: true,
        expense: true,
        income: true,
        rawMilkSort: true,
        corral: true,
        statistic: true,
        todolist: true,
      },
    };
  },
  components: {
    LineChart,
    DoughnutChart,
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
    FormCheckRadioPicker
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    this.getCow();
    this.getIncome();
    this.getMilks();
    this.getExpense();
    this.getRawMilkSort();
    this.getCorrals();
    this.getStatistics();
    this.getTodoList();
    this.getEvents();
    this.getQuality();
  },
  methods: {
    async getCow() {
      this.loading.cow = true;
      const resp = await DashboardService.getCow();
      if (resp) {
        this.cow = resp.data;
      }
      this.doughnutChartData = this.createDoughnutChart();

      this.loading.cow = false;
    },
    async getQuality() {
      this.loading.quality = true;
      const resp = await DashboardService.getQuality();
      if (resp) {
        this.quality = resp.data;
      }
      this.loading.quality = false;
    },
    async getTodoList() {
      this.loading.todolist = true;
      const resp = await DashboardService.getTodoList();
      if (resp) {
        this.todolist = resp.data;
      }
      this.loading.todolist = false;
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
        const milkGroupDate = _.groupBy(resp.data, "date");
        this.milk.avg =
          this.milk.sum > 0
            ? this.milk.sum / Object.keys(milkGroupDate).length
            : 0;
        this.milk.count = Object.keys(milkGroupDate).length;
        this.milks = _.groupBy(resp.data, "month");

        //Rename key
        for (let key of Object.keys(this.milks)) {
          this.milks[key][0].date = moment(
            this.milks[key][0].date,
            "DD-MM-YYYY"
          ).format("MMM");
          this.milks[this.milks[key][0].date] = this.milks[key];
          delete this.milks[key];
        }
      }
      this.lineChartData = this.createLineChart();
      this.loading.milks = false;
    },
    async getEvents() {
      this.loading.events = true;
      const resp = await DashboardService.getEvents();
      if (resp) {
        this.events = _.orderBy(resp.data, "date");
        const today = moment().format("DD/MM/YYYY");
        let events = [];
        for (let event of this.events) {
          if (today === moment(event.date).format("DD/MM/YYYY")) {
            events.push("โคครบกำหนดวันนี้");
          }
        }
        this.todolist.event = events;
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
    getLineChartData(type) {
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
    getDoughnutChartData() {
      const datas = [];
      Object.keys(this.cow.rawmilkQuality).forEach((key) => {
        datas.push(this.cow.rawmilkQuality[key]);
      });
      return datas;
    },
    getLineChartObject(color, type) {
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
        data: this.getLineChartData(type),
        tension: 0.5,
        cubicInterpolationMode: "default",
      };
    },
    getDoughnutChartObject() {
      return {
        label: "คุณภาพน้ำนมดิบ",
        fill: true,
        borderColor: "#000000",
        borderWidth: 2,
        data: this.getDoughnutChartData(),
        weight: 4,
        backgroundColor: [
          "rgb(16 185 129)",
          "rgb(59 130 246)",
          "rgb(244 63 94)",
          "rgb(245 158 11)",
        ],
        hoverOffset: 4,
      };
    },
    createLineChart() {
      const labels = [];

      Object.keys(this.milks).forEach((m) => {
        labels.push(`${m}`);
      });

      return {
        labels,
        datasets: [this.getLineChartObject("primary", "qty")],
      };
    },
    createDoughnutChart() {
      const labels = [];

      quality("create").forEach((item) => {
        labels.push(`${item.label}`);
      });

      return {
        labels,
        datasets: [this.getDoughnutChartObject("primary", "qty")],
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


