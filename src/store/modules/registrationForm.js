const state = () => ({
  email: '',
  phone: '',
  smsValCode: '',
  smsRequestCountdown: 0,
  realSMSValCode: null,
  smsButtonText: '获取验证码',
  password: '',
  passwordConfirmation: '',
})

// getters
const getters = {
  validEmail: (state, getters, rootState) => {
    const email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email_pattern.length === 0 || email_pattern.test(state.email)
  },
  validPhone: (state, getters, rootState) => {
    const phone_pattern = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
    return phone_pattern.length === 0 || phone_pattern.test(state.phone)
  },
  validPassword: (state, getters, rootState) => {
    const password_patten = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return password_patten.length === 0 || password_patten.test(state.password)
  },
  isPasswordMatch: (state, getters, rootState) => {
    return state.password === state.passwordConfirmation
  },
  allowSendSMS: (state, getters, rootState) => {
    return state.smsRequestCountdown <= 0
  }
}

// mutations
const mutations = {
  setEmail(state, value) {
     state.email = value
  },
  setPhone(state, value) {
    state.phone = value
  },
  setSMSValCode(state, value) {
    state.smsValCode = value
  },
  setRealSMSValCode(state, value) {
    state.realSMSValCode = value
  },
  setSmsRequestCountdown(state, value) {
    state.smsRequestCountdown = value
  },
  setPassword(state, value) {
    state.password = value
  },
  setPasswordConfirmation(state, value) {
    state.passwordConfirmation = value
  },
  setCountDownInterval(state, value) {
    state.countDownInterval = value
  },
  setSMSButtonText(state, value) {
    state.smsButtonText = value
  }
}

// actions
const actions = {
  submitRegistrationForm ({ commit, state}, formData) {

  },
  requestSMSValCode ({ commit, state }, phone) {
    /**
     * Get sms validation code
     */
    try {
      setTimeout(function() {
        const code = Math.floor(Math.random() * 100000) + 100000
        commit('setRealSMSValCode', code)
      }, 100)
      console.log(`sms code: ${state.realSMSValCode}`)
    } catch (err) {
      console.log(err.message)
      throw err
    }
  },
  triggerSMSCoolDown ({ commit, state }, countdownSeconds) {
    commit('setSmsRequestCountdown', countdownSeconds)
    commit('setSMSButtonText', `${state.smsRequestCountdown} 秒后重新发送`)
    // count seconds
    if (state.smsRequestCountdown > 0) {
      let countdown = setInterval(function () {
        commit('setSmsRequestCountdown', (state.smsRequestCountdown - 1))
        commit('setSMSButtonText', `${state.smsRequestCountdown} 秒后重新发送`)
        if (state.smsRequestCountdown < 1) {
          clearInterval(countdown)
          commit('setSMSButtonText', `重新获取验证码`)
        }
      }, 1000)
      commit('setCountDownInterval', countdown)
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
