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
            <BaseButtons type="justify-center" class="mt-3">
                <BaseButton icon="send" class="bg-gradient-to-r from-emerald-500 to-lime-600" label="ทดสอบการแจ้งเตือน" @click="notify('ทดสอบการแจ้งเตือน')"/>
            </BaseButtons>
        </div>
      </SectionMain>
    </LayoutAuthenticated>
</template>

<script >
import SectionMain from '@/components/SectionMain.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import { getCurrentUser } from '@/utils'
import SectionTitle from '@/components/SectionTitle.vue'
import BaseLevel from '@/components/BaseLevel.vue'

import LineService from '@/services/line'
        
export default {

    data(){
        return {
            user : getCurrentUser(),
        }
    },

    components : {
    SectionMain,
    BaseButton,
    LayoutAuthenticated,
    BaseButtons,
    BaseButton,
    SectionTitle,
    BaseLevel
},
    computed:{
        urlAuth(){
            const clientId = import.meta.env.VITE_LINE_CLIENT_ID
            const engine = import.meta.env.VITE_API_ENGINE_URL
            const username = this.user.username
            return `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${engine}/line/redirect&scope=notify&state=${username}`
        }
    },
    methods : {
        notify(message){
            LineService.notify({message : message, lineToken : this.user.farm.lineToken , farm : this.user.farm._id })
        }
    }

}
</script>