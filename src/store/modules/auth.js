import requestAccessToken from '../../api/userAuth.js'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  accessToken: '',
  isLoggedIn: false
})

// getters
const getters = {
  // cartProducts: (state, getters, rootState) => {
  //   return state.items.map(({ id, quantity }) => {
  //     const product = rootState.products.all.find(product => product.id === id)
  //     return {
  //       title: product.title,
  //       price: product.price,
  //       quantity
  //     }
  //   })
  // },

  // cartTotalPrice: (state, getters) => {
  //   return getters.cartProducts.reduce((total, product) => {
  //     return total + product.price * product.quantity
  //   }, 0)
  // }
}

// mutations
const mutations = {
  setAccessToken (state, token) {
    state.accessToken = token
  },

  setLoginState (state, loginState) {
    state.isLoggedIn = loginState
  }
}

// actions
const actions = {
  async getAccessToken ({ commit, state }, userAuthData) {
    const tokenRequestResponse = await requestAccessToken(userAuthData)
    const parsedResponse = JSON.parse(tokenRequestResponse)

    if (parsedResponse.status === 'success' && parsedResponse.accessToken !== '') {
      commit('setAccessToken', tokenRequestResponse.accessToken)
      commit('setLoginState', true)
    } else {
      commit('setAccessToken', '')
      commit('setLoginState', false)
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
