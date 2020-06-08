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
          <b-col
            sm="12"
            md="8"
            lg="8"
            v-for="(result, index) in searchResult"
            :key="`search-result-item-${index}`"
            class="mt-1 mb-1"
          >
            <b-card class="p-4" :title="result.resultTitle" @click="navigateToPath(result.resultDetailURL)">
              <b-card-text>{{ result.resultDescription }}</b-card-text>
            </b-card>
          </b-col>
        </template>
      </FeatureBoxSection>
    </transition>
  </div>
</template>

<script>
import '@/assets/sass/particles.sass'
import SearchBar from '@/components/SearchBar.vue'
import FeatureBoxSection from '@/components/FeatureBoxSection.vue'

export default {
  name: 'SearchResults',
  components: {
    SearchBar,
    FeatureBoxSection
  },
  props: {
    searchParamType: String
  },
  computed: {
    searchResult: function () {
      return this.$route.params.searchParamType === 'recruit'
        ? this.normalizeSearchResult(this.recruitSearchResults)
        : this.normalizeSearchResult(this.companySearchResults)
    }
  },
  methods: {
    navigateToPath: function (path) {
      this.$router.push(path)
    },
    normalizeSearchResult: function (resultList) {
      if (this.$route.params.searchParamType === 'recruit') {
        return resultList.map(result => {
          return {
            resultTitle: result.jobTitle,
            resultId: result.recruitId,
            resultType: 'recruit',
            resultDescription: `${result.positionSalary} | ${result.persons}人 | ${result.requireEdu} | ${result.workCity} | ${result.tag}`,
            resultDetailURL: `/job/${result.recruitId}`,
            resultImageURL: ''
          }
        })
      } else if (this.$route.params.searchParamType === 'company') {
        return resultList.map(result => {
          return {
            resultTitle: result.displayName,
            resultId: result.companyId,
            resultType: 'company',
            resultDescription: `${result.industry}`,
            resultDetailURL: `/company/${result.companyId}`,
            // uncomment when image url is available
            // resultImageURL: result.logoLink,
            resultImageURL: ''
          }
        })
      } else {
        return []
      }
    }
  },
  data () {
    return {
      pageIndex: 0,
      pageSize: 10,
      searchType: this.$route.params.searchParamType,
      params: {
        jobFairId: 3,
        keyword: ''
      },
      total: 2,
      recruitSearchResults: [
        {
          companyId: 1,
          createDt: '2019-07-04 10:17:25',
          createdBy: 1,
          jobFairId: 21,
          jobRequirements: '职位要求1',
          jobResponsibilities: '岗位职责',
          jobTitle: 'java开发工程师',
          other: '其他信息',
          persons: 2,
          positionSalary: '5万以下',
          pubState: 1,
          recruitId: 5,
          requireEdu: '本科,大专',
          welfareTreatment: 'aaaaa',
          workCity: '深圳',
          tag: '计算机'
        },
        {
          companyId: 1,
          createDt: '2019-07-04 10:49:29',
          createdBy: 1,
          jobFairId: 2,
          jobRequirements: '职位要求',
          jobResponsibilities: '岗位职责',
          jobTitle: 'java开发工程师01',
          other: '其他信息',
          persons: 2,
          positionSalary: '5万以下',
          pubState: 1,
          recruitId: 8,
          requireEdu: '本科,大专',
          welfareTreatment: 'aaaaa',
          workCity: '深圳',
          tag: '计算机'
        }
      ],
      companySearchResults: [
        {
          address: '公司地址测试',
          city: '2020-01-01',
          companyId: 1,
          companyName: '公司名称测试',
          companyProp: '国家',
          companyScale: '1000-5000人',
          contactPerson: '小张',
          contactPhone: '13800138000',
          corporate: 'bbb',
          createDt: '2019-07-01 02:53:35',
          createdBy: 1,
          displayName: '显示名称测试',
          email: 'test@test.com',
          industry: '电子机械/塑胶/智能制造业,新能源/新材料,电子通讯业',
          introduction: '',
          logoLink: 'company/1/logo.jpg',
          mobilePhone: '13800138000',
          password: 'test001',
          status: 1,
          username: 'test001',
          validityPeriod: '3334',
          webSite: 'www.szhr.com'
        },
        {
          address: 'rencifdasfadsf',
          city: '2040-06-30',
          companyId: 21,
          companyName: 'test danwei ',
          companyProp: '',
          companyScale: '范德萨',
          contactPerson: '发大水法',
          contactPhone: '82409831',
          corporate: '',
          createDt: '2019-07-02 16:20:48',
          createdBy: 1,
          displayName: 'test danwei ',
          email: '251017488@qq.com',
          industry: '',
          introduction: '',
          logoLink: '',
          mobilePhone: '13760487239',
          password: 'user123456',
          status: 1,
          username: 'user123456',
          validityPeriod: '',
          webSite: 'https://www.szhr.com/'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.search-result
  background: rgb(15, 28, 112)
  // padding: 0 0 70px 0!important

// .auth-card
//   margin-top: 5vh
//   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)

// .login-tab
//   padding: 0 0 70px 0!important

// .reg-tab
//   padding: 0 0 5px 0!important

// .card-body
//   padding: 0 !important

// .login-form-container
//   height: 100%

// .w-30
//   width: 30% !important

// .w-70
//   width: 70% !important

// #particles-js
//   width: 100%
//   height: calc(100% - 100px)
//   position: absolute
</style>
