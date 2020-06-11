import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCryptojs from 'vue-cryptojs'

Vue.use(VueCryptojs)

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueParticles from 'vue-particles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCogs, faMicrochip, faBriefcase,
  faRobot, faFlask, faBuilding, faMedkit,
  faMapMarker, faClock, faMoneyCheck,
  faCaretRight, faVideo
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
library.add(faVideo)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(VueParticles)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

// Vuex
Vue.use(Vuex)

// Vue axios
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
  // mounted() {
  //   console.log(this)
  //   this.$rsa.generateKeys(1024)
  // }
}).$mount('#app')
