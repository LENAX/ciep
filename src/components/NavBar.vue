<template>
  <div id="nav pt-2">
    <b-navbar class="bg-white" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">
        <img src="@/assets/img/ciep_logo.png" alt="CIEP" />
        <img src="@/assets/img/title.png" alt="CIEP_TITLE" id="title" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" id="nav-toggler"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="http://www.ciep.gov.cn/" target="_blank">大会官网</b-nav-item>
          <b-nav-item to="/industries">行业展区</b-nav-item>
          <b-nav-item-dropdown text="会展服务" right>
            <b-dropdown-item to="/regguide">企业参会</b-dropdown-item>
            <b-dropdown-item to="/live">
              招聘直播间
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="http://ciep.sznews.com/node_301787.htm" target="_blank">
            活动新闻
          </b-nav-item>
          <b-button variant="link" v-b-modal.contact-modal class="text-dark">联系我们</b-button>
          <AuthController/>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import AuthController from '@/components/auth/AuthController.vue'

export default {
  name: 'NavBar',
  components: {
    AuthController
  }
}
</script>

<style lang="scss">
#nav {
  width: 100%;
  padding: 0px;
  background: #eee;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
}

.user-control {
  margin: 0 30px 0 30px;
}

@media only screen and (max-width: 400px) and (min-width: 0px) {
  #title {
    width: 270px;
  }
  #nav-toggler {
    display: none;
  }
}

@media only screen and (max-width: 599px) and (min-width: 401px) {
  #title {
    width: 300px;
  }
  #nav-toggler {
    display: none;
  }
}

@media only screen and (min-width: 600px) {
  #title {
    width: 400px;
  }
}

.nav-link {
  color: #000 !important;
}
</style>
