<template>
  <div class="reg-form">
    <b-form @submit="onRegSubmit">
      <b-form-row class="mt-3 mb-3">
        <b-col cols="8" offset="2" class="mt-3">
          <b-form-input
            v-model="email"
            type="email"
            required
            aria-autocomplete="true"
            placeholder="邮箱"
          ></b-form-input>
          <b-form-invalid-feedback :state="validEmail">
            请输入合法的邮箱格式, 例如1234@qq.com
          </b-form-invalid-feedback>
        </b-col>
        <b-col cols="8" offset="2" class="mt-3">
          <b-form-input
            v-model="phone"
            type="tel"
            required
            aria-autocomplete="true"
            placeholder="手机号"
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validPhone">
            请输入合法的中国大陆手机号
          </b-form-invalid-feedback>
        </b-col>
        <b-col cols="8" offset="2" class="mt-3">
          <div class="input-group">
            <input v-model="smsValCode" type="text" class="form-control" placeholder="短信验证码" />
            <span class="input-group-btn">
              <b-button :disabled="!allowSendSMS" variant="outline-primary" @click="getSMSValCode">
                {{smsButtonText}}
              </b-button>
            </span>
          </div>
        </b-col>
        <b-col cols="8" offset="2" class="mt-3">
          <b-form-input
            v-model="password"
            type="password"
            required
            aria-autocomplete="true"
            placeholder="密码"
          ></b-form-input>
          <b-form-text id="password-help-block">
            请至少输入8位密码，包含至少一个字母和数字
          </b-form-text>
          <b-form-valid-feedback :state="validPassword">
            密码符合要求
          </b-form-valid-feedback>
          <b-form-invalid-feedback :state="validPassword">
            密码不符合要求哦
          </b-form-invalid-feedback>
        </b-col>
        <b-col cols="8" offset="2" class="mt-3">
          <b-form-input
            v-model="passwordConfirmation"
            type="password"
            required
            aria-autocomplete="true"
            placeholder="确认密码"
          ></b-form-input>
          <b-form-invalid-feedback :state="isPasswordMatch">
            密码不一致
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="passwordConfirmation != ''  && isPasswordMatch">
            密码一致
          </b-form-valid-feedback>
        </b-col>
        <b-col cols="8" offset="2" class="mt-3">
          <b-button
            block
            type="submit"
            variant="primary"
            :disabled="!(validEmail && validPhone && isPasswordMatch)"
          >
          注册
          </b-button>
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions, mapGetters } = createNamespacedHelpers('registrationForm')

export default {
  name: "RegistrationForm",
  computed: {
    email: {
      get () {
        return this.$store.state.registrationForm.email
      },
      set (value) {
        this.$store.commit('registrationForm/setEmail', value)
      }
    },
    phone: {
      get () {
        return this.$store.state.registrationForm.phone
      },
      set (value) {
        this.$store.commit('registrationForm/setPhone', value)
      }
    },
    smsValCode: {
      get () {
        return this.$store.state.registrationForm.smsValCode
      },
      set (value) {
        this.$store.commit('registrationForm/setSMSValCode', value)
      }
    },
    password: {
      get () {
        return this.$store.state.registrationForm.password
      },
      set (value) {
        this.$store.commit('registrationForm/setPassword', value)
      }
    },
    passwordConfirmation: {
      get () {
        return this.$store.state.registrationForm.passwordConfirmation
      },
      set (value) {
        this.$store.commit('registrationForm/setPasswordConfirmation', value)
      }
    },
    ...mapState([
      // 映射 this.count 为 store.state.count
      'smsButtonText'
    ]),
    ...mapGetters([
      'validEmail',
      'validPhone',
      'validPassword',
      'isPasswordMatch',
      'allowSendSMS'
    ])
  },
  methods: {
    onRegSubmit () {},
    getSMSValCode () {
      this.$store.dispatch('registrationForm/triggerSMSCoolDown', 10)
      this.$store.dispatch('registrationForm/requestSMSValCode', this.$store.state.registrationForm.phone)
    },
    ...mapMutations([
      'setEmail',
      'setPhone',
      'setSMSValCode',
      'setRealSMSValCode',
      'setSmsRequestCountdown',
      'setPassword',
      'setPasswordConfirmation',
      'setCountDownInterval',
      'setSMSButtonText'
    ])
  }
};
</script>

<style lang="sass" scoped>
$break-small: 320px;
$break-md: 476px;
$break-large: 1200px;

.btn
  @media screen and (max-width: $break-small)
    padding: 0.5em 0.75rem !important
    font-size: 12px
  @media screen and (max-width: $break-md)
    padding: 0.5em 0.75rem !important
    font-size: 14px
  @media screen and (min-width: $break-large)
    font-size: 16px

</style>