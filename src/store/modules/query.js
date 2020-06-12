const state = () => ({
  keywords: '',
  searchType: 'recruit',
  selected: 'recruit',
  options: [
    { text: '找工作', value: 'recruit' },
    { text: '找公司', value: 'company' }
  ],
  queryStartDate: '2020-06-01',
  queryEndDate: '2020-08-01',
  queryLoading: false,
  pageSize: 10,
  pageIndex: 0,
  results: []
})
const getters = {
  resultIsEmpty: function (state, getters, rootState) {
    return state.results.length === 0
  }
}
const mutations = {
  setKeywords (state, value) {
    state.keywords = value
  },
  setSearchType(state, value) {
    state.searchType = value
  },
  setSelected (state, value) {
    state.selected = value
  },
  setQueryLoading (state, value) {
    state.queryLoading = value
  },
  setPageSize (state, value) {
    state.pageSize = value
  },
  setPageIndex (state, value) {
    state.pageSize = value
  },
  setResults (state, value) {
    state.results = value
  }
}
const actions = {
  async submitQuery({ commit, state }) {
    try {
      const response = await this._vm.axios({
        method: 'POST',
        url: `/rosp/api/${state.selected}/search`,
        data: {
          pager: {
            pageIndex: state.pageIndex,
            pageSize: state.pageSize,
            params: {
              keyword: state.keywords,
              dateStart: state.queryStartDate,
              dateEnd: state.queryEndDate,
              enJobFairId: process.env.VUE_APP_TEST_EN_JOB_FAIR_ID
            }
          }
        }
      })
      return response
    } catch (error) {
      console.error(error)
      throw error
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