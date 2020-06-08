const state = () => ({
  phone: '',
  password: '',
  loginState: false,
  loginAttempt: 0,
  loginStateMessage: '',
  loading: false,
})

// getters
const getters = {
  validPhone: (state, getters, rootState) => {
    const phone_pattern = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
    return phone_pattern.length === 0 || phone_pattern.test(state.phone)
  },
  validPassword: (state, getters, rootState) => {
    return state.loginAttempt === 0 && state.loginState
  },
  loginBtnText: (state, getters, rootState) => {
    return state.loginState ? '登录成功' : '登录'
  }
}

// mutations
const mutations = {
  setPhone(state, value) {
    state.phone = value
  },
  setPassword(state, value) {
    state.password = value
  },
  setLoginState(state, value) {
    state.loginState = value
  },
  setLoginAttempt(state, value) {
    state.loginAttempt = value
  },
  setLoginStateMessage(state, value) {
    state.loginStateMessage = value
  },
  setLoading(state, value) {
    state.loading = value
  }
}

// actions
const actions = {
  async submitLoginForm({ commit, state }) {
    try {
      commit('setLoading', true)
      const SERVER_ROOT = process.env.VUE_APP_TEST_SERVER_ROOT
      let response = await fetch(`/person/login`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          mobilePhone: state.phone,
          password: state.password
        })
      })
      commit('setLoading', false)
      let result = await response.json();
      console.log(result)
      if (result.status === 'success' &&
          result.data != null &&
          result.data.token.length > 0) {
        commit('auth/setAccessToken', result.data.token, { root: true })
        commit('auth/setLoginState', true, { root: true })
        commit('user/setUserAttributes', result.data.user, { root: true })
        commit('setLoginState', true)
        commit('setLoginAttempt', 0)
      } else {
        commit('setLoginState', false)
        commit('setLoginAttempt', state.loginAttempt + 1)
        commit('setLoginStateMessage', result.message)
      }
    } catch (err) {
      commit('setLoading', false)
      commit('setLoginState', false)
      commit('setLoginAttempt', state.loginAttempt + 1)
      commit('setLoginStateMessage', err.message)
      console.log(err)
      throw err
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
