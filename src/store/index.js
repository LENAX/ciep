import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import user from './modules/user'
import registrationForm from './modules/registrationForm'
import loginForm from './modules/loginForm'

import createLogger from 'vuex/dist/logger'

import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ encodingType: 'aes', isCompression: false });

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    user,
    registrationForm,
    loginForm
  },
  strict: debug,
  plugins: debug ? [
    createLogger(),
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ] : [
      createPersistedState({
        storage: {
          getItem: (key) => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: (key) => ls.remove(key),
        },
      }),
    ]
})
