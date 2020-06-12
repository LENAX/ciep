<template>
  <div class="search-result">
    <transition appear>
      <FeatureBoxSection sectionTitle="搜索结果">
        <template v-slot:banner>
          <vue-particles color="#dedede"></vue-particles>
          <b-container class="bv-example-row bv-example-row-flex-cols pt-2 pb-2">
            <b-row align-v="center">
              <b-col md="8" offset-md="2" lg="8" offset-lg="2" sm="12" align-self="center">
                <b-card class="auth-card bg-light-gray">
                  <div class="card-content pt-1 pb-3">
                    <SearchBar></SearchBar>
                  </div>
                </b-card>
              </b-col>
            </b-row>
          </b-container>
        </template>
        <template v-slot:feature-boxes>
          <div class="results" v-if="!resultIsEmpty">
            <b-col
              sm="12"
              md="12"
              lg="12"
              v-for="(result, index) in searchResult"
              :key="`search-result-item-${index}`"
              class="mt-1 mb-1"
            >
              <b-card
                class="p-4"
                :title="result.resultTitle"
                @click="navigateToPath(result.resultDetailURL)"
              >
                <b-card-text>{{ result.resultDescription }}</b-card-text>
              </b-card>
            </b-col>
          </div>
          <div class="no-result" v-if="resultIsEmpty">
            <img class="img-fluid" src="@/assets/img/result_404.jpeg" />
          </div>
        </template>
      </FeatureBoxSection>
    </transition>
  </div>
</template>

<script>
import "@/assets/sass/particles.sass";
import SearchBar from "@/components/SearchBar.vue";
import FeatureBoxSection from "@/components/FeatureBoxSection.vue";

import { createNamespacedHelpers } from "vuex";

const {
  mapState,
  mapActions,
  mapGetters,
  mapMutations
} = createNamespacedHelpers("query");

export default {
  name: "SearchResults",
  components: {
    SearchBar,
    FeatureBoxSection
  },
  props: {
    searchParamType: String
  },
  computed: {
    searchResult: function() {
      console.log(this.results)
      return this.normalizeSearchResult(this.results, this.searchType)
    },
    ...mapState(["results", "pageSize", "pageIndex", "searchType"]),
    ...mapGetters(["resultIsEmpty"])
  },
  methods: {
    ...mapMutations(["setPageSize", "setPageIndex"]),
    navigateToPath: function(path) {
      this.$router.push(path);
    },
    normalizeSearchResult: function (resultList, searchType) {
      if (searchType === 'recruit') {
        return resultList.map(result => {
          return {
            resultTitle: result.jobTitle,
            resultSubtitle: result.displayName,
            resultId: result.enRecruitId,
            resultType: 'recruit',
            resultDescription: `${result.positionSalary} | ${result.persons}人 | ${result.requireEdu} | ${result.workCity} | ${result.tag}`,
            resultDetailURL: `/job/${result.enRecruitId}`,
            resultImageURL: ''
          }
        })
      } else if (searchType === 'company') {
        return resultList.map(result => {
          return {
            resultTitle: result.displayName,
            resultSubtitle: '',
            resultId: result.enCompanyId,
            resultType: 'company',
            resultDescription: `${result.industry}`,
            resultDetailURL: `/company/${result.enCompanyId}`,
            // uncomment when image url is available
            // resultImageURL: result.logoLink,
            resultImageURL: ''
          }
        })
      } else {
        return []
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.search-result
  background: rgb(15, 28, 112)
</style>
