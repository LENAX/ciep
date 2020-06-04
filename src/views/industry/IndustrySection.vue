<template>
  <div class="industry-section">
    <section style="padding: 0px;"><img class="img-fluid" src="@/assets/img/ciep_banner2.jpg"></section>
    <div class="features-boxed">
        <b-container>
            <div class="intro">
                <h2 class="text-center">{{this.sections[parseInt(this.industryId)]}}</h2>
            </div>
            <b-row class="justify-content-center features">
                <b-col sm=6 md=5 lg=4 class="item" v-for="company in companies" :key="company.displayName">
                  <IconBox
                    :boxTitle="company.displayName"
                    description=""
                    :navigatePath="`/company/${company.companyId}`"
                  >
                    <!-- <img class="img-fluid" src="@/assets/img/company_logo/1.jpg" style="width: 136px;"> -->
                    <!-- 用http图片地址替换 -->
                    <font-awesome-icon class="box-icon" icon="building" />
                  </IconBox>
                </b-col>
            </b-row>
        </b-container>
    </div>
  </div>
</template>

<script>
import IconBox from '@/components/IconBox.vue'
import '@/assets/css/Features-Boxed.css'

export default {
  name: 'IndustrySection',
  components: {
    IconBox
  },
  props: ['industryId'],
  data () {
    return {
      sections: [
        '事业单位(医疗、教育)专区', '深圳市属国企专区', '电子信息行业专区',
        'AI智能行业专区', '新材料行业专区', '地产建筑行业专区'
      ],
      companies: [
        {
          companyId: 1,
          displayName: '宏飞国际',
          logoLink: '@/assets/img/company_logo/1.jpg'
        },
        {
          companyId: 2,
          displayName: '深圳腾讯科技股份有限公司',
          logoLink: '@/assets/img/company_logo/2.jpg'
        },
        {
          companyId: 3,
          displayName: 'ULSee',
          logoLink: '@/assets/img/company_logo/3.jpg'
        },
        {
          companyId: 4,
          displayName: 'Amazon',
          logoLink: '@/assets/img/company_logo/4.jpg'
        },
        {
          companyId: 5,
          displayName: '通众传媒',
          logoLink: '@/assets/img/company_logo/5.jpg'
        },
        {
          companyId: 6,
          displayName: '江苏银行',
          logoLink: '@/assets/img/company_logo/6.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
