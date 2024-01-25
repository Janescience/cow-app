<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useStyleStore } from '@/store/theme/style.js'
import { useLayoutStore } from '@/store/theme/layout.js'
import NavBarItem from '@/components/NavBarItem.vue'
import NavBarItemLabel from '@/components/NavBarItemLabel.vue'
import NavBarMenu from '@/components/NavBarMenu.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import UserAvatarCurrentUser from '@/components/UserAvatarCurrentUser.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import CardBoxModal from '@/components/CardBoxModal.vue'

import TokenService from '@/services/token'

const router = useRouter()
const store = useStore()

const farmName = computed(() => TokenService.getUser()?.farm?.name)
const farmCode = computed(() => TokenService.getUser()?.farm?.code)

const styleStore = useStyleStore()

const toggleLightDark = () => {
  styleStore.setDarkMode()
}

const layoutStore = useLayoutStore()

const isAsideMobileExpanded = computed(() => layoutStore.isAsideMobileExpanded)

const menuToggleMobileIcon = computed(() => isAsideMobileExpanded.value ? 'backburger' : 'forwardburger')

const menuToggleMobile = () => layoutStore.asideMobileToggle()

const isMenuNavBarActive = ref(false)

const menuNavBarToggleIcon = computed(() => isMenuNavBarActive.value ? 'close' : 'dotsVertical')

const menuNavBarToggle = () => {
  isMenuNavBarActive.value = !isMenuNavBarActive.value
}

const menuOpenLg = () => {
  layoutStore.asideLgToggle(true)
}

const modalConfirm = ref(false)

const showModal = () => {
  modalConfirm.value = true
}
const logout = () => {
  store.dispatch('auth/logout');
  router.push("/login")
}
</script>

<template>
  <nav
    class="lg:top-0 bottom-0 left-0 right-0 fixed flex bg-gray-100 text-black h-12 border-b shadow-lg border-gray-100 z-30 w-screen
    transition-position xl:pl-64 lg:w-auto lg:items-stretch dark:bg-gray-900 dark:border-gray-800"
    :class="{'ml-64 lg:ml-0':isAsideMobileExpanded}"
  >
    <div class="flex-1 items-stretch flex">
      <NavBarItem
        type="flex lg:hidden"
        @click.prevent="menuToggleMobile"
      >
        <BaseIcon
          :path="menuToggleMobileIcon"
          size="24"
        />
      </NavBarItem>
      <NavBarItem
        type="hidden lg:flex xl:hidden"
        @click.prevent="menuOpenLg"
      >
        <BaseIcon
          path="menu"
          size="24"
        />
      </NavBarItem>
      <!-- <NavBarItem>
        <BaseIcon
          path="calendarOutline"
        />
        {{ moment(new Date()).format('DD/MM/YYYY') }}
      </NavBarItem> -->
    </div>
    <div class="flex-none items-stretch flex h-14 lg:hidden">
      <NavBarItem @click.prevent="menuNavBarToggle">
        <BaseIcon
          :path="menuNavBarToggleIcon"
          size="24"
        />
      </NavBarItem>
    </div>
    <div
      class="absolute w-screen lg:top-14 bottom-14 left-0 
        lg:w-auto lg:items-stretch lg:flex lg:grow lg:static lg:border-b-0 lg:overflow-visible dark:bg-gray-900"
      :class="[isMenuNavBarActive ? 'block' : 'hidden']"
    >
      <div
        class="max-h-screen-menu overflow-y-auto lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto"
      >
        <!-- <div class="hidden lg:flex items-center">
          <a
            class="inline-flex items-center justify-center lg:mr-3 bg-blue-300 hover:bg-blue-400 transition-colors py-1 px-4 text-blue-700 hover:text-blue-800 text-sm rounded-full"
            target="_blank"
            href="https://tailwind-vue.justboil.me/"
          >
            <span class="mr-1">Check premium</span>
            <BaseIcon
              :path="mdiOpenInNew"
              w="w-4"
              h="h-4"
            />
          </a>
        </div> -->
        <!-- <NavBarItem
          class="lg:hidden" 
          target="_blank"
          href="https://tailwind-vue.justboil.me/"
        >
          <NavBarItemLabel
            :icon="mdiMonitorShimmer"
            label="Premium version"
          />
        </NavBarItem> -->
        <!-- <NavBarMenu has-divider>
          <NavBarItemLabel
            :icon="mdiMenu"
            label="Sample menu"
          />

          <template #dropdown>
            <NavBarItem>
              <NavBarItemLabel
                :icon="mdiClockOutline"
                label="Item One"
              />
            </NavBarItem>
            <NavBarItem>
              <NavBarItemLabel
                :icon="mdiCloud"
                label="Item Two"
              />
            </NavBarItem>
            <BaseDivider nav-bar />
            <NavBarItem>
              <NavBarItemLabel
                :icon="mdiCrop"
                label="Item Last"
              />
            </NavBarItem>
          </template>
        </NavBarMenu> -->
        <NavBarMenu has-divider>
          <NavBarItemLabel :label="farmName">
            <UserAvatarCurrentUser :username="farmCode" avatar="/image/profile.png" class="w-6 h-6 mr-3 inline-flex" />
          </NavBarItemLabel>

          <template #dropdown>
            <!-- <NavBarItem to="/profile">
              <NavBarItemLabel
                icon="account"
                label="ข้อมูลส่วนตัว"
              />
            </NavBarItem>
            <NavBarItem>
              <NavBarItemLabel
                icon="cogOutline"
                label="ตั้งค่า"
              />
            </NavBarItem>
            <BaseDivider nav-bar /> -->
            <NavBarItem
              @click="showModal"
            >  
              <NavBarItemLabel
                icon="logout"
                label="ออกจากระบบ"
              />
            </NavBarItem>
          </template>
        </NavBarMenu>
        <NavBarItem
          has-divider
          is-desktop-icon-only
          @click.prevent="toggleLightDark"
        >
          <NavBarItemLabel
            icon="themeLightDark"
            label="Light/Dark"
            is-desktop-icon-only
          />
        </NavBarItem>
        <!-- <NavBarItem
          href="https://github.com/justboil/admin-one-vue-tailwind"
          has-divider
          is-desktop-icon-only
        >
          <NavBarItemLabel
            :icon="mdiGithub"
            label="GitHub"
            is-desktop-icon-only
          />
        </NavBarItem> -->
        <!-- <NavBarItem
          is-desktop-icon-only
          @click="logout"
        >
          <NavBarItemLabel
            icon="logout"
            label="Log out"
            is-desktop-icon-only
          />
        </NavBarItem> -->
      </div>
    </div>
  </nav>
  <CardBoxModal
        v-model="modalConfirm"
        title="ยืนยันอีกครั้ง"
        button-label="ยืนยัน"
        @confirm="logout"
        has-cancel
        has-button
      >
      <p>ต้องการออกจากระบบใช่หรือไม่ ?</p>
  </CardBoxModal>
</template>
