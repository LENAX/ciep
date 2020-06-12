<template>
  <div class="bg-light">
    <b-container class="pt-2 pb-2">
      <b-row class="mt-1 mb-2" offset="3">
        <b-col md-offset="1">
          <b-form-group class="mb-0">
            <b-form-radio-group
              id="btn-radios-2"
              v-model="selected"
              :options="options"
              buttons
              button-variant="outline-primary"
              size="md"
              name="radio-btn-outline"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md-offset="1">
          <b-form-input v-model="keywords" id="search-input" placeholder="请输入关键词"></b-form-input>
          <b-button
            :disabled="queryLoading"
            variant="primary"
            type="submit"
            class="search-btn"
            @click="handleSubmitQuery"
          >
            <div v-if="!queryLoading">
              <b-icon icon="search" id="search-icon"></b-icon>搜索
            </div>
            <div class="pl-2 pr-2">
              <b-spinner class="ml-1 mr-1" small v-if="queryLoading" label="Loading..."></b-spinner>
            </div>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const {
  mapState,
  mapActions,
  mapGetters,
  mapMutations
} = createNamespacedHelpers("query");

export default {
  name: "SearchBar",
  methods: {
    ...mapActions(["submitQuery"]),
    ...mapMutations([
      "setQueryLoading",
      "setPageSize",
      "setPageIndex",
      "setResults"
    ]),
    async handleSubmitQuery() {
      try {
        this.setQueryLoading(true);
        const response = await this.submitQuery();
        await setTimeout(() => {
          this.setQueryLoading(false);
        }, 100);
        console.log(response);
        if (
          response.data.message === "ok" &&
          response.data.status === "success"
        ) {
          this.setResults(response.data.data.data)
        }
        console.log(this.$route)
        const searchTypeInRoute = this.$route.path.split('/')[-1]
        if (!this.$route.path.includes(this.searchType) || searchTypeInRoute != this.searchType) {
          this.$router.push(`/search/results/${this.searchType}`)
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  },
  computed: {
    keywords: {
      get() {
        return this.$store.state.query.keywords;
      },
      set(value) {
        this.$store.commit("query/setKeywords", value);
      }
    },
    searchType: {
      get() {
        return this.$store.state.query.searchType;
      },
      set(value) {
        this.$store.commit("query/setSearchType", value);
      }
    },
    selected: {
      get() {
        return this.$store.state.query.selected;
      },
      set(value) {
        this.$store.commit("query/setSearchType", value);
      }
    },
    ...mapState(["jobFairId", "options", "queryLoading"])
  }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  #search-input {
    /* width: 80% !important; */
    display: block;
  }

  .search-btn {
    background: #409eff;
    display: block;
    width: 100%;
    margin-top: 5px;
  }
}

@media only screen and (min-width: 601px) {
  #search-input {
    width: 80% !important;
    display: inline-block;
  }

  .search-btn {
    background: #409eff;
  }
}

#search-icon {
  font-size: 18px;
  margin-right: 5px;
}
</style>
