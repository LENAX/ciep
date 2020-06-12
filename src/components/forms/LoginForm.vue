<template>
  <div class="login-form">
    <b-form @submit.prevent="onLoginFormSubmit">
      <b-form-row class="mt-3 mb-3">
        <b-col cols="8" offset="2" class="mt-3">
          <b-form-input v-model="phone" type="tel" required placeholder="手机号"></b-form-input>
          <b-form-invalid-feedback v-if="phone.length > 0" :state="validPhone">请输入合法的中国大陆手机号</b-form-invalid-feedback>
        </b-col>
        <b-col cols="8" offset="2" class="mt-3">
          <b-form-input v-model="password" type="password" required placeholder="密码"></b-form-input>
          <b-form-invalid-feedback :state="validPassword">{{loginStateMessage}}</b-form-invalid-feedback>
        </b-col>
        <b-col cols="8" offset="2" class="mt-3">
          <b-button :disabled="!validPhone || loading" block type="submit" variant="primary">
            <span v-if="!loading">登录</span>
            <b-spinner small v-if="loading" label="Loading..."></b-spinner>
          </b-button>
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { createNamespacedHelpers } from "vuex";

const { mapActions, mapGetters } = createNamespacedHelpers("loginForm");

export default {
  name: "LoginForm",
  computed: {
    phone: {
      get() {
        return this.$store.state.loginForm.phone;
      },
      set(value) {
        this.$store.commit("loginForm/setPhone", value);
      }
    },
    password: {
      get() {
        return this.$store.state.loginForm.password;
      },
      set(value) {
        this.$store.commit("loginForm/setPassword", value);
      }
    },
    ...mapState("loginForm", ["loginAttempt", "loginStateMessage", "loading"]),
    ...mapState("auth", ["isLoggedIn", "accessToken"]),
    ...mapGetters(["validPassword", "validPhone", "loginBtnText"])
  },
  mounted: function() {
    this.$store.commit("loginForm/setLoading", false);
  },
  methods: {
    async onLoginFormSubmit() {
      try {
        this.$store.commit("loginForm/setLoading", true);
        const userLoginResponse = await this.$store.dispatch(
          "auth/sendLoginRequest",
          {
            phone: this.phone,
            password: this.password
          }
        );
        console.log(`userLoginResponse: ${userLoginResponse}`)
        if (
          userLoginResponse.status === "success" &&
          userLoginResponse.data != null
        ) {
          this.$store.commit("auth/setLoginState", true);
          this.$store.commit("auth/setAccessToken", userLoginResponse.data.token);
          this.$store.commit("loginForm/setLoginAttempt", 0);
          const enUserData = this.CryptoJS.AES.encrypt(
            JSON.stringify(userLoginResponse.data),
            process.env.VUE_APP_SESS_ENCRPYTION_KEY
          ).toString();
          this.$store.commit("user/setUserAttributes", enUserData);
        } else {
          this.$store.commit(
            "loginForm/setLoginAttempt",
            this.loginAttempt + 1
          );
          this.$store.commit(
            "loginForm/setLoginStateMessage",
            userLoginResponse.message
          );
        }

        this.$store.commit("loginForm/setLoading", false);
        if (this.isLoggedIn) {
          this.$router.push("/");
        }
      } catch (err) {
        this.$store.commit("loginForm/setLoading", false);
        this.$bvToast.toast(`错误信息： ${err.message}`, {
          title: "哦不出错啦！",
          autoHideDelay: 5000,
          appendToast: false
        });
      }
    }
  }
};
</script>

<style lang="sass" scoped>
</style>