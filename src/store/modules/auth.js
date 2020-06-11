const state = () => ({
  accessToken: '',
  isLoggedIn: false
})

// getters
const getters = {}

// mutations
const mutations = {
  setAccessToken(state, token) {
    state.accessToken = token
  },

  setLoginState(state, loginState) {
    state.isLoggedIn = loginState
  }
}

// actions
const actions = {
  async sendLoginRequest({ commit, state }, authData) {
    try {
      let response = await fetch(`/rosp/api/person/login`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          mobilePhone: authData.phone,
          password: authData.password
        })
      })
      let result = await response.json()
      return result
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
  async getAccessToken({ commit, state }, userAuthData) {
    try {
      const response = await fetch('/rosp/api/request/getToken', {
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
