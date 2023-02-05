<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import AuthService from '@/services/auth'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import CardBoxModal from '@/components/CardBoxModal.vue'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import SectionTitleBar from '@/components/SectionTitleBar.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import NotificationBarInCard from '@/components/NotificationBarInCard.vue'
import { ref,computed } from '@vue/reactivity'

const form = reactive({
  username: '',
  password: '',
  farmName: ''
})

const loading = ref(false);
const loginConfirm = ref(false);

const alert = reactive({
  message: '',
})

const router = useRouter()
const store = useStore()

const submit = async () => {
  alert.message = ''
  const resp = await AuthService.register(form);
  if(resp.data){
    loginConfirm.value = true
  }
}

const login = () => {
  loading.value = true;
  alert.message = ''
  store.dispatch('auth/login',{username:form.username,password:form.password})
    .then((res) => {
      router.push("/dashboard")
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
          <UserAvatar avatar="/image/cow-logo.jpg" class="w-28" />
        </BaseLevel>

        <SectionTitle>
          ระบบจัดการฟาร์มโคนม
        </SectionTitle>

        <BaseLevel type="justify-center" class="text-lg">
          สร้างบัญชี
        </BaseLevel>

        <BaseLevel type="justify-center" class="text-sm">
          มีบัญชีแล้ว ? <a href="/login" class="ml-1 text-blue-500"><u>เข้าสู่ระบบ</u></a>
        </BaseLevel>
        
        <FormField
          label="ชื่อผู้ใช้"
          help="* ห้ามว่าง"
        >
          <FormControl
            v-model="form.username"
            icon="account"
            name="login"
            required
            autocomplete="username"
          />
        </FormField>

        <FormField
          label="รหัสผ่าน"
          help="* ห้ามว่าง"
        >
          <FormControl
            v-model="form.password"
            icon="asterisk"
            type="password"
            name="password"
            required
            autocomplete="current-password"
          />
        </FormField>

        <FormField
          label="ชื่อฟาร์ม"
          help="* ห้ามว่าง"
        >
          <FormControl
            v-model="form.farmName"
            icon="barn"
            required
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
            label="สร้างบัญชี"
            :loading="loading"
            :disabled="loading"
          />
        </BaseButtons>

      </CardBox>
      <CardBoxModal
            v-model="loginConfirm"
            title="ยืนยันอีกครั้ง"
            button-label="ตกลง"
            @confirm="login"
            has-cancel
            has-button
            :loading="loading"
          >
          <p>สร้างบัญชีสำเร็จ ต้องการเข้าสู่ระบบหรือไม่ ? </p>
      </CardBoxModal>
    </SectionFullScreen>
  </LayoutGuest>
</template>
