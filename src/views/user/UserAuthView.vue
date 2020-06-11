<template>
  <div class="user-auth-view">
    <vue-particles color="#dedede"></vue-particles>
    <transition appear>
      <b-container class="bv-example-row bv-example-row-flex-cols login-form-container">
        <b-row align-v="center">
          <b-col md="8" offset-md="2" lg="6" offset-lg="3" sm="12" align-self="center">
            <b-card class="auth-card bg-light-gray">
              <!-- <img src="@/assets/img/auth_bg.jpeg" class="img-fluid mb-1" alt="auth background"> -->
              <div class="card-content p-1">
                <b-tabs content-class="mt-3" justified>
                  <b-tab class="reg-tab" title="注册" :active="$route.params.authAction === 'register'">
                    <RegistrationForm />
                  </b-tab>
                  <b-tab class="login-tab" title="登录" :active="$route.params.authAction === 'login'">
                    <LoginForm />
                  </b-tab>
                </b-tabs>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </transition>
  </div>
</template>

<script>
import RegistrationForm from '@/components/forms/RegistrationForm.vue'
import LoginForm from '@/components/forms/LoginForm.vue'

export default {
  name: 'UserAuthView',
  components: {
    RegistrationForm,
    LoginForm
  },
  data () {
    return {
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
