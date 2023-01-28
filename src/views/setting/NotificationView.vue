<template>
    <LayoutAuthenticated>
      <SectionMain>
        <div v-if="user.farm.lineToken === ''">
            <SectionTitle class="text-2xl">
                เชื่อมต่อ LINE Notify เพื่อรับการแจ้งเตือน
            </SectionTitle>
            <div class="text-lg"> 
                <div class="py-2 px-5">
                    1. เพิ่มเพื่อน <span class="text-green-500 font-bold">LINE Notify</span>
                </div>
                <div class="py-2 px-5">
                    2. กดปุ่ม <u class="text-blue-400">เชื่อมต่อ LINE</u> ด้านล่าง เพื่อเชื่อมต่อการแจ้งเตือนเข้า LINE
                </div>
                <div class="py-2 px-5">   
                    3. เลือกกลุ่มหรือเลือกส่งหาตัวเองใน <span class="text-green-300 font-bold">LINE</span> 
                </div>
                <div class="py-2 px-5">
                    4. เมื่อเชื่อมต่อสำเร็จระบบจะส่งข้อความเข้ากลุ่มใน <span class="text-green-300 font-bold">LINE</span> นั้นว่า 
                    <i class="font-light">`` 'Cow-System' is now connected.Invite the account to ''Cow-System' to receive notifications. ``</i>
                </div> 
                <div class="py-2 px-5">
                    5. เชิญ <span class="text-green-500 font-bold">LINE Notify</span> เข้ากลุ่มที่ได้เลือกไว้
                </div>
                <div class="py-2 px-5">
                    6. กลับมาที่ระบบและเลือกเมนู 'ตั้งค่า > การแจ้งเตือน > กดปุ่ม "ทดสอบการแจ้งเตือน" (ถ้าปุ่มไม่แสดง Refresh หน้าจออีกครั้ง)'
                </div>
            </div>
            
            <BaseButtons type="justify-center" class="mt-3">
                <BaseButton icon="connection" class="bg-gradient-to-r from-emerald-500 to-lime-600" label="เชื่อมต่อ LINE" target="_blank" :href="urlAuth"/>
            </BaseButtons>
        </div>
        <div v-else>
            <BaseButtons type="justify-end" class="mb-2 p-2 lg:p-0">
                <BaseButton 
                    small
                    label="ทดสอบการแจ้งเตือน" 
                    @click="notify('ทดสอบการแจ้งเตือน')"
                    :loading="loading"
                    :disabled="loading"/>
            </BaseButtons>
        </div>
        <CardBox
            title="ตารางกำหนดการ"
            header-icon=""
            >
            <Calendar :events="events" >
                <template #eventDialog="props">
                    <div
                    v-if="props.eventDialogData && props.eventDialogData.title"
                    class="p-4 flex justify-center bg-gray-200 border border-gray-400 rounded-md"
                    >
                    <div>
                        <div
                        class="text-sm md:text-base font-bold text-gray-700 text-center"
                        >
                        {{ props.eventDialogData.title }}
                        </div>

                        <div class="mt-5">
                        <div class="text-xs text-gray-700 space-y-2">
                            <!-- your time -->
                            <h6 class="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span
                                ><span class="font-medium">Your Time: </span
                                >{{ props.eventDialogData.time.start }}
                            </span>
                            </h6>

                            <!-- their time -->
                            <h6 class="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span
                                ><span class="font-medium">Their Time: </span
                                >{{ props.eventDialogData.time.start }}
                            </span>
                            </h6>

                            <!-- tags -->
                            <h6 class="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                                />
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 6h.008v.008H6V6z"
                                />
                            </svg>
                            <span class="font-medium italic"
                                >{{ props.eventDialogData.tags }}
                            </span>
                            </h6>

                            <!-- Location -->
                            <h6 class="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                                />
                            </svg>

                            <span class="font-medium uppercase">{{
                                props.eventDialogData.location
                            }}</span>
                            </h6>
                        </div>

                        <div
                            v-if="props.eventDialogData.image != null"
                            class="w-full flex justify-center mt-5"
                        >
                            <img
                            :src="'../public/' + props.eventDialogData.image"
                            alt="launch image"
                            class="rounded-full h-36 w-36"
                            />
                        </div>

                        <div class="w-full text-xs font-medium text-gray-700 mt-5">
                            {{ props.eventDialogData.description }}
                        </div>

                        <div class="w-full flex justify-center mt-6">
                            <div class="w-full flex items-center justify-between">
                            <button
                                class="close-flyout flex items-center space-x-2 bg-gray-400 py-1 px-3 text-xs hover:text-sm rounded-md text-gray-700 transition-all"
                                @click="props.closeEventDialog"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                                </svg>
                                <span>close</span>
                            </button>
                            <a
                                :href="props.eventDialogData.url"
                                class="bg-purple-600 rounded-md py-1 md:py-2 px-5 hover:px-6 shadow-md hover:bg-purple-700 transition-all"
                            >
                                <span class="text-xs md:text-sm font-medium text-white"
                                >See more</span
                                >
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </template>
            </Calendar>
        </CardBox>
      </SectionMain>
    </LayoutAuthenticated>
