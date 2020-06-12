const state = () => ({
  authCode: '',
  accessToken: '',
  isLoggedIn: false
})

// getters
const getters = {}

// mutations
const mutations = {
  setAuthCode(state, authCode) {
    state.authCode = authCode
  },
  setAccessToken(state, token) {
    state.accessToken = token
  },

  setLoginState(state, loginState) {
    state.isLoggedIn = loginState
  }
}

// actions
const actions = {
  async sendLoginRequest({ dispatch, commit, state }, authData) {
    try {
      let response = await this._vm.axios({
        method: 'post',
        url: '/rosp/api/person/login',
        data: {
          "mobilePhone": authData.phone,
          "password": authData.password,
          "authCode": state.authCode
        }
      })
      console.log(response)
      return response.data
    } catch (err) {
      console.error(err.message)
      throw err
    }
  },
  logout({ commit, state }) {
    try {
      commit('setAccessToken', '')
      commit('setLoginState', false)
      commit('user/deleteUser', true, { root: true })
    } catch (err) {
      console.error(err.message)
      throw err
    }
  },
  async getAuthCode({ commit, state }, userAuthData) {
    try {
      const response = await fetch('/rosp/api/request/getAuthCode', {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userAuthData)
      })
      const result = await response.json()
      return result
    } catch (err) {
      console.error(err.message)
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
