<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleBarSub icon="chartPie" title="กิจกรรมต่างๆที่ต้องทำ" />
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 gap-1 mb-1 lg:mb-5">
        <CardBox icon="formatListChecks" title="ตั้งค่าเริ่มต้น" header-icon="" class=" row-span-2" :loading="loading.todolist">
          <div v-if="Object.keys(todolist?.setting).length > 0" class="mb-5">
            <div class="p-2" v-for="key in Object.keys(todolist?.setting)" :key="todolist.setting[key]">
              - <a v-for="todo in todolist.setting[key]" :key="todo" :href="todo.href" :class="todo.href?'text-blue-500 underline':''">{{  todo.text }}</a>
            </div>
          </div>
        </CardBox>
        <CardBox icon="formatListChecks" title="ข้อมูลที่ควรบันทึก" header-icon="" class=" row-span-2" :loading="loading.todolist">
          <div v-if="Object.keys(todolist?.important).length > 0" class="mb-5">
            <div class="p-2" v-for="key in Object.keys(todolist?.important)" :key="todolist.important[key]">
              - <a v-for="todo in todolist.important[key]" :key="todo" :href="todo.href" :class="todo.href?'text-blue-500 underline':(todo.remark?'text-gray-500 text-xs':'')">{{  todo.text }}</a>
            </div>
          </div>
        </CardBox>
        <CardBox icon="formatListChecks" title="รายวัน" header-icon="" class=" row-span-2" :loading="loading.todolist">
          <div v-if="Object.keys(todolist.dairy).length > 0" class="mb-5">
            <div class="p-2" v-for="key in Object.keys(todolist?.dairy)" :key="todolist.dairy[key]">
              - <a v-for="todo in todolist.dairy[key]" :key="todo" :href="todo.href" :class="todo.href?'text-blue-500 underline':''">{{  todo.text }}</a>
            </div>
          </div>
        </CardBox>
        <CardBox icon="formatListChecks" title="รายเดือน" header-icon="" class=" row-span-2" :loading="loading.todolist">
          <div v-if="Object.keys(todolist.monthly).length > 0" class="mb-5">
            <div class="p-2" v-for="key in Object.keys(todolist?.monthly)" :key="todolist.monthly[key]">
              - <a v-for="todo in todolist.monthly[key]" :key="todo" :href="todo.href" :class="todo.href?'text-blue-500 underline':''">{{  todo.text }}</a>
            </div>
          </div>
        </CardBox>
        <CardBox icon="formatListChecks" title="ครบกำหนดวันนี้" header-icon="" class=" row-span-2" :loading="loading.todolist">
          <div v-if="Object.keys(todolist.notification).length > 0" class="mb-5">
            <div class="p-2" v-for="key in Object.keys(todolist?.notification)" :key="todolist.notification[key]">
              - <a v-for="todo in todolist.notification[key]" :key="todo" :href="todo.href" :class="todo.href?'text-blue-500 underline':''">{{  todo.text }}</a>
            </div>
          </div>
        </CardBox>

        <Table 
          title="กำหนดการแจ้งเตือน" 
          icon="calendarBadgeOutline" 
          :items="events" 
          :datas="eventColumns" 
          perPage="5"
          :loading="loading.events" 
        />
      </div>
      
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script >

import SectionMain from "@/components/SectionMain.vue";
import SectionTitleBar from "@/components/SectionTitleBar.vue";
import CardBox from "@/components/CardBox.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import Table from "@/components/Table.vue";

import DashboardService from "@/services/dashboard";
import moment from "moment";
import _ from "lodash";

export default {
  data() {
    return {
      lineChartColors: { primary: "#00D1B2", danger: "#FF3860" },
      events: [],
      todolist: {
        setting:{},
        important:{},
        dairy:{},
        monthly:{},
        notification:{},
      },
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
      loading: {
        events: true,
        todolist: true,
      },
    };
  },
  components: {
    SectionMain,
    SectionTitleBar,
    CardBox,
    SectionTitleBarSub,
    LayoutAuthenticated,
    BaseDivider,
    Table,
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  created() {
    this.getTodoList();
    this.getEvents();
  },
  methods: {
    
    async getTodoList() {
      this.loading.todolist = true;
      const resp = await DashboardService.getTodoList();
      if (resp) {
        this.todolist = resp.data;
      }
      this.loading.todolist = false;
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
    formatDate(date) {
      if (!date) {
        return "";
      }
      return moment(new Date(date)).format("DD/MM/YYYY");
    },
  },
};
</script>


