<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import AuthService from '@/services/auth'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import FooterBar from '@/components/FooterBar.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import NotificationBarInCard from '@/components/NotificationBarInCard.vue'
import { ref } from '@vue/reactivity'

const form = reactive({
  login: 'admin',
  pass: 'P@ssw0rd',
  remember: ['remember']
})

const loading = ref(false);

const alert = reactive({
  message: '',
})

const router = useRouter()

const submit = () => {
  loading.value = true;
  alert.message = ''
  AuthService.login({username:form.login,password:form.pass})
    .then((res) => {
      router.push("/dashboard")
      loading.value = false;
    })
    .catch((error) => {
      alert.message = error.response.data.message
      loading.value = false;
    })
}
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen
      v-slot="{ cardClass }"
      bg="login"
    >
      <CardBox
        :class="cardClass"
        form
        title=""
        header-icon=""
        @submit.prevent="submit"
      >
      

        <BaseLevel type="justify-center">
          <UserAvatar avatar="image/cow-logo.jpg" class="w-28" />
        </BaseLevel>

        <SectionTitle>
          ระบบจัดการฟาร์มโคนม
        </SectionTitle>

        <BaseLevel type="justify-center" class="text-sm">
          ยังไม่มีบัญชี ? <a href="/register" class="ml-1 text-blue-500"><u>สร้างบัญชี</u></a>
        </BaseLevel>
        
        <FormField
          label="ชื่อผู้ใช้"
          help="กรุณากรอกชื่อผู้ใช้"
        >
          <FormControl
            v-model="form.login"
            icon="account"
            name="login"
            autocomplete="username"
          />
        </FormField>

        <FormField
          label="รหัสผ่าน"
          help="กรุณากรอกรหัสผ่าน"
        >
          <FormControl
            v-model="form.pass"
            icon="asterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <BaseLevel>
          <FormCheckRadioPicker
            v-model="form.remember"
            name="remember"
            :options="{ remember: 'จดจำการเข้าใช้งาน' }"
          />
          <a href="/register" class="text-sm text-gray-600"><u>ลืมรหัสผ่าน ?</u></a>
        </BaseLevel>
        

        <NotificationBar 
          v-if="alert.message" 
          color="danger" 
          outline
          icon="alertCircleOutline">
            {{ alert.message }}
        </NotificationBar>

        <BaseDivider />

        <BaseButtons
          type="justify-center"
        >
          <BaseButton
            type="submit"
            color="info"
            label="เข้าสู่ระบบ"
            :loading="loading"
            :disabled="loading"
          />
        </BaseButtons>

      </CardBox>

      <FooterBar/>

    </SectionFullScreen>
  </LayoutGuest>
</template>
