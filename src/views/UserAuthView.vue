<template>
  <div class="user-auth-view">
    <vue-particles color="#dedede"></vue-particles>
    <b-container class="bv-example-row bv-example-row-flex-cols login-form-container">
      <b-row align-v="center">
        <b-col md="8" offset-md="2" lg="6" offset-lg="3" sm="12" align-self="center">
          <b-card class="auth-card bg-light-gray">
            <!-- <img src="@/assets/img/auth_bg.jpeg" class="img-fluid mb-1" alt="auth background"> -->
            <div class="card-content p-1">
              <b-tabs content-class="mt-3" justified>
                <b-tab class="reg-tab" title="注册" :active="$route.params.authAction === 'register'">
                  <b-form @submit="onRegSubmit">
                    <b-form-row class="mt-3 mb-3">
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="regForm.email"
                          type="email"
                          required
                          placeholder="邮箱"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="regForm.phone"
                          type="tel"
                          required
                          placeholder="手机号"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <div class="input-group">
                          <input type="number" class="form-control" placeholder="短信验证码">
                          <span class="input-group-btn">
                            <b-button variant="outline-primary">获取验证码</b-button>
                          </span>
                        </div>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="regForm.password"
                          type="password"
                          required
                          placeholder="密码"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="regForm.passwordConfirmation"
                          type="password"
                          required
                          placeholder="确认密码"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-button block type="submit" variant="primary">注册</b-button>
                      </b-col>
                    </b-form-row>
                  </b-form>
                </b-tab>
                <b-tab class="login-tab" title="登录" :active="$route.params.authAction === 'login'">
                  <b-form @submit="onLoginSubmit">
                    <b-form-row class="mt-3 mb-3">
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="loginForm.phone"
                          type="tel"
                          required
                          placeholder="手机号"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-form-input
                          v-model="loginForm.password"
                          type="password"
                          required
                          placeholder="密码"
                        ></b-form-input>
                      </b-col>
                      <b-col cols="8" offset="2" class="mt-3">
                        <b-button block type="submit" variant="primary">登录</b-button>
                      </b-col>
                    </b-form-row>
                  </b-form>
                </b-tab>
              </b-tabs>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'UserAuthView',
  data () {
    return {
      regForm: {
        email: '',
        phone: '',
        smsValCode: '',
        password: '',
        passwordConfirmation: ''
      },
      loginForm: {
        phone: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onRegSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onLoginSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style lang="sass" scoped>
.user-auth-view
  background: rgb(15, 28, 112)
  height: 100vh

.auth-card
  margin-top: 5vh
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)

.login-tab
  padding: 0 0 70px 0!important

.reg-tab
  padding: 0 0 5px 0!important

.card-body
  padding: 0 !important

.login-form-container
  height: 100%

.w-30
  width: 30% !important

.w-70
  width: 70% !important

#particles-js
  width: 100%
  height: calc(100% - 100px)
  position: absolute
</style>
