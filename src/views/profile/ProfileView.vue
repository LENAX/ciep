<template>
  <div class="profile-view bg-light">
    <DashboardHeader
      class="pt-4"
      :headerTitle="profile.personName"
      :headerDescription="`${profile.lastCompany} ${profile.lastPosition}`"
    >
      <template v-slot:headerImage>
        <img :src="profile.photoLink" alt class="img-fluid center-block logo" />
      </template>
    </DashboardHeader>
    <b-container>
      <b-row>
        <b-col>
          <b-card class="mt-3" title="个人基本信息">
            <b-card-text v-for="info in basicPersonalInfo" :key="info.name">
              <strong>{{info.name}}</strong>: {{ info.value }}
            </b-card-text>
          </b-card>
          <b-card class="mt-3" title="个人职业期望">
            <b-card-text v-for="info in personalExpectation" :key="info.name">
              <strong>{{info.name}}</strong>: {{ info.value }}
            </b-card-text>
          </b-card>
          <b-card class="mt-3 mb-3" title="自我评价">
            <b-card-text>
             {{ personalDescription }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader.vue'

export default {
  name: 'ProfileView',
  props: {
    personId: String
  },
  components: {
    DashboardHeader
  },
  computed: {
    basicPersonalInfo () {
      return [
        { name: '姓名', value: this.profile.personName },
        { name: '性别', value: this.profile.gender },
        { name: '手机号', value: this.profile.mobilePhone },
        { name: '邮箱', value: this.profile.email },
        { name: '毕业院校', value: this.profile.schoolName },
        { name: '毕业年份', value: this.profile.graduateYear },
        { name: '专业', value: this.profile.major },
        { name: '学历', value: this.profile.highestEdu },
        { name: '最后所在公司', value: this.profile.lastCompany },
        { name: '最后所在岗位', value: this.profile.lastPosition }
      ]
    },
    personalExpectation () {
      return [
        { name: '期望岗位', value: this.profile.personName },
        { name: '期望工作行业', value: this.profile.gender },
        { name: '期望薪酬', value: this.profile.mobilePhone },
        { name: '期望工作地点', value: this.profile.email }
      ]
    },
    personalDescription () {
      return this.profile.selfComment
    }
  },
  data () {
    return {
      profile: {
        mobilePhone: '18324052819',
        email: '25102181@qq.com',
        dob: '2016-10-10',
        gender: '男',
        personName: 'John Doe',
        schoolName: 'UCLA',
        major: '西湖大学',
        highestEdu: '本科',
        graduateYear: '2016',
        lastPosition: '全栈工程师',
        lastCompany: '腾讯科技有限公司',
        expectIndustry: '电子机械/塑胶/智能制造业,流/交通运输/仓储和邮政,电力/燃气及水的生产和供应',
        expectPosition: '西湖大学',
        expectSalary: '30-50万',
        expectWorkCity: '杭州',
        receiveSms: true,
        overseas: true,
        selfComment: '西湖大学在杭州，',
        photoLink: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150',
        remark: '电子机械/塑胶/智能制造业,流/交通运输/仓储和邮政,电力/燃气及水的生产和供电子机械/塑胶/智能制造业,流/交通运输/仓储和邮政,电力/燃气及水的生产和供'
      }
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.card
  border-radius: 4px
  border: 2px solid #ebeef5
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
</style>
