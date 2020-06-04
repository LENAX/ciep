<template>
  <div class="job-page bg-light">
    <DashboardHeader
      :headerTitle="company.displayName"
      :headerDescription="company.industry"
    >
      <template v-slot:headerImage>
        <img src="@/assets/img/company_logo/3.jpg" alt class="img-fluid center-block logo" />
      </template>
    </DashboardHeader>
    <section class="single-job-section single-job-section-2">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <JobDetailBox
              :jobTitle="job.jobTitle"
              :location="job.workCity"
              :salary="job.positionSalary"
              type="全职"
            />
          </div>
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="row">
              <div class="col-md-8 col-sm-12 col-xs-12">
                <JobDescription
                  :descriptions="formattedJobDescriptions"
                />
              </div>
              <div class="col-md-4 col-sm-12 col-xs-12">
                <aside>
                  <CompanyContact
                    :address="company.address"
                    :webSite="company.webSite"
                    :companyProp="company.companyProp"
                  />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import '@/assets/css/tab_panel.css'

import DashboardHeader from '@/components/DashboardHeader.vue'
import JobDetailBox from '@/components/JobDetailBox.vue'
import JobDescription from '@/components/JobDescription.vue'
import CompanyContact from '@/components/CompanyContact.vue'

export default {
  name: 'JobView',
  props: {
    id: String
  },
  components: {
    DashboardHeader,
    JobDetailBox,
    JobDescription,
    CompanyContact
  },
  computed: {
    formattedJobDescriptions () {
      return [{
        descriptionTitle: '岗位职责',
        descriptionItems: this.splitDescription(this.job.jobResponsibilities)
      }, {
        descriptionTitle: '任职要求',
        descriptionItems: this.splitDescription(this.job.jobRequirements)
      }, {
        descriptionTitle: '福利待遇',
        descriptionItems: this.splitDescription(this.job.welfareTreatment)
      }]
    }
  },
  methods: {
    splitDescription: (descString) => {
      let splitChar = ';'
      if (descString.includes('；')) {
        splitChar = '；'
      }
      return descString.split(splitChar)
    }
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
        introduction:
          '深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。 是中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网企业之一。腾讯多元化的服务包括：社交和通信服务QQ及微信/WeChat、社交网络平台QQ空间、腾讯游戏旗下QQ游戏平台、门户网站腾讯网、腾讯新闻客户端和网络视频服务腾讯视频等。2004年6月16日，腾讯公司在香港联交所主板公开上市（股票代号00700），董事会主席兼首席执行官是马化腾。',
        logoLink: 'company/1/logo.jpg',
        webSite: 'www.szhr.com'
      },
      job: {
        companyId: 1,
        createDt: '2020-05-24 10:17:25',
        createdBy: 1,
        jobFairId: 21,
        jobRequirements: '1、熟练掌握PHP/GO/python的一种或多种，其中一种需要3年以上实际使用经验；2、熟悉SQL，并了解常用的SQL优化技巧。熟悉MySQL，并掌握常用性能优化技巧；3、熟悉Redis、MongoDB等NoSQL技术，有大规模系统设计和开发经验者优先；4、熟悉多线程、分布式服务开发优先；5、GitHub有开源项目维护的优先',
        jobResponsibilities: '1、参与App新模块的架构设计；2、完成核心代码编写',
        jobTitle: 'go后台开发（16薪）',
        other: '其他信息',
        persons: 2,
        positionSalary: '30K-50K/月',
        pubState: 1,
        recruitId: 5,
        requireEdu: '本科',
        welfareTreatment: '',
        workCity: '广东/深圳/南山区'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
