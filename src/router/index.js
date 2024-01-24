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
    meta: {
      title: 'สร้างบัญชี'
    },
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/RegisterView.vue')
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
      title: 'ประวัติการแจ้งเตือน',
      loginRequired : true
    },
    path: '/setting/notification/log',
    name: 'notification-logs',
    component: () => import('@/views/setting/notification/log/Main.vue')
  },
  {
    meta: {
      title: 'ปฏิทินกำหนดการ',
      loginRequired : true
    },
    path: '/setting/notification/calendar',
    name: 'notification-calendar',
    component: () => import('@/views/setting/notification/calendar/Main.vue')
  },
  {
    meta: {
      title: 'ตั้งค่าแจ้งเตือน',
      loginRequired : true
    },
    path: '/setting/notification/parameter',
    name: 'notification-parameter',
    component: () => import('@/views/setting/notification/parameter/Main.vue')
  },
  {
    meta: {
      title: 'พารามิเตอร์',
      loginRequired : true
    },
    path: '/setting/parameter',
    name: 'parameter',
    component: () => import('@/views/setting/parameter/Main.vue')
  },
  {
    meta: {
      title: 'โค',
      loginRequired : true
    },
    path: '/manage/cow',
    name: 'cow',
    component: () => import('@/views/manage/cow/Main.vue')
  },
  {
    meta: {
      title: 'รายละเอียดโค',
      loginRequired : true
    },
    path: '/manage/cow/detail/:id',
    name: 'cowDetail',
    component: () => import('@/views/manage/cow/Detail.vue')
  },
  {
    meta: {
      title: 'น้ำนมดิบ (การรีดนม)',
      loginRequired : true
    },
    path: '/manage/milk',
    name: 'milk',
    component: () => import('@/views/manage/milk/Main.vue')
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
      title: 'คนงาน',
      loginRequired : true
    },
    path: '/manage/worker',
    name: 'worker',
    component: () => import('@/views/manage/worker/Main.vue')
  },
  {
    meta: {
      title: 'เงินเดือน',
      loginRequired : true
    },
    path: '/manage/worker/salary/:id',
    name: 'salary',
    component: () => import('@/views/manage/worker/salary/Main.vue')
  },
  {
    meta: {
      title: 'อุปกรณ์',
      loginRequired : true
    },
    path: '/manage/equipment',
    name: 'equipment',
    component: () => import('@/views/manage/equipment/Main.vue')
  },
  {
    meta: {
      title: 'สิ่งปลูกสร้าง',
      loginRequired : true
    },
    path: '/manage/building',
    name: 'building',
    component: () => import('@/views/manage/building/Main.vue')
  },
  {
    meta: {
      title: 'การซ่อมบำรุง',
      loginRequired : true
    },
    path: '/manage/maintenance',
    name: 'maintenance',
    component: () => import('@/views/manage/maintenance/Main.vue')
  },
  {
    meta: {
      title: 'ค่าใช้จ่ายเพิ่มเติม',
      loginRequired : true
    },
    path: '/manage/bill',
    name: 'bill',
    component: () => import('@/views/manage/bill/Main.vue')
  },
  {
    meta: {
      title: 'วัคซีน',
      loginRequired : true
    },
    path: '/manage/vaccine',
    name: 'vaccine',
    component: () => import('@/views/manage/vaccine/Main.vue')
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
      title: 'รายละเอียดการป้องกัน/บำรุง',
      loginRequired : true
    },
    path: '/manage/protection/detail/:id',
    name: 'protectionDetail',
    component: () => import('@/views/manage/protection/Detail.vue')
  },
  {
    meta: {
      title: 'การให้อาหาร',
      loginRequired : true
    },
    path: '/manage/food',
    name: 'food',
    component: () => import('@/views/manage/food/Main.vue')
  },
  {
    meta: {
      title: 'รายละเอียดการให้อาหาร',
      loginRequired : true
    },
    path: '/manage/food/detail/:corral',
    name: 'foodDetail',
    component: () => import('@/views/manage/food/Detail.vue')
  },
  {
    meta: {
      title: 'สูตรอาหาร',
      loginRequired : true
    },
    path: '/manage/recipe',
    name: 'recipe',
    component: () => import('@/views/manage/recipe/Main.vue')
  },
  {
    meta: {
      title: 'รายงานประวัติต่างๆ',
      loginRequired : true
    },
    path: '/report/history',
    name: 'report-history',
    component: () => import('@/views/report/history/Main.vue')
  },
  {
    meta: {
      title: 'รายงานน้ำนมดิบ',
      loginRequired : true
    },
    path: '/report/raw-milk',
    name: 'report-raw-milk',
    component: () => import('@/views/report/raw-milk/Main.vue')
  },
  {
    meta: {
      title: 'รายงานการสืบพันธุ์',
      loginRequired : true
    },
    path: '/report/reproduct',
    name: 'report-reproduct',
    component: () => import('@/views/report/reproduct/Main.vue')
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
