import {
  requestUserDataById
} from '../../api/userAuth.js'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  createDt: null,
  createdBy: 0,
  dob: '',
  email: '',
  expectIndustry: '',
  expectPosition: '',
  expectSalary: '',
  expectWorkCity: '',
  gender: '',
  graduateYear: '',
  highestEdu: '',
  inactive: false,
  lastCompany: '',
  lastLoginDt: null,
  lastPosition: '',
  loginRetryTimes: 0,
  major: '',
  mobilePhone: '',
  overseas: false,
  password: null,
  personId: null,
  personName: '',
  photoLink: '',
  receiveSms: true,
  remark: '',
  schoolName: '',
  selfComment: ''
})

// getters
const getters = {}

// mutations
const mutations = {
  setUserAttributes(state, attributes) {
    Object.assign(state, attributes)
    console.log(state)
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
