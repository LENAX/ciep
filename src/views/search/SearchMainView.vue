<template>
  <div class="search-main-view particle-bg">
    <!-- <vue-particles color="#dedede"></vue-particles> -->
    <transition appear>
      <b-container class="bv-example-row bv-example-row-flex-cols">
        <b-row align-v="center">
          <b-col md="8" offset-md="2" lg="8" offset-lg="2" sm="12" align-self="center">
            <b-card class="auth-card bg-light-gray">
              <img src="@/assets/img/auth_bg.jpeg" class="img-fluid mb-1" alt="auth background">
              <div class="card-content pt-1 pb-3">
                <SearchBar></SearchBar>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </transition>
  </div>
</template>

<script>
import '@/assets/sass/particles.sass'
import SearchBar from '@/components/SearchBar.vue'

import { createNamespacedHelpers } from "vuex";

const {
  mapState,
  mapActions,
  mapGetters,
  mapMutations
} = createNamespacedHelpers("query");


export default {
  name: 'SearchMainView',
  components: {
    SearchBar
  },
  computed: {
    ...mapState([
      "results",
      "pageSize",
      "pageIndex"
    ])
  },
  methods: {
    ...mapActions(["submitQuery"]),
    ...mapMutations([
      "setQueryLoading",
      "setPageSize",
      "setPageIndex",
      "setResults"
    ]),
  }

}
</script>

<style lang="sass" scoped>
.search-main-view
  height: 100vh

.auth-card
  margin-top: 10vh
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
</style>
