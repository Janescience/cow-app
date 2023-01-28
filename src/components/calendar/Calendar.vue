<template>
    <div ref="calendarContainer" class="min-h-full min-w-full text-gray-300 ">
      <div class="w-full grid grid-cols-7 ">
        <Top />

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
          class="h-16 md:h-36 w-full opacity-50 border-t border-gray-600 align-top "
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
          class="h-16 md:h-36 w-full border-t border-gray-600 align-top "
        >
          <div
            class="w-full h-full text-xs md:text-sm lg:text-base text-center transition-colors p-3 "
            :class="{
              'bg-slate-300 text-gray-900 font-medium  ': isToday(day),
              'hover:bg-gray-100 hover:text-gray-700': !isToday(day),
            }"
          >
            {{ day }}
  
            <div
              v-show="maxThreeTodaysEvent(day, events).length"
              v-for="evt in maxThreeTodaysEvent(day, events)"
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
              v-if="allTodaysEvent(day, events).length > 3"
              class="hidden md:flex mt-2 w-full px-2 py-1 space-x-2 items-center whitespace-nowrap overflow-hidden hover:text-gray-800 hover:font-medium cursor-pointer rounded-sm"
              @click="openModal(day, allTodaysEvent(day, events))"
            >
              <div class="w-1/12 mr-1">
                <BaseIcon path="plus"/>
              </div>
              <div class="w-11/12">
                <h6
                  class="text-xs tracking-tight text-clip text-left overflow-hidden"
                >
                  {{ " มีอีก "+ (allTodaysEvent(day, events).length - 3) + " รายการ" }}
                </h6>
              </div>
            </div>
  
            <div
              v-if="allTodaysEvent(day, events).length > 0"
              class="flex md:hidden h-2/3 w-full justify-center items-center"
              @click="openModal(day, allTodaysEvent(day, events))"
            >
              <div
                class="h-6 w-6 flex justify-center items-center text-xs bg-orange-600 rounded-full shadow-sm"
              >
                <h3 class="font-medium text-white">
                  {{ allTodaysEvent(day, events).length }}
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
      <BaseLevel type="justify-between w-full " class="md:hidden">
            <BaseIcon 
                path="chevronLeft" 
                size="30" 
                class="cursor-pointer hover:text-gray-300"
                @click="calendarStore.decrementMonth(1)"
            />
            <BaseIcon 
                path="chevronRight" 
                size="30" 
                class="cursor-pointer hover:text-gray-300"
                @click="calendarStore.incrementMonth(1)"
            />
        </BaseLevel>
    </div>
  
    <!-- use the modal component -->
    <!-- <transition name="modal"> -->
      <Modal
        v-model="modalShow"
        @close-modal="closeModal"
        @toggle-popover="togglePopover"
        :day="modalDay"
        :month="calendarStore.getMonth"
        :year="calendarStore.getYear"
        :events="modalEvents"
      />
    <!-- </transition> -->
  
    <!-- popover component  -->
    <div
      ref="popoverRef"
      :class="{ hidden: !popoverShow, block: popoverShow }"
      class="bg-gray-100 mb-3 block z-50 max-w-xs rounded-lg shadow-md"
    >
      <slot
        name="eventDialog"
        :eventDialogData="todaysEvent"
        :closeEventDialog="togglePopover"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUpdated } from "vue";
  import Top from "@/components/calendar/Top.vue";
  import Modal from "@/components/calendar/EventsModal.vue";
  import BaseIcon from "@/components/BaseIcon.vue";
  import BaseLevel from "@/components/BaseLevel.vue";
  import { useCalendarStore } from "@/store/calendar";
  import { usePopover } from "@/composables/popover";
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
  const modalDay = ref(0);
  const popoverRef = ref(null);
  const modalEvents = ref([]);
  // popover composable
  const { popoverShow, todaysEvent, togglePopover } = usePopover(popoverRef);
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
    let totalGrid = firstDayOfCurrentMonth.value <= 5 ? 35 : 42;
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
  const isEventToday = (day, startdate,isPrevMonth) => {
    if (
      calendarStore.getYear == startdate.substring(0, 4) &&
      calendarStore.getMonth + (isPrevMonth ? 0 : 1) == startdate.substring(5, 7) &&
      day == startdate.substring(8, 10)
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
      if (threeTodaysEventArr.length == 3) return threeTodaysEventArr;
      if (isEventToday(day, event.time.start,isPrevMonth)) {
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
  const allTodaysEvent = (day, events, isPrevMonth) => {
    if (!events.length) return [];
    let todaysEvent = [];
    events.forEach((event) => {
      if (isEventToday(day, event.time.start,isPrevMonth)) {
        todaysEvent.push(event);
      }
    });
    return todaysEvent;
  };
  /**
   * Open the event details modal
   *
   * @param {number} day current calendar month day
   * @param {array} events Array of events objects to show on the modal
   *
   * @return null
   */
  const openModal = (day, events) => {
    popoverShow.value = false; // close any open popover before opening modal
    modalEvents.value = events;
    modalDay.value = day;
    modalShow.value = true;
  };
  /**
   * Close the event details modal
   */
  const closeModal = () => {
    modalEvents.value = [];
    modalShow.value = false;
    modalDay.value = 0;
  };
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
  
  <style scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: translate 0.5s ease;
  }
  .modal-enter-from,
  .modal-leave-to {
    /** opacity: 0; **/
    translate: 0px 100%;
  }
  </style>