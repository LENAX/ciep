<template>
  <div class="auth-controller">
    <div class="guest" v-if="!isLoggedIn">
      <b-button class="ml-1 mr-1" variant="outline-primary" to="/auth/login">人才登录</b-button>
      <b-button class="ml-1 mr-1" variant="success" to="/auth/register">人才注册</b-button>
    </div>
    <div class="authenticated" v-if="isLoggedIn">
      <b-nav-item-dropdown right>
        <!-- Using 'button-content' slot -->
        <template v-slot:button-content>
          <img :src="user.photoLink" />
          <em>Hi! {{user.personName}}</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters, mapState } from "vuex";
import { createNamespacedHelpers } from "vuex";

// const { mapState, mapActions } = createNamespacedHelpers('auth')

export default {
  name: "AuthController",
  computed: {
    ...mapState("auth", ["isLoggedIn"]),
    user() {
      const enUserData = this.$store.getters["user/userData"];
      const deUserData = this.CryptoJS.AES.decrypt(
        enUserData,
        process.env.VUE_APP_SESS_ENCRPYTION_KEY
      ).toString(this.CryptoJS.enc.Utf8);
      const userObj = JSON.parse(deUserData);
      return userObj;
    }
  },
  methods: {
    signOut() {
      this.$store.commit("auth/setAccessToken", "");
      this.$store.commit("auth/setLoginState", false);
      this.$store.commit("loginForm/setLoginAttempt", 0)
      this.$store.commit("user/deleteUser");
    }
  }
};
</script>

<style lang="sass" scoped>
</style>