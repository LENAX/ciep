/**
 * Mocking client-server processing
 */
const jwt = require('jsonwebtoken')
const mockPrivateKey = 'bslFffROBFIdKYX2y4kEKr8FVq6jY0QpIDfVcye3okw'
const _users = [{
  createDt: null,
  createdBy: 0,
  dob: '1986-10-10 00:00:00',
  email: '251017448@qq.com',
  expectIndustry: '',
  expectPosition: '',
  expectSalary: '',
  expectWorkCity: '',
  gender: '男',
  graduateYear: '',
  highestEdu: '',
  inactive: false,
  lastCompany: '人才集团',
  lastLoginDt: null,
  lastPosition: '',
  loginRetryTimes: 0,
  major: '信息工程',
  mobilePhone: '18124050286',
  overseas: false,
  password: 'xh123456',
  personId: 1,
  personName: '肖涵',
  photoLink: 'https://randomuser.me/api/portraits/men/4.jpg',
  receiveSms: false,
  remark: '',
  schoolName: '',
  selfComment: ''
}, {
  createDt: null,
  createdBy: 0,
  dob: '1995-10-10 00:00:00',
  email: 'user2@qq.com',
  expectIndustry: '',
  expectPosition: '',
  expectSalary: '',
  expectWorkCity: '深圳',
  gender: '女',
  graduateYear: '',
  highestEdu: '研究生',
  inactive: false,
  lastCompany: '',
  lastLoginDt: null,
  lastPosition: '',
  loginRetryTimes: 0,
  major: '',
  mobilePhone: '18923456789',
  overseas: false,
  password: 'userpass1',
  personId: 2,
  personName: '西湖大学',
  photoLink: 'https://randomuser.me/api/portraits/women/90.jpg',
  receiveSms: true,
  remark: '',
  schoolName: '',
  selfComment: ''
}, {
  createDt: null,
  createdBy: 0,
  dob: '1997-10-10 00:00:00',
  email: 'xixi@gmail.com',
  expectIndustry: '',
  expectPosition: '',
  expectSalary: '',
  expectWorkCity: '',
  gender: '女',
  graduateYear: '',
  highestEdu: '本科',
  inactive: false,
  lastCompany: '',
  lastLoginDt: null,
  lastPosition: '',
  loginRetryTimes: 0,
  major: '',
  mobilePhone: '13612345678',
  overseas: false,
  password: 'Xixi_9710@isz',
  personId: 3,
  personName: '茜茜',
  photoLink: 'https://randomuser.me/api/portraits/women/60.jpg',
  receiveSms: true,
  remark: '',
  schoolName: '',
  selfComment: ''
}]

function validateUserAuthData (userAuthData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let userAuthorized = _users.some(user => {
        return user.mobilePhone === userAuthData.mobilePhone &&
          user.email === userAuthData.email &&
          user.password === userAuthData.password
      })
      userAuthorized
        ? resolve({
          email: userAuthData.email,
          phone: userAuthData,
          password: userAuthData.password
        })
        : reject(new Error('authentication failed'))
    }, 300)
  })
}

export default {
  async requestAccessToken (userAuthData) {
    try {
      let authorizedUser = await validateUserAuthData(userAuthData)
      if (authorizedUser) {
        let jwtToken = jwt.sign(
          authorizedUser,
          mockPrivateKey,
          { algorithm: 'HS256' },
          function (err, token) {
            if (err) {
              console.log(err)
              throw err
            }
            return token
          }
        )
        return JSON.jsonify({
          accessToken: jwtToken,
          status: 'success',
          message: 'Successfully obtained access token!'
        })
      }
    } catch (e) {
      return JSON.jsonify({
        accessToken: '',
        status: 'failed',
        message: 'invalid username or password'
      })
    }
  }
}
