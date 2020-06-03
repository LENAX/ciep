<template>
  <div class="live-schedules">
    <FeatureBoxSection sectionTitle="云招聘直播日程">
      <template v-slot:banner>
        <img class="img-fluid" src="@/assets/img/ciep_banner2.jpg" />
      </template>
      <template v-slot:feature-boxes>
        <b-col
          sm="6"
          md="4"
          lg="4"
          v-for="schedule in liveSchedules"
          :key="schedule.name"
          class="item"
        >
          <IconBox
            :boxTitle="schedule.name"
            :description="schedule.startTime"
            :navigatePath="schedule.liveURL"
          >
            <font-awesome-icon
              v-if="schedule.coverURL.length === 0"
              class="box-icon"
              icon="video"
            />
            <img
              :src="schedule.coverURL"
              v-if="schedule.coverURL.length > 0"
              class="img-fluid"
            />
          </IconBox>
        </b-col>
      </template>
    </FeatureBoxSection>
  </div>
</template>

<script>
import FeatureBoxSection from '@/components/FeatureBoxSection.vue'
import IconBox from '@/components/IconBox.vue'

export default {
  name: 'LiveView',
  components: {
    FeatureBoxSection,
    IconBox
  },
  data () {
    return {
      liveSchedules: [{
        name: '中国国际人才交流大会开幕式',
        startTime: '开始时间：2020-06-15 10:30',
        liveURL: '#',
        coverURL: ''
      }, {
        name: '行业云招聘直播间',
        startTime: '开始时间：2020-06-18 10:30',
        liveURL: '#',
        coverURL: ''
      }, {
        name: '行业云招聘直播间',
        startTime: '开始时间：2020-06-18 10:30',
        liveURL: '#',
        coverURL: ''
      }, {
        name: '行业云招聘直播间',
        startTime: '开始时间：2020-06-18 10:30',
        liveURL: '#',
        coverURL: ''
      }, {
        name: '行业云招聘直播间',
        startTime: '开始时间：2020-06-18 10:30',
        liveURL: '#',
        coverURL: ''
      }, {
        name: '行业云招聘直播间',
        startTime: '开始时间：2020-06-18 10:30',
        liveURL: '#',
        coverURL: ''
      }]
    }
  }
}
</script>

<style lang="sass" scoped>
.box-icon
  font-size: 60px;
  color: #1485ee;
  margin-top: 20px;
  margin-bottom: 35px;
</style>
