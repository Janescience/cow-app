<template>
    <div ref="calendarContainer" class="min-h-full min-w-full text-gray-300 ">
      <div class="w-full grid grid-cols-7 ">
        <Top @month="getMonth" @year="getYear"/>

        <!-- Days list -->
        <div
          v-for="day in daysOfTheWeek"
          :key="day"
          class="text-center text-sm md:text-base lg:text- font-medium border-b mt-3 border-gray-600"
        >
          {{ day }}
        </div>
  
        <!-- Days in prev month -->
        <div
          v-show="firstDayOfCurrentMonth > 0"
          v-for="day in firstDayOfCurrentMonth"
          :key="day"
          class="h-26 md:h-36 w-full opacity-50 border-t border-gray-600 align-top "
        >
        <div
            class="w-full h-full text-xs md:text-sm lg:text-base text-center transition-colors p-3 "
            :class="{
              'bg-slate-300 text-gray-900 font-medium  ': isToday(day),
              'hover:bg-gray-100 hover:text-gray-700': !isToday(day),
            }"
          >
            {{ daysInPrevMonth - (firstDayOfCurrentMonth - day) }}
  
            <div
              v-show="maxThreeTodaysEvent(daysInPrevMonth - (firstDayOfCurrentMonth - day), events,true).length"
              v-for="evt in maxThreeTodaysEvent(daysInPrevMonth - (firstDayOfCurrentMonth - day), events,true)"
              :key="evt.title"
              class="hidden md:block"
            >
              <div
                class="w-full px-2 py-1 flex space-x-1 items-center whitespace-nowrap overflow-hidden hover:border hover:border-gray-200 cursor-pointer rounded-lg"
                @click="togglePopover($event, evt)"
              >
                <div class="w-1/12">
                  <div class="h-2 w-2 rounded-full bg-orange-600"></div>
                </div>
                <div class="w-11/12">
                  <h5 class="text-xs tracking-tight text-clip overflow-hidden">
                    {{ evt.title }}
                  </h5>
                </div>
              </div>
            </div>
  
            <div
              v-if="allTodaysEvent(daysInPrevMonth - (firstDayOfCurrentMonth - day), events, true).length > 3"
              class="hidden md:flex mt-2 w-full px-2 py-1 space-x-2 items-center whitespace-nowrap overflow-hidden hover:text-gray-800 hover:font-medium cursor-pointer rounded-sm"
              @click="openModal(daysInPrevMonth - (firstDayOfCurrentMonth - day), allTodaysEvent(daysInPrevMonth - (firstDayOfCurrentMonth - day), events, true))"
            >
              <div class="w-1/12 mr-1">
                <BaseIcon path="plus"/>
              </div>
              <div class="w-11/12">
                <h6
                  class="text-xs tracking-tight text-clip text-left overflow-hidden"
                >
                  {{ " มีอีก "+ (allTodaysEvent(daysInPrevMonth - (firstDayOfCurrentMonth - day), events, true).length - 3) + " รายการ" }}
                </h6>
              </div>
            </div>
  
            <div
              v-if="allTodaysEvent(daysInPrevMonth - (firstDayOfCurrentMonth - day), events, true).length > 0"
              class="flex md:hidden h-2/3 w-full justify-center items-center"
              @click="openModal(daysInPrevMonth - (firstDayOfCurrentMonth - day), allTodaysEvent(daysInPrevMonth - (firstDayOfCurrentMonth - day), events, true))"
            >
              <div
                class="h-6 w-6 flex justify-center items-center text-xs bg-orange-600 rounded-full shadow-sm"
              >
                <h3 class="font-medium text-white">
                  {{ allTodaysEvent(daysInPrevMonth - (firstDayOfCurrentMonth - day), events, true).length }}
                </h3>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Days in current month -->
        <div
          v-for="day in daysInCurrentMonth"
          :key="day"
          class="h-26 md:h-36 w-full border-t border-gray-600 align-top "
        >
          <div
            class="w-full h-full text-xs md:text-sm lg:text-base text-center transition-colors  p-2"
            :class="{
              'bg-gray-600 text-gray-900 font-medium  ': isToday(day),
              'hover:bg-gray-100 hover:text-gray-700': !isToday(day),
            }"
          >
            {{ day }}
            <div class="lg:mt-2">
              <div
                v-show="maxThreeTodaysEvent(day, events).length > 0"
                v-for="evt in maxThreeTodaysEvent(day, events)"
                :key="evt.date"
                class="hidden md:block p-1"
              >
                <div
                  class="w-full  flex p-1 shadow-lg border border-gray-800 shadow cursor-pointer rounded-md"
                  @click="openModal(day, allTodaysEvent(day, events,false,evt.time),evt.time,evt.id)"
                >
                  
                    <p class="text-sm  text-clip overflow-hidden items-center ">
                      <BaseIcon 
                        :path="evt.time === 'M' ? 'clockTimeSevenOutline' : 'clockTimeThreeOutline'"
                        :class="evt.time === 'M' ? 'text-yellow-400' : 'text-orange-500'"
                        />
                      {{ evt.time == 'M' ? 'เช้า' : 'บ่าย' }} - {{ evt.sumQty }} กก.
                    </p>

                </div>
              </div>
            </div>

            
            

            <div
              v-show="maxThreeTodaysEvent(day, events).length < 2"
            >
              <div
                class="w-full lg:mt-2 text-center items-center overflow-hidden hover:border hover:border-gray-200 cursor-pointer rounded-lg"
                @click="openModal(day, allTodaysEvent(day, events))"
              >
                <div class="opacity-40">
                  <BaseIcon  path="plus"/><p class="hidden md:block"> รีดนม</p>
                </div>
              </div>
            </div>

            <!-- Mobile -->
            <div
              v-for="evt in maxThreeTodaysEvent(day, events)"
              :key="evt.date"
              class="flex md:hidden mt-1 w-full justify-center items-center "
              @click="openCardBox(day, events)"
            >
              <div
                class="h-6 w-6 flex justify-center items-center text-xs rounded shadow-sm"
                :class="[evt.time === 'M'?'bg-yellow-400':'bg-orange-500']"
              >
                <h3 class="font-medium text-black">
                  {{ evt.sumQty }}
                </h3>
              </div>
            </div>
          </div>
        </div>
  
        <div
          v-show="lastEmptyCells > 0"
          v-for="day in lastEmptyCells"
          :key="day"
          class="h-16 md:h-36 w-full  opacity-50"
        ></div>
  
        
      </div>
      <!-- mobile navigation -->
      <BaseLevel type="justify-between w-full mt-2" class="md:hidden">
          <BaseIcon 
              path="chevronLeft" 
              size="30" 
              class="cursor-pointer hover:text-gray-300"
              @click="prevMonth()"
          />
          <BaseIcon 
              path="chevronRight" 
              size="30" 
              class="cursor-pointer hover:text-gray-300"
              @click="nextMonth()"
          />
      </BaseLevel>

      <BaseDivider/>

        <div class="md:hidden" v-if="cardBoxShow">
          รายการรีดนม  {{ cardBoxDay }}/{{calendarStore.getMonth+1}}/{{calendarStore.getYear+543}}
          <div
            v-show="cardBoxData.length > 0"
            v-for="evt in cardBoxData"
            :key="evt.date"
          >
            <div
              class="w-full text-left flex overflow-hidden p-2 mt-2 border border-gray-800 shadow cursor-pointer rounded-md"
              @click="openModal(cardBoxDay, allTodaysEvent(cardBoxDay, events,false,evt.time),evt.time,evt.id)"
            >
              
                <p class="text-sm  text-clip overflow-hidden">
                  รอบ {{ evt.time == 'M' ? 'เช้า' : 'บ่าย' }} 
                
                  น้ำนมดิบ {{ evt.sumQty }} กก.
                
                  รีดแล้ว {{ evt.count }} ตัว
                </p>

            </div>
          </div>
        </div>

    </div>

    <Modal
      v-model="modalShow"
      :mode="mode" 
      :data="data" 
      @confirm="confirm" 
    />
  
  </template>
  
  <script setup>
  import { ref, onMounted, onUpdated ,defineEmits} from "vue";
  import Top from "@/components/calendar/Top.vue";
  import BaseIcon from "@/components/BaseIcon.vue";
  import BaseLevel from "@/components/BaseLevel.vue";
  import BaseDivider from "@/components/BaseDivider.vue";
  import CardBox from "@/components/CardBox.vue";
  import Modal from './Modal.vue';
  import { useCalendarStore } from "@/store/calendar";

  const emit = defineEmits(['confirm','month','year'])

  /**************************************
   * PROPS
   * ************************************
   */
  const props = defineProps({
    events: {
      type: Object,
      required: true,
    },
  });
  // Store initialization and subscription
  const calendarStore = useCalendarStore();
  calendarStore.$subscribe((mutation, state) => {
    getDaysInMonth();
    getFirstDayOfMonth();
  });

  emit('month',calendarStore.getMonth+1)
  emit('year',calendarStore.getYear)
  
  // component variables
  const daysOfTheWeek = {
    1: "อา",
    2: "จ.",
    3: "อ.",
    4: "พ.",
    5: "พฤ",
    6: "ศ.",
    7: "ส.",
  };
  const daysInCurrentMonth = ref(0);
  const daysInPrevMonth = ref(0);
  const firstDayOfCurrentMonth = ref(0);
  const lastEmptyCells = ref(0);
  const modalShow = ref(false);
  const cardBoxShow = ref(false);
  const cardBoxData = ref([]);
  const cardBoxDay = ref("");
  const mode = ref("create");
  const data = ref({});
  /**
   * Gets the number of days present in a month
   * The month is gotten from the calendar store
   */
  const getDaysInMonth = () => {
    daysInCurrentMonth.value = new Date(
      calendarStore.getYear,
      calendarStore.getMonth + 1, // 👈️ months are 0-based
      0
    ).getDate();
  };
  /**
   * Gets in number, the first day of a month
   * The month is gottenn from the calendar store
   */
  const getFirstDayOfMonth = () => {
    firstDayOfCurrentMonth.value = new Date(
      calendarStore.getYear,
      calendarStore.getMonth,
      1
    ).getDay();
  };

  const getDaysInPrevMonth = () => {
    daysInPrevMonth.value = new Date(
      calendarStore.getYear,
      calendarStore.getMonth,
      0
    ).getDate();
  }
  /**
   * Gets the last empty cells (if any) on the calendar grid
   */
  const lastCalendarCells = () => {
    let totalGrid = firstDayOfCurrentMonth.value <= 4 ? 35 : 42;
    lastEmptyCells.value =
      totalGrid - daysInCurrentMonth.value - firstDayOfCurrentMonth.value;
  };
  /**
   * Validates a day to check if it's today or not
   *
   * @param {number} day The day to validate
   * @return boolean True or false if it's today or not
   */
  const isToday = (day) => {
    let today = new Date();
    if (
      calendarStore.getYear == today.getFullYear() &&
      calendarStore.getMonth == today.getMonth() &&
      day == today.getDate()
    )
      return true;
    return false;
  };
  /**
   * Validates a day to check if event start date is current calendar date or not
   *
   * @param {number} day The calendar month date to check against
   * @param {string} startdate The event start date
   * @return boolean True or false if event is today or not
   */
  const isEventTodayWithTime = (day, date,isPrevMonth,time,curTime) => {
    if (
      calendarStore.getYear == date.substring(4, 8) &&
      calendarStore.getMonth + (isPrevMonth ? 0 : 1) == date.substring(2, 4) &&
      day == date.substring(0, 2) && time == curTime
    )
      return true;
    return false;
  };

  const isEventToday = (day, date,isPrevMonth) => {
    if (
      calendarStore.getYear == date.substring(4, 8) &&
      calendarStore.getMonth + (isPrevMonth ? 0 : 1) == date.substring(2, 4) &&
      day == date.substring(0, 2)
    )
      return true;
    return false;
  };
  /**
   * Gets at most, 3 calendar events on a given day
   * This events are displayed on the calendar grid (>= Large screens)
   *
   * @param {number} day calendar month day whose event(s) we're getting
   * @param {array} events Array of events objects to filter through
   *
   * @return array Array of the filtered day's event(s)
   */
   const maxThreeTodaysEvent = (day, events ,isPrevMonth) => {
    if (!events.length) return [];
    let threeTodaysEventArr = [];
    events.forEach((event) => {
      if (isEventTodayWithTime(day, event.date,isPrevMonth)) {
        threeTodaysEventArr.push(event);
      }
    });
    return threeTodaysEventArr;
  };
  /**
   * Gets all the calendar events on a given day
   *
   * @param {number} day calendar month day whose event(s) we're getting
   * @param {array} events Array of events objects to filter through
   *
   * @return array Array of the filtered day's event(s)
   */
  const allTodaysEvent = (day, events, isPrevMonth,time) => {
    if (!events.length) return [];
    let todaysEvent = [];
    events.forEach((event) => {
      if (isEventTodayWithTime(day, event.date,isPrevMonth,event.time,time)) {
        todaysEvent = event.milks ;
      }
    });
    return todaysEvent;
  };

  const allTodaysQty = (day, events, isPrevMonth) => {
    if (!events.length) return 0;
    let todaysQty = 0;
    events.forEach((event) => {
      if (isEventToday(day, event.date,isPrevMonth)) {
        todaysQty += event.sumQty ;
      }
    });
    return todaysQty;
  };
  /**
   * Open the event details modal
   *
   * @param {number} day current calendar month day
   * @param {array} events Array of events objects to show on the modal
   *
   * @return null
   */
  const openModal = (day, events,time,id) => {
    mode.value = time ? 'edit' : 'create';
    let date = calendarStore.getYear + "-" + (calendarStore.getMonth+1) + "-" + day
    data.value = { _id : id, date : date  ,time: (time ? time :null),milkDetails : events};
    modalShow.value = true;
  };

  const openCardBox = (day,events) => {
    const list = maxThreeTodaysEvent(day, events)
    cardBoxData.value = list;
    cardBoxDay.value = day;
    cardBoxShow.value = true;
  }
  /**
   * Close the event details modal
   */
  const closeModal = () => {
    modalShow.value = false;
  };
  const confirm = (data) => {
    emit('confirm',data)
  };
  const prevMonth = () => {
    calendarStore.decrementMonth(1)
    emit('month',calendarStore.getMonth+1)
    emit('year',calendarStore.getYear)
  }

  const nextMonth = () => {
    calendarStore.incrementMonth(1)
    emit('month',calendarStore.getMonth+1)
    emit('year',calendarStore.getYear)
  }

  const getMonth = (data) => {
    emit('month',data)
  }

  const getYear = (data) => {
    emit('year',data)
  }

  /************************************************************************
   *  LIFECYCLE HOOKS
   * **********************************************************************
   */
  onMounted(() => {
    getDaysInMonth();
    getFirstDayOfMonth();
    getDaysInPrevMonth();
    lastCalendarCells();
  });
  onUpdated(() => {
    getFirstDayOfMonth();
    getDaysInPrevMonth();
    lastCalendarCells();
  });
</script>
