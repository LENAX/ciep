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
          <img src="" alt="avatar"/>
          <em>{{personName}}</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item @click="signOut(false)">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters, mapState} from 'vuex'
import { createNamespacedHelpers } from 'vuex'

// const { mapState, mapActions } = createNamespacedHelpers('auth')

export default {
  name: 'AuthController',
  computed: {
    ...mapState('auth', ["isLoggedIn"]),
    ...mapState('user', ["personName", "photoLink"])
  },
  methods: {
    signOut () {
      this.$store.commit('auth/setLoginState', false)
    },
  }
}
</script>

<style lang="sass" scoped>
</style>