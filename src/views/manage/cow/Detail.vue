<template>
  <LayoutAuthenticated>
    <SectionMain class="text-sm lg:text-base">
      <section class="px-4 sm:px-0 mb-4 flex items-center justify-between">
        <div class="flex items-center justify-start">
          <BaseIcon path="cow" size="30" class="mr-3" />
          <h1 class="text-base lg:text-2xl">รายละเอียดโค</h1>
        </div>
        <BaseButtons class="text-sm lg:text-base" type="justify-end">
          <BaseButton
            class="lg:p-2 p-1"
            label="ย้อนกลับ"
            color="light"
            @click="this.$router.push('/manage/cow')"
          />
          <BaseButton
            class="lg:p-2 p-1"
            label="ออกรายงาน"
            color="info"
            @click="exportReport()"
          />
        </BaseButtons>
      </section>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-5">
        <CardBox
          class="lg:col-span-2 mb-5"
          :loading="loading.cow"
          title="ข้อมูลโค"
          header-icon=""
          icon="cardTextOutline"
        >
          <div
            class="grid gap-5 grid-cols-2 lg:grid-cols-4 md:grid-cols-6"
          >
            <div class="row-span-2">
              <ImageUpload v-model="cow.image" class="mt-12 mr-2" />
              <BaseLevel type="justify-center text-xs font-thin text-slate-500">
                อัพโหลดรูปภาพ (คลิกที่รูป)
              </BaseLevel>
            </div>
            <FormField label="รหัสโค" help="* ห้ามว่าง">
              <FormControl v-model="cow.code" icon="barcode" required />
            </FormField>
            <FormField label="ชื่อโค" help="* ห้ามว่าง">
              <FormControl v-model="cow.name" icon="cow" required />
            </FormField>
            <FormField label="วันเกิด" help="* ห้ามว่าง">
              <FormControl
                v-model="cow.birthDate"
                icon="calendar"
                type="date"
                required
              />
            </FormField>
            <FormField label="สถานะ" help="* ห้ามว่าง">
              <FormControl
                v-model="cow.status"
                :options="status"
                icon=""
                required
              />
            </FormField>
            <FormField label="คุณภาพน้ำนม" help="* ห้ามว่าง">
              <FormControl v-model="cow.quality" :options="qualityMilk" icon="" />
            </FormField>
            <FormField label="คอก">
              <FormControl v-model="cow.corral" icon="barn" />
            </FormField>
            <BaseButtons
              type="justify-center"
              class=""
            >
              <BaseButton label="ลบ" color="danger" @click="remove()" />
              <BaseButton label="บันทึก" color="success" @click="update()" />
            </BaseButtons>
            <FormField label="พ่อพันธุ์">
              <FormControl v-model="cow.dad" icon="genderMale" />
            </FormField>
            <FormField label="แม่พันธุ์">
              <FormControl v-model="cow.mom" icon="genderFemale" />
            </FormField>
           
          </div>
        </CardBox>
        <CardBox
         title="คุณภาพ/ความคุ้มค่า"
          class="mb-5"
          header-icon=""
        > 
          <div class="grid grid-cols-3 gap-5">
            <p :class="filterColor()?.grade+' shadow-lg text-7xl font-extrabold text-center  bg-gradient-to-r from-gray-800 to-zinc-900 rounded-full '">{{ quality?.grade }}</p>
            <div class="row-span-2 col-span-2">
              <p >ระดับอยู่ในเกณฑ์ {{  quality?.description }} </p>
            <p class="text-gray-500 text-xs">{{  filterText()?.percent }} </p>
            </div>  
            
          </div>
          <table class="shadow-lg dark:bg-gray-900 rounded-xl">
            <tr>
              <td>รายได้ทั้งหมด</td>
              <td class="underline decoration-4 decoration-green-500">{{ $filters.currency(quality?.income?.sum) }}</td>
            </tr>
            <tr>
              <td>ค่าใช้จ่ายทั้งหมด</td>
              <td class="underline decoration-4 decoration-red-500">{{ $filters.currency(quality?.expense?.sum) }}</td>
            </tr>
            <tr>
              <td>กำไร ({{ $filters.number(quality?.profit?.percent) }}%)</td>
              <td :class="filterColor()?.profit">{{ $filters.currency(quality?.profit?.amount) }}</td>
            </tr>
          </table>
        </CardBox>
      </div>
      

      <CardBox
        icon="cupWater"
        :loading="loading.milk"
        title="ข้อมูลน้ำนมดิบ"
        class="mb-5"
        header-icon=""
      >
        <div class="overflow-x-auto">
          <table>
            <thead>
              <th class="whitespace-nowrap text-center">เฉลี่ย/วัน (กก.)</th>
              <th class="whitespace-nowrap text-center">เฉลี่ยเช้า/วัน (กก.)</th>
              <th class="whitespace-nowrap text-center">เฉลี่ยบ่าย/วัน (กก.)</th>
              <th class="whitespace-nowrap text-center">รวมทั้งหมด (กก.)</th>
            </thead>
            <tbody>
              <tr>
                <td class="whitespace-nowrap text-right">
                  {{ milk.avgTotal }}
                </td>
                <td class="text-right">{{ milk.avgMorning }}</td>
                <td class="text-right">{{ milk.avgAfternoon }}</td>
                <td class="text-right">{{ milk.all }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBox>

      <CardBoxCollapse
        icon="foodDrumstickOutline"
        class="transition-position mb-5"
        title="การกินอาหาร"
        header-icon=""
      >
        <Table
          :items="foods"
          :datas="foodDatas"
          :loading="loading.food"
          perPage="5"
        />
      </CardBoxCollapse>

      <!-- <div class="grid gap-5 grid-cols-1 "> -->
      <CardBoxCollapse
        icon="calendarClock"
        class="transition-position mb-5"
        has-table
        title="ข้อมูลล่าสุด"
        header-icon=""
      >
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:p-4">
          <CardBox
            icon="reproduction"
            class="lg:col-span-2 dark:border-gray-600 border-gray-900"
            :loading="loading.reproduct"
            title="การสืบพันธุ์/ผสมพันธุ์"
            header-icon=""
          >
            <div class="overflow-x-auto">
              <table>
                <thead>
                  <th class="whitespace-nowrap">รายการ</th>
                  <th class="whitespace-nowrap">จำนวนครั้ง</th>
                  <th class="whitespace-nowrap">วันที่ล่าสุด</th>
                  <th class="whitespace-nowrap">ผลล่าสุด</th>
                </thead>
                <tbody>
                  <tr>
                    <td class="whitespace-nowrap">เข้าระบบสืบพันธุ์</td>
                    <td>{{ reproduct().login.count }}</td>
                    <td>{{ reproduct().login.lastDate }}</td>
                    <td>{{ reproduct().login.result }}</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap">เป็นสัด</td>
                    <td>{{ reproduct().estrus.count }}</td>
                    <td>{{ reproduct().estrus.lastDate }}</td>
                    <td />
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap">ผสม</td>
                    <td>{{ reproduct().mating.count }}</td>
                    <td>{{ reproduct().mating.lastDate }}</td>
                    <td />
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap">ตรวจท้อง</td>
                    <td>{{ reproduct().check.count }}</td>
                    <td>{{ reproduct().check.lastDate }}</td>
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBox>

          <CardBox
            icon="babyFace"
            class="dark:border-gray-600 border-gray-900"
            :loading="loading.birth"
            title="การคลอดลูก"
            header-icon=""
          >
            <table>
              <tbody>
                <tr>
                  <td>จำนวนครั้ง</td>
                  <td>{{ birth().count }}</td>
                </tr>
                <tr>
                  <td>วันที่</td>
                  <td>{{ birth().lastDate }}</td>
                </tr>
                <tr>
                  <td>จำนวนเพศผู้</td>
                  <td>{{ birth().countMale }}</td>
                </tr>
                <tr>
                  <td>จำนวนเพศเมีย</td>
                  <td>{{ birth().countFemale }}</td>
                </tr>
              </tbody>
            </table>
          </CardBox>
          <CardBox
            icon="doctor"
            :loading="loading.heal"
            class="dark:border-gray-600 border-gray-900"
            title="การรักษา"
            header-icon=""
          >
            <table>
              <tbody>
                <tr>
                  <td class="whitespace-nowrap">จำนวนครั้ง</td>
                  <td>{{ heal().count }}</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">วันที่</td>
                  <td class="whitespace-nowrap">{{ heal().lastDate }}</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">อาการ/โรค</td>
                  <td class="whitespace-nowrap">{{ heal().lastDisease }}</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">วิธีการรักษา</td>
                  <td class="whitespace-nowrap">{{ heal().lastMethod }}</td>
                </tr>
              </tbody>
            </table>
          </CardBox>
          <div class="lg:col-span-2">
            <Table
              title="การป้องกัน/บำรุง"
              :items="protections"
              :datas="protectionDatas"
              :loading="loading.protection"
              perPage="5"
              icon="pillMultiple"
            />
          </div>
        </div>
      </CardBoxCollapse>

      
      <!-- </div> -->

      <CardBoxCollapse
        icon="messageBadgeOutline"
        class="transition-position mb-5"
        :loading="loading.notification"
        v-if="!loading.notification && notifications.length > 0"
        title="การแจ้งเตือน"
        header-icon=""
      >
        <Table
          title=""
          :items="notifications"
          :datas="notificationDatas"
          :loading="loading.notification"
          perPage="5"
        />
      </CardBoxCollapse>
      
      <CardBoxCollapse
        icon="history"
        class="transition-position mb-5"
        title="ประวัติต่างๆ"
        header-icon=""
      >
        <div class="grid grid-cols-1 gap-5">
          <Table
            title="ประวัติการรีดนม"
            :items="historyMilks"
            :datas="milkDatas"
            :loading="loading.milk"
            icon="waterCheck"
            perPage="5"
          />

          <Table
            v-if="!loading.reproduct && reproducts.length > 0"
            title="ประวัติการสืบพันธ์ุ/ผสมพันธ์ุ"
            icon="reproduction"
            :items="reproducts"
            :datas="reproductDatas"
            :loading="loading.reproduct"
            perPage="5"
          />

          <Table
            v-if="!loading.birth && births.length > 0"
            title="ประวัติการคลอดลูก"
            :items="births"
            :datas="birthDatas"
            :loading="loading.birth"
            icon="babyFaceOutline"
            perPage="5"
          />

          <Table
            v-if="!loading.heal && heals.length > 0"
            title="ประวัติการรักษา"
            icon="medication"
            :items="heals"
            :datas="healDatas"
            :loading="loading.heal"
            perPage="5"
          />
        </div>
      </CardBoxCollapse>
      
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from "@/components/SectionMain.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxCollapse from "@/components/CardBoxCollapse.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import ImageUpload from "@/components/ImageUpload.vue";
import Table from "@/components/Table.vue";

import CowService from "@/services/cow";
import MilkService from "@/services/milking";
import ReproductService from "@/services/reproduction";
import BirthService from "@/services/birth";
import HealService from "@/services/heal";
import ProtectionService from "@/services/protection";
import FoodService from "@/services/food";
import NotificationService from "@/services/notification";

import getAge from "@/utils/age-calculate";
import moment from "moment";
import _ from "lodash";

import { Toast } from "@/utils/alert";
import { status, quality } from "@/constants/cow";
import { reproductResult, reproductStatus } from "@/constants/reproduct";
import { sex, overgrown } from "@/constants/birth";

export default {
  data() {
    return {
      cow: {},
      quality : {},
      milks: [],
      milkDetails: [],
      historyMilks: [],
      reproducts: [],
      births: [],
      heals: [],
      protections: [],
      foods: [],
      notifications: [],
      loading: {
        cow: true,
        milk: true,
        reproduct: true,
        birth: true,
        heal: true,
        protection: true,
        food: true,
        notification: true,
      },
      alert: "",
      newCow: false,
      status: status("create"),
      qualityMilk: quality("create"),
      milkDatas: [
        {
          label: "วันที่รีดนม",
          class: "text-center",
          type: "date",
          value: "date",
        },
        {
          label: "เช้า (กก.)",
          class: "text-center",
          value: "mQty",
        },
        {
          label: "บ่าย (กก.)",
          class: "text-center",
          value: "aQty",
        },
        {
          label: "รวม (กก.)",
          class: "text-center",
          func: (obj) => {
            return obj.mQty + obj.aQty;
          },
        },
        {
          label: "คิดเป็นเงิน",
          class: "text-right",
          type: "currency",
          value: "amount",
        },
      ],
      reproductDatas: [
        {
          label: "ครั้งที่",
          class: "text-center",
          value: "seq",
        },
        {
          label: "วันที่เข้าระบบสืบพันธุ์",
          class: "text-center",
          value: "loginDate",
          type: "date",
        },
        {
          label: "ผล",
          func: (obj) => {
            return reproductResult()[obj.result].label;
          },
        },
        {
          label: "วันที่เป็นสัด",
          class: "text-center",
          value: "estrusDate",
          type: "date",
        },
        {
          label: "วันที่ผสมพันธุ์",
          class: "text-center",
          value: "matingDate",
          type: "date",
        },
        {
          label: "วันที่ตรวจท้อง",
          class: "text-center",
          value: "checkDate",
          type: "date",
        },
        {
          label: "พ่อพันธุ์",
          value: "dad",
        },
        {
          label: "สถานะ",
          func: (obj) => {
            return reproductStatus()[obj.status].label;
          },
        },
        {
          label: "วิธีรักษา",
          value: "howTo",
        },
      ],
      birthDatas: [
        {
          label: "ครั้งที่",
          value: "seq",
          class: "text-center",
        },
        {
          label: "วันที่ตั้งครรภ์",
          class: "text-center",
          value: "pregnantDate",
          type: "date",
        },
        {
          label: "อายุครรภ์",
          func: (obj) => {
            return this.calAge(obj?.pregnantDate);
          },
        },
        {
          label: "วันที่คลอด",
          class: "text-center",
          value: "birthDate",
          type: "date",
        },
        {
          label: "เพศ",
          class: "text-center",
          func: (obj) => {
            return sex()[obj.sex];
          },
        },
        {
          label: "ลูกวัว",
          class: "text-center",
          func: (obj) => {
            return obj.calf ? obj.calf?.code + " : " + obj.calf?.name : "";
          },
        },
        {
          label: "รกค้าง",
          class: "text-center",
          func: (obj) => {
            return overgrown()[obj.overgrown];
          },
        },
        {
          label: "วันที่ใช้ยาขับ",
          class: "text-center",
          value: "drugDate",
          type: "date",
        },
        {
          label: "วันที่ล้างมดลูก",
          class: "text-center",
          value: "washDate",
          type: "date",
        },
      ],
      protectionDatas: [
        {
          label: "ยา/วัคซีน",
          value: "vaccine.name",
        },
        {
          label: "ครั้งที่",
          class: "text-center",
          value: "seq",
        },
        {
          label: "ให้ยาล่าสุด",
          class: "text-center",
          value: "vaccine.currentDate",
          type: "date",
        },
        {
          label: "จำนวนเงิน",
          class: "text-right",
          value: "amount",
          type: "currency",
        },
        {
          label: "ให้ยาครั้งต่อไป",
          class: "text-center",
          value: "vaccine.nextDate",
          type: "date",
        },
      ],
      notificationDatas: [
        {
          label: "รายการ",
          value: "name",
        },
        {
          label: "ก่อน",
          class: "text-center",
          value: "before",
        },
        {
          label: "มีผล",
          class: "text-center",
          value: "date",
        },
        {
          label: "หลัง",
          class: "text-center",
          value: "after",
        },
        {
          label: "แจ้งเตือน",
          class: "text-center",
          value: "alert",
          type: "icon",
        },
      ],
      healDatas: [
        {
          label: "ครั้งที่",
          value: "seq",
          class: "text-center",
        },
        {
          label: "วันที่รักษา",
          class: "text-center",
          value: "date",
          type: "date",
        },
        {
          label: "อาการ/โรค",
          class: "text-center",
          value: "disease",
        },
        {
          label: "วิธีการรักษา",
          class: "text-center",
          value: "method",
        },
        {
          label: "คนรักษา",
          class: "text-center",
          value: "healer",
        },
        {
          label: "ค่ารักษา",
          class: "text-center",
          value: "amount",
        },
      ],
      foodDatas: [
        {
          label: "ปี",
          value: "year",
        },
        {
          label: "เดือน",
          value: "month",
        },
        {
          label: "เฉลี่ยกิน/วัน (กก.)",
          class: "text-center",
          value: "qty",
          func: (obj) => {
            const sumQty = obj.foodDetails.reduce((sum, item) => sum + item.qty, 0) 
            return (sumQty / obj.numCow).toFixed(2);
          },
        },
        {
          label: "คิดเป็นเงิน/วัน",
          class: "text-right",
          value: "amount",
          func: (obj) => {
            const sumAmount = obj.foodDetails.reduce((sum, item) => sum + item.amount, 0) 
            return  (sumAmount / obj.numCow).toFixed(2);
          },
        },
        {
          label: "เฉลี่ยกิน/เดือน (กก.)",
          class: "text-center",
          value: "qty",
          func: (obj) => {
            const days = new Date(obj.year,obj.month,0).getDate();
            const sumQty = obj.foodDetails.reduce((sum, item) => sum + item.qty, 0) * days
            return (sumQty / obj.numCow).toFixed(2);
          },
        },
        {
          label: "คิดเป็นเงิน/เดือน",
          class: "text-right",
          value: "amount",
          func: (obj) => {
            const days = new Date(obj.year,obj.month,0).getDate();
            const sumAmount = obj.foodDetails.reduce((sum, item) => sum + item.amount, 0) * days
            return (sumAmount / obj.numCow).toFixed(2);
          },
        },
      ],
    };
  },

  components: {
    SectionMain,
    LayoutAuthenticated,
    BaseButton,
    BaseIcon,
    BaseButtons,
    CardBox,
    FormControl,
    FormField,
    UserAvatar,
    BaseLevel,
    ImageUpload,
    Table,
    CardBoxCollapse,
  },
  computed: {
    canRemove() {
      if (
        this.milks.length == 0 &&
        this.reproducts.length == 0 &&
        this.births.length == 0
      ) {
        return true;
      } else {
        return false;
      }
    },
    user() {
      return this.$store.state.auth.user;
    },
    milk() {
      let count = 0;
      let totalM = 0;
      let totalA = 0;
      this.historyMilks = [];
      Object.keys(this.milks).forEach((key) => {
        let milks = this.milks[key];
        let historyMilk = {};
        let mQty = 0;
        let aQty = 0;
        let amount = 0;

        milks.map((m) => {
          m.milkDetails.map((d) => {
            if (m.time === "M") {
              totalM += d.qty;
              mQty += d.qty;
            } else {
              totalA += d.qty;
              aQty += d.qty;
            }
            amount += d.amount;
          });

          if (m.milkDetails.length > 0) {
            count += m.milkDetails.length;

            historyMilk.date = m.date;
            historyMilk.mQty = mQty;
            historyMilk.aQty = aQty;
            historyMilk.amount = amount;
          }
        });
        if (Object.keys(historyMilk).length !== 0) {
          this.historyMilks.push(historyMilk);
        }
      });
      this.historyMilks = _.orderBy(this.historyMilks, "date", "desc");
      let avgTotal = (totalM + totalA) / count;
      let avgMorning = totalM / count;
      let avgAfternoon = totalA / count;
      return {
        avgTotal: (count > 0 ? avgTotal : 0).toFixed(2),
        avgMorning: (count > 0 ? avgMorning : 0).toFixed(2),
        avgAfternoon: (count > 0 ? avgAfternoon : 0).toFixed(2),
        all: (totalM + totalA).toFixed(2),
      };
    },
  },
  created() {
    const cowId = this.$route.params.id;
    this.getCowData(cowId);
  },
  methods: {
    async getCow(id) {
      this.loading.cow = true;
      const resp = await CowService.get(id);
      if (resp.data) {
        this.cow = resp.data.cow;
        this.cow.birthDate = new Date(this.cow.birthDate);
        this.loading.cow = false;
      }
    },
    async getCowData(id) {
      this.loading.cow = true;
      const resp = await CowService.get(id);

      if (resp.data) {
        this.cow = resp.data.cow;
        this.quality = resp.data.quality;
        this.cow.birthDate = new Date(this.cow.birthDate);
        this.loading.cow = false;

        this.loading.reproduct = true;
        const reproductResp = await ReproductService.all({ cow: id });
        if (reproductResp.data) {
          this.reproducts = reproductResp.data.reproducts;
        }
        this.loading.reproduct = false;

        this.loading.birth = true;
        const birthResp = await BirthService.all({ cow: id, status: "B" });
        if (birthResp) {
          this.births = birthResp.data.births;
        }
        this.loading.birth = false;

        this.loading.heal = true;
        const healResp = await HealService.all({ cow: id });
        if (healResp) {
          this.heals = healResp.data.heals;
        }
        this.loading.heal = false;

        this.loading.protection = true;
        const protectionResp = await ProtectionService.all({ cows: id });
        if (protectionResp) {
          const groupVacs = _.groupBy(
            protectionResp.data.protections,
            "vaccine._id"
          );
          for (let vac of Object.keys(groupVacs)) {
            const vacs = groupVacs[vac];
            const sortedVacs = _.orderBy(vacs, "seq", "desc");
            if (sortedVacs.length > 0) {
              this.protections.push(sortedVacs[0]);
            }
          }
        }
        this.loading.protection = false;

        this.loading.food = true;
        const foodResp = await FoodService.all({ corral: this.cow.corral });
        if (foodResp) {
          this.foods = foodResp.data.foods;
        }
        this.loading.food = false;

        this.loading.milk = true;
        const milkResp = await MilkService.get({ cow: id });

        if (milkResp.data) {
          for (let milk of milkResp.data.milks) {
            milk.groupKey = moment(milk.date, "YYYY-MM-DD").format("YYYYMMDD");
          }
          this.milks = _.groupBy(milkResp.data.milks, "groupKey");
        }
        this.loading.milk = false;

        const notiResp = await NotificationService.getCalendar({ cow: id });
        if (notiResp.data) {
          const groupCode = _.groupBy(notiResp.data.events, "code");
          const today = moment(new Date()).startOf("day");
          let notifications = [];
          for (let code of Object.keys(groupCode)) {
            const notis = groupCode[code];
            let name = "";
            let date = null;
            let before = null;
            let after = null;
            let dueDate = null;

            for (let noti of notis) {
              if (noti.period == "today") {
                name = noti.name;
                date = moment(noti.time.start).format("DD/MM/YYYY");
                dueDate = moment(noti.time.start).startOf("day");
              } else if (noti.period == "before") {
                before = moment(noti.time.start).format("DD/MM/YYYY");
              } else if (noti.period == "after") {
                after = moment(noti.time.start).format("DD/MM/YYYY");
              }
            }

            notifications.push({
              name: name,
              date: date,
              dueDate: dueDate,
              before: before,
              after: after,
              alert: today.isAfter(dueDate)
                ? "bellCheckOutline"
                : "bellAlertOutline",
            });
          }
          this.notifications = _.orderBy(notifications, "dueDate", "desc");
        }
      }
    },
    async update() {
      this.loading.cow = true;
      this.alert = "";
      try {
        const resp = await CowService.update(this.cow._id, this.cow);
        if (resp) {
          this.getCow(this.$route.params.id);
          Toast.fire({
            icon: "success",
            title: "บันทึกข้อมูลสำเร็จ",
          });
        }
      } catch (error) {
        console.error("Error : ", error);
        this.loading = false;
        this.alert = error.response.data.message;
        Toast.fire({
          icon: "error",
          title: "บันทึกข้อมูลไม่สำเร็จ",
        });
      }
    },
    reproduct() {
      let now = moment();

      let countLogin =
        this.reproducts.length > 0 ? this.reproducts.length : "-";
      let lastDateLogin =
        this.reproducts.length > 0
          ? this.formatDate(this.reproducts[0].loginDate)
          : "-";
      let result =
        this.reproducts.length > 0
          ? reproductResult()[this.reproducts[0].result].label
          : "-";

      let countEstrus = 0,
        countMating = 0,
        countCheck = 0;
      let lastEstrus = "-",
        lastMating = "-",
        lastCheck = "-";

      for (let rpd of this.reproducts) {
        if (rpd.estrusDate != null && moment(rpd.estrusDate) <= now) {
          countEstrus++;
          lastEstrus = this.formatDate(rpd.estrusDate);
        }

        if (rpd.matingDate != null && moment(rpd.matingDate) <= now) {
          countMating++;
          lastMating = this.formatDate(rpd.matingDate);
        }

        if (rpd.checkDate != null && moment(rpd.checkDate) <= now) {
          countCheck++;
          lastCheck = this.formatDate(rpd.checkDate);
        }
      }

      return {
        login: {
          count: countLogin,
          lastDate: lastDateLogin,
          result: result,
        },
        estrus: {
          count: countEstrus > 0 ? countEstrus : "-",
          lastDate: lastEstrus,
        },
        mating: {
          count: countMating > 0 ? countMating : "-",
          lastDate: lastMating,
        },
        check: {
          count: countCheck > 0 ? countCheck : "-",
          lastDate: lastCheck,
        },
      };
    },
    birth() {
      return {
        count: this.births.length > 0 ? this.births.length : "-",
        lastDate:
          this.births.length > 0
            ? this.formatDate(this.births[0].birthDate)
            : "-",
        countMale:
          this.births.length > 0
            ? this.births.filter((b) => b.sex === "M").length
            : "-",
        countFemale:
          this.births.length > 0
            ? this.births.filter((b) => b.sex === "F").length
            : "-",
      };
    },
    heal() {
      let count = this.heals.length > 0 ? this.heals.length : "-";
      let lastDate =
        this.heals.length > 0 ? this.formatDate(this.heals[0].date) : "-";
      let lastDisease = this.heals.length > 0 ? this.heals[0].disease : "-";
      let lastMethod =
        this.heals.length > 0 && this.heals[0].method
          ? this.heals[0].method
          : "-";

      return { count, lastDate, lastDisease, lastMethod };
    },
    filterColor(){
      const grade = this.quality?.grade
      if(grade === 'A+'){
        return { grade : 'text-lime-500 h-28 w-28',profit : 'text-lime-500'}
      }else if(grade === 'A'){
        return { grade : 'text-green-500 h-20 w-20',profit : 'text-green-500'}
      }else if(grade === 'B'){
        return { grade : ' h-20 w-20',profit : ''}
      }else if(grade === 'C'){
        return { grade : 'text-orange-500 h-20 w-20',profit : 'text-orange-500'}
      }else if(grade === 'D'){
        return { grade : 'text-red-500 h-20 w-20',profit : 'text-red-500 '}
      }
    },
    filterText(){
      const grade = this.quality?.grade
      if(grade === 'A+'){
        return { percent : '(กำไรมากกว่า 80%)'}
      }else if(grade === 'A'){
        return { percent : '(กำไร 51% - 80%)'}
      }else if(grade === 'B'){
        return { percent : '(กำไร 31% - 50%)'}
      }else if(grade === 'C'){
        return { percent : '(กำไร 0% - 30%)'}
      }else if(grade === 'D'){
        return { percent : '(กำไรน้อยกว่า 0%)'}
      }
    },
    formatDate(date) {
      if (!date) {
        return "";
      }
      return moment(new Date(date)).format("DD/MM/YYYY");
    },
    calAge(bdDate) {
      return getAge(bdDate);
    },
  },
};
</script>
