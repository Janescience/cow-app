<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleBarSub icon="chartPie" title="ภาพรวมโค" />
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 gap-1 mb-1 lg:mb-5">
        
        <CardBox icon="sort" title="อันดับน้ำนมดิบ" header-icon="" class="lg:col-span-2">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <Table title="มากที่สุด 5 อันดับ" :items="rawMilkDescSort" :datas="rawMilkSortColumns" no-paging
              :loading="loading.rawMilkSort" />
            <Table title="น้อยที่สุด 5 อันดับ" :items="rawMilkAscSort" :datas="rawMilkSortColumns" no-paging
              :loading="loading.rawMilkSort" />
          </div>
        </CardBox>

        <!-- สุขภาพ (รักษา วัคซีน ค่าใช้จ่าย)-->
        <!-- การนำเข้าโค (เกิดกี่ตัว ซื้อมากี่ตัว(โคชนิดไหนกี่ตัว) ในปีนี้ )-->
        <!-- ผสมจากพ่อพันธ์ (สำเร็จ ไม่สำเร็จ รอผล) -->
        <!-- ผสมจากน้ำเชื้อ (สำเร็จ ไม่สำเร็จ รอผล) -->
        <!-- รายการโคตั้งท้อง (อายุครรภ์ กำหนดคลอด ครั้งที่) -->
          
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

    </SectionMain>
  </LayoutAuthenticated>
</template>

<script >
import DoughnutChart from "@/components/Charts/DoughnutChart.vue";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import FormControl from "@/components/FormControl.vue";
import Table from "@/components/Table.vue";

import DashboardService from "@/services/dashboard";
import moment from "moment";
import _ from "lodash";

import { status, quality } from "@/constants/cow";
import { addDays, addMonths } from "date-fns";

export default {
  data() {
    return {
      doughnutChartData: null,
      lineChartColors: { primary: "#00D1B2", danger: "#FF3860" },
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
          link : "cowDetail"
        },
        {
          label: "น้ำนมดิบ (กก.)",
          class: "text-right",
          value: "sumMilk",
          type: "number",
        },
      ],
      loading: {
        cow: true,
        quality: true,
        rawMilkSort: true,
      },
    };
  },
  components: {
    DoughnutChart,
    SectionMain,
    CardBox,
    SectionTitleBarSub,
    LayoutAuthenticated,
    FormControl,
    BaseIcon,
    Table,
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    this.getCow();
    this.getRawMilkSort();
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
    getDoughnutChartData() {
      const datas = [];
      Object.keys(this.cow.rawmilkQuality).forEach((key) => {
        datas.push(this.cow.rawmilkQuality[key]);
      });
      return datas;
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


