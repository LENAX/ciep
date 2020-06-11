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
    return state.loginAttempt === 0 && rootState.auth.isLoggedIn
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
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
