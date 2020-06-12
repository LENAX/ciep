const state = () => ({
  currentActiveTabName: ''
})
const getters = {}
const mutations = {
  setActiveTab: (state, value) => {
    state.currentActiveTabName = value
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}