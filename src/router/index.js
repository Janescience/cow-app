import { createRouter, createWebHistory } from 'vue-router'
import Style from '@/views/StyleView.vue'
import Home from '@/views/HomeView.vue'
import AuthGuard from '@/utils/auth-guard'

const routes = [
  {
    meta: {
      title: 'เข้าสู่ระบบ'
    },
    path: '/',
    name: 'welcome',
    redirect: "/login",
    component: () => import('@/views/auth/LoginView.vue')
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'ภาพรวมฟาร์ม',
      loginRequired : true
    },
    path: '/dashboard',
    name: 'dashboard',
    component: Home
  },
  {
    meta: {
      title: 'การแจ้งเตือน',
      loginRequired : true
    },
    path: '/setting/notification',
    name: 'notification',
    component: () => import('@/views/setting/NotificationView.vue')
  },
  {
    meta: {
      title: 'โค',
      loginRequired : true
    },
    path: '/manage/cow',
    name: 'cow',
    component: () => import('@/views/manage/cow/CowSearchView.vue')
  },
  {
    meta: {
      title: 'น้ำนมดิบ (การรีดนม)',
      loginRequired : true
    },
    path: '/manage/milk',
    name: 'milk',
    component: () => import('@/views/manage/milk/MilkSearchView.vue')
  },
  {
    meta: {
      title: 'การสืบพันธุ์/ผสมพันธุ์',
      loginRequired : true
    },
    path: '/manage/reproduct',
    name: 'reproduct',
    component: () => import('@/views/manage/reproduct/Main.vue')
  },
  {
    meta: {
      title: 'การคลอดลูก',
      loginRequired : true
    },
    path: '/manage/birth',
    name: 'birth',
    component: () => import('@/views/manage/birth/Main.vue')
  },
  {
    meta: {
      title: 'การรักษา',
      loginRequired : true
    },
    path: '/manage/heal',
    name: 'heal',
    component: () => import('@/views/manage/heal/Main.vue')
  },
  {
    meta: {
      title: 'การป้องกัน/บำรุง',
      loginRequired : true
    },
    path: '/manage/protection',
    name: 'protection',
    component: () => import('@/views/manage/protection/Main.vue')
  },
  {
    meta: {
      title: 'Tables',
      loginRequired : true
    },
    path: '/tables',
    name: 'tables',
    component: () => import('@/views/TablesView.vue')
  },
  {
    meta: {
      title: 'Forms',
      loginRequired : true
    },
    path: '/forms',
    name: 'forms',
    component: () => import('@/views/FormsView.vue')
  },
  {
    meta: {
      title: 'Profile',
      loginRequired : true
    },
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/ui',
    name: 'ui',
    component: () => import('@/views/UiView.vue')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/responsive',
    name: 'responsive',
    component: () => import('@/views/ResponsiveView.vue')
  },
  {
    meta: {
      title: 'เข้าสู่ระบบ'
    },
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue')
  },
  {
    meta: {
      title: 'Error'
    },
    path: '/error',
    name: 'error',
    component: () => import('@/views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach(AuthGuard)

export default router
