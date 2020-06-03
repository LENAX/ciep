import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCogs, faMicrochip, faBriefcase,
  faRobot, faFlask, faBuilding, faMedkit,
  faMapMarker, faClock, faMoneyCheck,
  faCaretRight
} from '@fortawesome/free-solid-svg-icons'

library.add(faCogs)
library.add(faCaretRight)
library.add(faMapMarker)
library.add(faClock)
library.add(faMoneyCheck)
library.add(faMicrochip)
library.add(faRobot)
library.add(faFlask)
library.add(faBuilding)
library.add(faMedkit)
library.add(faBriefcase)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
