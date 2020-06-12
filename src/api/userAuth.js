/**
 * Mocking client-server processing
 */
import jwt from 'jsonwebtoken'

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

async function validateToken (token) {
  /**
   * Use jwt to decode token and check whether the decoded data is a valid user data
   */
  const decodedToken = jwt.verify(token, mockPrivateKey, (err, decoded) => {
    try {
      return decoded
    } catch (err) {
      throw err
    }
  })
  return validateUserAuthData(decodedToken.body)
}

export default {
  async requestUserDataById(userId, token) {
    try {
      const tokenVerificationState = await validateToken(token)
      if (tokenVerificationState) {
        const requestedUser = _users.filter(usr => {
          return usr.personId === userId
        })
        if (requestedUser.length === 1) {
          return JSON.stringify({
            data: requestedUser,
            message: 'ok',
            redirect: '',
            status: 'success'
          })
        } else {
          throw Error(`User with ${userId} not found.`)
        }
      } else {
        throw Error('Invalid token')
      }
    } catch (e) {
      return JSON.stringify({
        data: null,
        message: e.message,
        redirect: '',
        status: 'fail'
      })
    }
  },
  async requestAccessToken (userAuthData) {
    try {
      const response = validateUserAuthData(userAuthData).then(authorizedUser => {
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
          return JSON.stringify({
            accessToken: jwtToken,
            status: 'success',
            message: 'Successfully obtained access token!'
          })
        }
      })
      return response
    } catch (e) {
      return JSON.stringify({
        accessToken: '',
        status: 'failed',
        message: 'invalid username or password'
      })
    }
  }
}
