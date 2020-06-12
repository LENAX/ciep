const state = () => ({
  name: '',
  email: '',
  phone: '',
  smsValCode: '',
  phoneValidated: false,
  smsRequestCountdown: 0,
  smsRequestState: false,
  smsRequestAwaiting: false,
  smsButtonText: '获取验证码',
  password: '',
  passwordConfirmation: '',
  formSubmit: false
})

// getters
const getters = {
  smsRequestSuccessful: (state, getters, rootState) => {
    return (!state.smsRequestAwaiting && state.smsRequestState)
  },
  validEmail: (state, getters, rootState) => {
    const email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return state.email.length === 0 || email_pattern.test(state.email)
  },
  validPhone: (state, getters, rootState) => {
    const phone_pattern = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
    return state.phone.length === 0 || phone_pattern.test(state.phone)
  },
  validPassword: (state, getters, rootState) => {
    const password_patten = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return state.password.length === 0 || password_patten.test(state.password)
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
  setName(state, value) {
    state.name = value
  },
  setEmail(state, value) {
    state.email = value
  },
  setPhone(state, value) {
    state.phone = value
  },
  setSMSValCode(state, value) {
    state.smsValCode = value
  },
  setSmsRequestSuccessful(state, value) {
    state.smsRequestSuccessful = value
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
  },
  setSMSRequestAwaiting(state, value) {
    state.smsRequestAwaiting = value
  },
  setPhoneValidated(state, value) {
    state.phoneValidated = value
  },
  setFormSubmit(state, value) {
    state.formSubmit = value
  }
}

// actions
const actions = {
  async submitRegistrationForm({ commit, state, rootState }) {
    try {
      let response = await fetch(`/rosp/api/person/register`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=utf-8',
          'access_token': rootState.auth.accessToken
        },
        body: JSON.stringify({
          personName: state.name,
          email: state.email,
          mobilePhone: state.phone,
          password: state.password
        })
      })
      let result = await response.json()
      return result
    } catch (err) {
      console.error(err.message)
      throw err
    }
  },
  async validateSMSValCode({ commit, state }, valData) {
    try {
      console.log(valData)
      const param_str = `phone=${valData.phone}&code=${valData.code}`
      // const respJSON = await fetch(`/smsService/verfication?${param_str}`, { method: 'GET' })
      fetch(`/smsService/verification?${param_str}`,
        { method: 'GET' }
      ).then(resp => {
        resp.json().then(function (data) {
          commit('setPhoneValidated', data.verified)
          console.log("phone validated!")
        })
      })
    } catch (err) {
      console.error(err.message)
      throw err
    }
  },
  async requestSMSValCode({ commit, state }, phone) {
    /**
     * Get sms validation code
     */
    try {
      const smsServerURL = process.env.VUE_APP_SMS_SERVER_ROOT
      commit('setSMSRequestAwaiting', true)
      fetch(`/smsService/sms?phone=${phone}`, {
        method: 'GET'
      }).then(resp => {
        resp.json().then(data => {
          try {
            console.log(data)
            const status = data.SendStatusSet[0]
            commit('setSmsRequestSuccessful', (status.Code === 'Ok' && status.Message == 'send success'))
            commit('setSMSRequestAwaiting', false)
          } catch (err) {
            throw err
          }
        })
      })
    } catch (err) {
      console.log(err.message)
      throw err
    }
  },
  triggerSMSCoolDown({ commit, state }, countdownSeconds) {
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
