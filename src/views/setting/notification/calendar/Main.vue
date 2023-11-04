<template>
    <LayoutAuthenticated>
      <SectionMain>
        <div v-if="!user?.farm?.lineToken && !loading">
            <SectionTitle class="text-2xl">
                เชื่อมต่อ LINE Notify เพื่อรับการแจ้งเตือน
            </SectionTitle>
            <div class="text-lg"> 
                <div class="py-2 px-5">
                    1. เพิ่มเพื่อน <span class="text-green-500 font-bold">LINE Notify</span> ใน <span class="text-green-300 font-bold">LINE</span> 
                </div>
                <div class="py-2 px-5">
                    2. กดปุ่ม <u class="text-blue-400">เชื่อมต่อ LINE</u> ด้านล่าง เพื่อเชื่อมต่อการแจ้งเตือนเข้า LINE
                </div>
                <div class="py-2 px-5">   
                    3. เลือกกลุ่มที่มีอยู่แล้วหรือสร้างกลุ่มใหม่หรือเลือกส่งหาตัวเองใน <span class="text-green-300 font-bold">LINE</span> 
                </div>
                <div class="py-2 px-5">
                    4. เชิญ <span class="text-green-500 font-bold">LINE Notify</span> เข้ากลุ่มที่ได้เลือกไว้
                </div>
                <div class="py-2 px-5">
                    5. เมื่อเชื่อมต่อสำเร็จระบบจะส่งข้อความเข้ากลุ่มใน <span class="text-green-300 font-bold">LINE</span> ว่า 
                    <i class="font-light">`` เชื่อมต่อสำเร็จ ``</i>
                </div> 
                <div class="py-2 px-5">
                    6. กลับมาที่ระบบแล้วรีเฟรชอีกครั้ง
                </div>
            </div>
            
            <BaseButtons type="justify-center" class="mt-3">
                <BaseButton icon="connection" class="bg-gradient-to-r from-emerald-500 to-lime-600" label="เชื่อมต่อ LINE" target="_blank" :href="urlAuth"/>
            </BaseButtons>
        </div>
        <CardBox
            v-else-if="user?.farm?.lineToken && !loading"
            title="ตารางกำหนดการแจ้งเตือน"
            header-icon=""
            >
            <Calendar :events="events" />                
        </CardBox>
        <CardBox v-else loading />

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

import _ from "lodash"

import NotificationService from '@/services/notification'
import AuthService from '@/services/auth'
        
export default {
    data() {
        return {
            loading : false,
            events : [],
            user : {},
            urlAuth : 'https://notify-bot.line.me/oauth/authorize?response_type=code&client_id='+import.meta.env.VITE_LINE_CLIENT_ID+'&redirect_uri='+import.meta.env.VITE_API_ENGINE_URL+'/line/redirect&scope=notify&state='
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
        Calendar,
    },
    created(){
        this.getUser()
        this.getNotificationCalendar()
    },
    methods : {
        async getNotificationCalendar(){
            this.loading = true;
            const resp = await NotificationService.getCalendar();
            if(resp.data){
                this.events = _.orderBy(resp.data.events,'date')
                this.loading = false;
            }
        },
        async getUser(){
            const resp = await AuthService.user();
            if(resp.data){
                this.user = resp.data.user
                this.urlAuth += this.user.username
            }
        }
    }

}
</script>
