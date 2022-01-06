import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueParticles from 'vue-particles'

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import 'chartkick/highcharts'

createApp(App)
  .use(store)
  .use(router)
  .use(VueParticles)
  .use(VueChartkick)
  .mount('#app')
