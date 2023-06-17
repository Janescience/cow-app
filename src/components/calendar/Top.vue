<template>
    <div class="col-span-7">
      <div class="w-full flex justify-between items-center">
        <!-- Current month and year -->
        <div class="w-1/3 p-2 md:p-4">
          <div
            class="w-full inline-flex space-x-1 text-lg text-left md:font-semibold"
          >
            <!-- <span class="md:hidden">{{ shortMonthStr }}</span -->
            <span >{{ monthStr }}</span
            ><span>{{ calendarStore.getYear +543 }}</span>
          </div>
        </div>
        <!-- -------------------------- -->
  
        <!-- Naviigation -->
        <div
          class="hidden md:flex w-1/3 items-center justify-center text-gray-400"
        >
          <div class="flex space-x-3 items-center">
            <BaseIcon 
                path="chevronLeft" 
                size="38" 
                class="cursor-pointer hover:text-gray-300"
                @click="prevMonth()"
            />
            <BaseIcon 
                path="chevronRight" 
                size="38" 
                class="cursor-pointer hover:text-gray-300"
                @click="nextMonth()"
            />
          </div>
        </div>
  
        <!-- Date picker and date view -->
        <div class="w-2/3 md:w-1/3 flex justify-end">
          <div class="flex  space-x-2 md:space-x-5">
            <Datepicker
                locale="th"
                v-model="date"
                auto-apply
                close-on-scroll
                @update:modelValue="handleDate"
            >
              <template #trigger >
                <BaseButton
                icon="calendar"
                label=""
            />
                <!-- <BaseIcon path="calendar" size="26" class="space-x-1 md:space-x-2 justify-around  items-center cursor-pointer py-2"/> -->
              </template>
            </Datepicker>
  
            <BaseButton
                label="วันนี้"
                small
                @click="resetDate()"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted,defineEmits} from "vue";
  import { useCalendarStore } from "@/store/calendar";
  import BaseIcon from "@/components/BaseIcon.vue";
  import BaseButton from "@/components/BaseButton.vue";
  import Datepicker from "@vuepic/vue-datepicker";
  import "@vuepic/vue-datepicker/dist/main.css";

  const emit = defineEmits(['month','year'])

  // Store initialization and subscription
  const calendarStore = useCalendarStore();
  calendarStore.$subscribe((mutation, state) => {
    prepareMonths();
    initializeDatePicker();
  });
  // Component variables
  const date = ref(); // for datepicker
  const monthStr = ref("");
  const shortMonthStr = ref("");
  /**
   * Populate the month variable with month data from store
   */
  const prepareMonths = () => {
    monthStr.value = new Intl.DateTimeFormat("th-TH", { month: "long" }).format(
      new Date(
        calendarStore.getYear,
        calendarStore.getMonth,
        calendarStore.getDay
      )
    );
    shortMonthStr.value = monthStr.value.substring(0, 3);
  };
  /**
   * Initiializes the datepicker with data gotten from store
   */
  const initializeDatePicker = () => {
    date.value = new Date(
      calendarStore.getYear,
      calendarStore.getMonth,
      calendarStore.getDay
    );
  };
  /**
   * Change date from the datepicker
   * @param {Date} modelData The selected date from the datepicker
   */
  const handleDate = (modelData) => {
    date.value = modelData;
    calendarStore.setMonth(date.value.getMonth());
    calendarStore.setYear(date.value.getFullYear());
    // do something else with the data
    emitDateDetail();
  };

  const prevMonth = () => {
    calendarStore.decrementMonth(1)
    emitDateDetail();
  }
  
  const nextMonth = () => {
    calendarStore.incrementMonth(1)
    emitDateDetail();
  }

  const resetDate = () =>{
    calendarStore.resetDate();
    emitDateDetail();
  }

  const emitDateDetail = () => {
    emit('month',calendarStore.getMonth+1)
    emit('year',calendarStore.getYear)
  }


  /************************************************************************
   *  LIFECYCLE HOOKS
   * **********************************************************************
   */
  onMounted(() => {
    prepareMonths();
    initializeDatePicker();
  });
  </script>
