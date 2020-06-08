import { expect } from 'chai'
import { requestAccessToken, mockPrivateKey} from '../../../../src/api/userAuth'

describe('index test', () => {
    describe('Test getting access token with existing user', () => {
        it('should get token from user 1!', () => {
            const userAuthData = {
                email: '251017448@qq.com',
                phone: '18124050286',
                password: 'xh123456'
            }
            requestAccessToken(userAuthData).then(result => {
                const parsedResponse = JSON.parse(result)
                expect(parsedResponse.status).to.equal('success')
            })
        })
    })
})
