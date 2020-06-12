<template>
  <div class="animate__fadeIn" id="app">
    <NavBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
    <ContactModal />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import ContactModal from "@/components/ContactModal.vue";

import { createNamespacedHelpers } from "vuex";

const {
  mapState,
  mapActions,
  mapMutations,
  mapGetters
} = createNamespacedHelpers("auth");

import {
  storageAdd,
  storageGet,
  storageDelete
} from "@/sessionStore/sessStore";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    ContactModal
  },
  computed: {
    ...mapState(["authCode"])
  },
  methods: {
    ...mapMutations(["setAuthCode"]),
    ...mapActions(["getAuthCode"]),
    getAuthDataFromEnv() {
      let appid = "";
      let appsecret = "";
      if (process.env.NODE_ENV === "production") {
        appid = process.env.VUE_APP_PRODUCTION_APP_ID;
        appsecret = process.env.VUE_APP_PRODUCTION_APP_SECRET;
      }
      if (process.env.NODE_ENV == "development") {
        appid = process.env.VUE_APP_TEST_APP_ID;
        appsecret = process.env.VUE_APP_TEST_APP_SECRET;
      }
      const authData = {
        appId: appid,
        secretKey: appsecret
      };
      return authData;
    },
    saveAuthDataToSession(authData) {
      const enAuthData = this.CryptoJS.AES.encrypt(
        JSON.stringify(authData),
        process.env.VUE_APP_SESS_ENCRPYTION_KEY
      ).toString();
      storageAdd("/auth/credentials", enAuthData);
    },
    requestAuthCode(authData) {
      this.$store.dispatch("auth/getAuthCode",authData).then(response => {
        if (response.status === "success") {
          this.setAuthCode(response.data);
        } else {
          console.error("Failed to fetch access token. I have to retry later.");
        }
      });
    },
    setRequestHeaders() {
      this.axios.defaults.headers.common['Authentication'] = this.accessToken;
    },
    setGlobalIntercepter() {
      const vm = this
      this.axios.interceptors.response.use(function (response) {
        // if authCode is expired
        console.log(`In Interceptor: ${JSON.stringify(response)}`)
        if (response.data.status === 'failed' && response.data.message.includes('校验失败')) {
          console.log("Resend auth code request!")
          vm.requestAuthCode(authData(vm.getAuthDataFromEnv()))
          if (vm.$store.state.auth.isLoggedIn) {
            vm.$bvToast.toast(`请注销后重新登录`, {
              title: "您的登录状态已过期",
              autoHideDelay: 5000,
              appendToast: false
            });
          }
        }
        // if access token is expired
        // response 是请求回来的数据
        return response;
        }, function (error) {
          // 对响应错误做点什么
          return Promise.reject(error)
        }
      )
    }
  },
  beforeMount() {
    // Store appid and appsecret to sessionStorage
    const authData = this.getAuthDataFromEnv();
    this.saveAuthDataToSession(authData);
    this.requestAuthCode(authData);
    this.setGlobalIntercepter();
    // console.log(this.axios.defaults.headers.common)
  },
  mounted() {
    const vm = this;
    setInterval(function() {
      vm.requestAuthCode(vm.getAuthDataFromEnv());
      vm.setRequestHeaders();
    }, process.env.VUE_APP_AUTO_REFRESH_SECONDS);
  },
  beforeDestroy() {
    // delete everything in sessionStorage
    storageDelete("/auth/credentials");
  }
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, SimSun,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
