import {
  storageAdd,
  storageGet,
  storageDelete
} from '../../sessionStore/sessStore'

// initial state
// shape: [{ id, quantity }]
const state = () => ({})

// getters
const getters = {
  userData: function (state, getters, rootState) {
    const user = storageGet('/user/data')
    return user
  }
}

// mutations
const mutations = {
  setUserAttributes(state, attributes) {
    storageAdd('/user/data', attributes)
  },
  deleteUser(state) {
    storageDelete('/user/data')
  }
}

// actions
const actions = {
  async getUserAttributeById({ commit, state }, userId, authToken) {
    /**
     * Get user attributes by id
     */
    try {
      const userAttrRequestResponse = await requestUserDataById(userId, authToken)
      const parsedResponse = JSON.parse(userAttrRequestResponse)

        (parsedResponse.status === 'success' && parsedResponse.data !== null) ?
        commit('setUserAttributes', parsedResponse.data) :
        commit('setUserAttributes', parsedResponse.data)
    } catch (err) {
      console.log(err.message)
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
