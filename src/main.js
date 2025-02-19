import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import './styles/styles.css'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'
import VueApexCharts from "vue3-apexcharts";

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(Vuikit)
app.use(VueApexCharts)
app.use(VuikitIcons)

app.mount('#app')
