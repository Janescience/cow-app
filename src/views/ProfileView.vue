<script setup>
import { ref, reactive } from 'vue'
import { mdiAccount, mdiAccountCircle, mdiLock, mdiMail, mdiAsterisk, mdiFormTextboxPassword } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import SectionTitleBar from '@/components/SectionTitleBar.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import FormFilePicker from '@/components/FormFilePicker.vue'
import BaseButton from '@/components/BaseButton.vue'
import SectionBottomOtherPages from '@/components/SectionBottomOtherPages.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'


const titleStack = ref(['Admin', 'Profile'])

const profileForm = reactive({
  name: '',
  email: ''
})

const passwordForm = reactive({
  password_current: '',
  password: '',
  password_confirmation: ''
})

const submitProfile = () => {
  mainStore.setUser(profileForm)
}

const submitPass = () => {
  //
}
</script>

<template>
  <LayoutAuthenticated>
    <SectionTitleBar :title-stack="titleStack" />


    <SectionMain>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CardBox
          title="Edit Profile"
          icon="accountCircle"
          form
          @submit.prevent="submitProfile"
        >
          <FormField
            label="Avatar"
            help="Max 500kb"
          >
            <FormFilePicker />
          </FormField>

          <FormField
            label="Name"
            help="Required. Your name"
          >
            <FormControl
              v-model="profileForm.name"
              icon="account"
              name="username"
              required
              autocomplete="username"
            />
          </FormField>
          <FormField
            label="E-mail"
            help="Required. Your e-mail"
          >
            <FormControl
              v-model="profileForm.email"
              icon="mail"
              type="email"
              name="email"
              required
              autocomplete="email"
            />
          </FormField>

          <BaseDivider />

          <BaseButtons>
            <BaseButton
              color="info"
              type="submit"
              label="Submit"
            />
            <BaseButton
              color="info"
              label="Options"
              outline
            />
          </BaseButtons>
        </CardBox>

        <CardBox
          title="Change Password"
          icon="lock"
          form
          @submit.prevent="submitPass"
        >
          <FormField
            label="Current password"
            help="Required. Your current password"
          >
            <FormControl
              v-model="passwordForm.password_current"
              icon="asterisk"
              name="password_current"
              type="password"
              required
              autocomplete="current-password"
            />
          </FormField>

          <BaseDivider />

          <FormField
            label="New password"
            help="Required. New password"
          >
            <FormControl
              v-model="passwordForm.password"
              icon="formTextboxPassword"
              name="password"
              type="password"
              required
              autocomplete="new-password"
            />
          </FormField>

          <FormField
            label="Confirm password"
            help="Required. New password one more time"
          >
            <FormControl
              v-model="passwordForm.password_confirmation"
              icon="formTextboxPassword"
              name="password_confirmation"
              type="password"
              required
              autocomplete="new-password"
            />
          </FormField>

          <BaseDivider />

          <BaseButtons>
            <BaseButton
              type="submit"
              color="info"
              label="Submit"
            />
            <BaseButton
              color="info"
              label="Options"
              outline
            />
          </BaseButtons>
        </CardBox>
      </div>
    </SectionMain>

    <SectionBottomOtherPages />
  </LayoutAuthenticated>
</template>
