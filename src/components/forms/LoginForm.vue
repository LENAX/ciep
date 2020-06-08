<template>
  <div class="login-form">
    <b-form @submit.prevent="onLoginFormSubmit">
      <b-form-row class="mt-3 mb-3">
        <b-col cols="8" offset="2" class="mt-3">
          <b-form-input
            v-model="phone"
            type="tel"
            required
            placeholder="手机号"
          ></b-form-input>
          <b-form-invalid-feedback :state="validPhone">
            请输入合法的中国大陆手机号
          </b-form-invalid-feedback>
        </b-col>
        <b-col cols="8" offset="2" class="mt-3">
          <b-form-input
            v-model="password"
            type="password"
            required
            placeholder="密码"
          ></b-form-input>
          <b-form-invalid-feedback :state="validPassword">
            {{loginStateMessage}}
          </b-form-invalid-feedback>
        </b-col>
        <b-col cols="8" offset="2" class="mt-3">
          <b-button :disabled="!validPhone || loading" block type="submit" variant="primary">
            <span v-if="!loading">{{loginBtnText}}</span>
            <b-spinner small v-if="loading" label="Loading..."></b-spinner>
          </b-button>
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions, mapGetters } = createNamespacedHelpers('loginForm')

export default {
  name: "LoginForm",
  computed: {
    phone: {
      get () {
        return this.$store.state.loginForm.phone
      },
      set (value) {
        this.$store.commit('loginForm/setPhone', value)
      }
    },
    password: {
      get () {
        return this.$store.state.loginForm.password
      },
      set (value) {
        this.$store.commit('loginForm/setPassword', value)
      }
    },
    ...mapState(['loginState', 'loginAttempt', 'loginStateMessage', 'loading']),
    ...mapGetters(['validPassword', 'validPhone', 'loginBtnText'])
  },
  methods: {
    async onLoginFormSubmit () {
      try {
        await this.$store.dispatch('loginForm/submitLoginForm')
        if (this.loginState) {
          this.$router.push('/')
        }
      } catch (err) {
        this.$bvToast.toast(`错误信息： ${err.message}`, {
          title: '哦不出错啦！',
          autoHideDelay: 5000,
          appendToast: false
        })
      }
    }
  }
};
</script>

<style lang="sass" scoped>
</style>