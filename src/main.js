import { createApp } from 'vue'
import { createPinia } from 'pinia'

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import App from './App.vue'
import router from './router'
import store from './store'
import { useStyleStore } from '@/store/theme/style.js'
import { useLayoutStore } from '@/store/theme/layout.js'
import { darkModeKey, styleKey } from '@/config.js'

import vSelect from "vue-select";
import Datepicker from '@vuepic/vue-datepicker';
import Loading from 'vue-loading-overlay';

import 'vue-loading-overlay/dist/vue-loading.css';
import '@vuepic/vue-datepicker/dist/main.css'
import './css/main.css'
import "vue-select/dist/vue-select.css";

import setupInterceptors from '@/services/setupInterceptors';
setupInterceptors(store);

/* Init Pinia */
const pinia = createPinia()

const filter = {
  currency(value) {
    if (typeof value !== "number") {
      return value;
    }
    var formatter = new Intl.NumberFormat('en-US', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2, 
    });
    return formatter.format(value);
  }
}

/* Create Vue app */
const app = createApp(App)
app.use(router)
app.use(store)
app.use(pinia)
app.use(mdiVue,{icons:mdijs})
app.use(Loading,{
  loader: 'dots',
  color: '#FFFFFF',
  backgroundColor : '#0A1128',
  opacity: 0.9,
  zIndex : 100}
)
app.component("v-select", vSelect)
app.component('Datepicker', Datepicker)
app.config.globalProperties.$filters = filter
app.mount('#app')

/* Init Pinia stores */
const styleStore = useStyleStore(pinia)
const layoutStore = useLayoutStore(pinia)


/* App style */
styleStore.setStyle(localStorage[styleKey] ?? 'basic')

/* Dark mode */
if ((!localStorage[darkModeKey] && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage[darkModeKey] === '1') {
  styleStore.setDarkMode(true)
}

/* Default title tag */
const defaultDocumentTitle = 'Dairy Farm'

/* Collapse mobile aside menu on route change */
router.beforeEach(() => {
  layoutStore.asideMobileToggle(false)
  layoutStore.asideLgToggle(false)
})

router.afterEach(to => {
  /* Set document title from route meta */
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle
})
