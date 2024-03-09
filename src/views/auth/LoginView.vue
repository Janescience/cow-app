<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import { ref } from '@vue/reactivity'

const form = reactive({
  login: '',
  pass: '',
  remember: ['remember']
})

const loading = ref(false);


const alert = reactive({
  message: '',
})

const router = useRouter()
const store = useStore()

const submit = () => {
  loading.value = true;
  alert.message = ''
  store.dispatch('auth/login',{username:form.login,password:form.pass})
    .then((res) => {
      router.push("/overview/farm")
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
        class="w-11/12 md:w-7/12 lg:w-6/12 xl:w-3/12 shadow-2xl p-2"
        form
        title=""
        header-icon=""
        @submit.prevent="submit"
      >
      

        <BaseLevel type="justify-center">
          <UserAvatar avatar="/image/cow-logo.jpg" class="w-28" username="logo"/>
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
            required
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
            required
            autocomplete="current-password"
          />
        </FormField>
        
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

    </SectionFullScreen>
  </LayoutGuest>
</template>
