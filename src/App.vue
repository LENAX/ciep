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
  methods: {
    ...mapMutations(["setAccessToken"]),
    ...mapActions(["getAccessToken"]),
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
    requestAccessToken(authData) {
      this.getAccessToken(authData).then(response => {
        if (response.status === "success") {
          this.setAccessToken(response.data);
        } else {
          console.error("Failed to fetch access token. I have to retry later.");
        }
      });
    },
    setRequestHeaders() {
      const enTokenStr = storageGet("/auth/credentials");
      const tokenStr = this.CryptoJS.AES.decrypt(
        enTokenStr,
        process.env.VUE_APP_SESS_ENCRPYTION_KEY
      ).toString();
      const access_token = JSON.parse(tokenStr);
      // this.axios.defaults.headers.common = {
      //   "Access-Control-Allow-Origin": "*",
      //   "Content-Type": "application/json;charset=utf-8",
      //   "access_token": access_token
      // };
      this.axios.defaults.headers.common['access_token'] = access_token;
    }
  },
  beforeMount() {
    // Store appid and appsecret to sessionStorage
    const authData = this.getAuthDataFromEnv();
    this.saveAuthDataToSession(authData);
    this.requestAccessToken(authData);
  },
  mounted() {
    const vm = this;
    setInterval(function() {
      vm.requestAccessToken(vm.getAuthDataFromEnv());
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
