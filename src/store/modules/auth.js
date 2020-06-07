import shop from '../../api/shop'
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
    let tokenRequestResponse = await requestAccessToken(userAuthData)
    if (tokenRequestResponse.accessToken !== '') {
      commit('setAccessToken', tokenRequestResponse.accessToken)
      commit('setLoginState', true)
    } else {
      commit('setAccessToken', '')
      commit('setLoginState', false)
    }
  },
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
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
