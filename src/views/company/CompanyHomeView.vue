<template>
  <div class="company-home">
    <DashboardHeader
      :headerTitle="company.displayName"
      :headerDescription="company.industry"
      subHeader="在招职位"
      :subHeaderDescription="`${jobList.length}`"
    >
      <template v-slot:headerImage>
        <img
          src="@/assets/img/company_logo/3.jpg"
          alt=""
          class="img-fluid center-block logo"
        />
      </template>
      <template v-slot:secondaryHeaderImage>
        <font-awesome-icon class="box-icon" icon="briefcase" />
      </template>
    </DashboardHeader>
    <b-tabs content-class="mt-2" justified class="bg-light pt-2 pb-2 pl-3 pr-3">
      <b-tab title="公司详情" active class="pt-2 pb-2">
        <b-container>
          <b-row>
            <b-col>
              <b-card title="公司简介">
                <b-card-text>{{ company.introduction }}</b-card-text>
              </b-card>
              <b-card class="mt-3" title="公司地址">
                <b-card-text>{{ company.address }}</b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab title="热招职位">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="job-box-list" v-for="job in jobList" :key="job.jobTitle">
                <JobBox
                  :jobDetailUrl="`/job/${job.recruitId}`"
                  :jobTitle="job.jobTitle"
                  :jobInfoSummary="toJobSummary(job)" />
              </div>
            </div>
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader.vue'
import JobBox from '@/components/JobBox.vue'
import '@/assets/css/tab_panel.css'

export default {
  name: 'CompanyHomeView',
  components: {
    DashboardHeader,
    JobBox
  },
  props: {
    id: String
  },
  data () {
    return {
      company: {
        address: '深圳市南山区南山区科技园',
        city: '2020-01-01',
        companyId: 1,
        companyName: '深圳腾讯科技股份有限公司',
        companyProp: '国家',
        companyScale: '1000-5000人',
        corporate: 'bbb',
        displayName: '深圳腾讯科技股份有限公司',
        email: 'test@test.com',
        industry: '电子机械/塑胶/智能制造业,新能源/新材料,电子通讯业',
        introduction: '深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。 是中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网企业之一。腾讯多元化的服务包括：社交和通信服务QQ及微信/WeChat、社交网络平台QQ空间、腾讯游戏旗下QQ游戏平台、门户网站腾讯网、腾讯新闻客户端和网络视频服务腾讯视频等。2004年6月16日，腾讯公司在香港联交所主板公开上市（股票代号00700），董事会主席兼首席执行官是马化腾。',
        logoLink: 'company/1/logo.jpg',
        webSite: 'www.szhr.com'
      },
      jobList: [{
        companyId: 1,
        createDt: '2019-07-04 10:17:25',
        createdBy: 1,
        jobFairId: 21,
        jobRequirements: '3-5年',
        jobResponsibilities: '岗位职责',
        jobTitle: 'go后台开发（16薪）',
        other: '其他信息',
        persons: 2,
        positionSalary: '30K-50K/月',
        pubState: 1,
        recruitId: 5,
        requireEdu: '本科',
        welfareTreatment: 'aaaaa',
        workCity: '广东/深圳/南山区'
      }, {
        companyId: 1,
        createDt: '2019-07-04 10:17:25',
        createdBy: 1,
        jobFairId: 21,
        jobRequirements: '3-5年',
        jobResponsibilities: '岗位职责',
        jobTitle: '业务管理PM',
        other: '其他信息',
        persons: 2,
        positionSalary: '30K-50K/月',
        pubState: 1,
        recruitId: 6,
        requireEdu: '本科',
        welfareTreatment: 'aaaaa',
        workCity: '广东/深圳/南山区'
      }, {
        companyId: 1,
        createDt: '2019-07-04 10:17:25',
        createdBy: 1,
        jobFairId: 21,
        jobRequirements: '3-5年',
        jobResponsibilities: '岗位职责',
        jobTitle: 'C++ [若干人]全职',
        other: '其他信息',
        persons: 2,
        positionSalary: '30K-50K/月',
        pubState: 1,
        recruitId: 7,
        requireEdu: '本科',
        welfareTreatment: 'aaaaa',
        workCity: '广东/深圳/南山区'
      }]
    }
  },
  methods: {
    toJobSummary (job) {
      return `${job.positionSalary} | ${job.workCity} | ${job.requireEdu}`
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)

.logo
  width: 120px

.box-icon
  font-size: 24px
  margin: 0 10px 0 10px
</style>