</template>

<script >
import SectionMain from '@/components/SectionMain.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import CardBox from '@/components/CardBox.vue'
import Calendar from '@/components/calendar/Calendar.vue'

import { Toast } from "@/utils/alert";

import LineService from '@/services/line'
        
export default {
    data() {
        return {
            loading : false,
            events : [
                {
                    id: 1,
                    url: "https://github.com/dev-charles15531",
                    title: "Dummy Event Name 1",
                    time: { start: "2022-01-01 12:00", end: "2022-01-01 14:00" },
                    description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!",
                    image: "test-img.png",
                    tags: "#fun #nightout #dance #veterantime",
                    location: "At the base",
                },
                {
                    id: 2,
                    url: "https://github.com/dev-charles15531",
                    title: "Dummy Event Name 2",
                    time: { start: "2023-01-11 12:00", end: "2023-01-11 14:00" },
                    description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!",
                    image: "test-img.png",
                    tags: "#fun #nightout #dance #veterantime",
                    location: "At the base",
                },
                {
                    id: 3,
                    url: "https://github.com/dev-charles15531",
                    title: "Dummy Event Name 3",
                    time: { start: "2023-01-11 12:00", end: "2023-01-11 14:00" },
                    description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!",
                    image: "test-img.png",
                    tags: "#fun #nightout #dance #veterantime",
                    location: "At the base",
                },
                {
                    id: 4,
                    url: "https://github.com/dev-charles15531",
                    title: "Dummy Event Name 3",
                    time: { start: "2023-01-11 12:00", end: "2023-01-11 14:00" },
                    description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!",
                    image: "test-img.png",
                    tags: "#fun #nightout #dance #veterantime",
                    location: "At the base",
                },
                {
                    id: 5,
                    url: "https://github.com/dev-charles15531",
                    title: "Dummy Event Name 3",
                    time: { start: "2023-01-11 12:00", end: "2023-01-11 14:00" },
                    description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!",
                    image: "test-img.png",
                    tags: "#fun #nightout #dance #veterantime",
                    location: "At the base",
                },
                {
                    id: 6,
                    url: "https://github.com/dev-charles15531",
                    title: "Dummy Event Name 3",
                    time: { start: "2023-01-31 12:00", end: "2023-01-31 14:00" },
                    description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis. Deserunt excepturi illum nobis perferendis praesentium repudiandae saepe sapiente voluptatem!",
                    image: "test-img.png",
                    tags: "#fun #nightout #dance #veterantime",
                    location: "At the base",
                }
            ]
        }
    },
    components : {
        SectionMain,
        BaseButton,
        LayoutAuthenticated,
        BaseButtons,
        BaseButton,
        SectionTitle,
        BaseLevel,
        CardBox,
        Calendar
    },
    computed:{
        urlAuth(){
            const clientId = import.meta.env.VITE_LINE_CLIENT_ID
            const engine = import.meta.env.VITE_API_ENGINE_URL
            const username = this.user.username
            return `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${engine}/line/redirect&scope=notify&state=${username}`
        },
        user() {
            return this.$store.state.auth.user;
        }
    },
    methods : {
        async notify(message){
            this.loading = true
            try {
                const resp = await LineService.notify({message : message, lineToken : this.user.farm.lineToken , farm : this.user.farm._id });
                if(resp.data){
                    this.loading = false
                    Toast.fire({
                        icon: 'success',
                        title: 'แจ้งเตือนสำเร็จ'
                    })
                }
            } catch (error) {
                this.loading = false
                Toast.fire({
                    icon: 'error',
                    title: 'แจ้งเตือนไม่สำเร็จ'
                })
            }
        }
    }

}
</script>