<template>
  <div class="industry-section">
    <img class="img-fluid" src="@/assets/img/ciep_banner2.jpg" />
    <div class="features-boxed">
      <b-container>
        <div class="intro">
          <h2 class="text-center">参展行业专区</h2>
          <p class="text-center"></p>
        </div>
        <b-row class="features">
          <b-col sm=6 md=4 lg=4 v-for="(industry, index) in sectionIdList" :key="industry.name" class="item">
            <IconBox
              :boxTitle="industry.name"
              description=""
              :navigatePath='`/industry/${index}`'
            >
              <font-awesome-icon class="box-icon" :icon="industry.icon" />
            </IconBox>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import IconBox from '@/components/IconBox.vue'

export default {
  name: 'Industries',
  components: {
    IconBox
  },
  data () {
    return {
      sectionIdList: [
        {
          name: '事业单位(医疗、教育)专区',
          icon: 'medkit'
        },
        {
          name: '深圳市属国企专区',
          icon: 'cogs'
        },
        {
          name: '电子信息行业专区',
          icon: 'microchip'
        },
        {
          name: 'AI智能行业专区',
          icon: 'robot'
        },
        {
          name: '新材料行业专区',
          icon: 'flask'
        },
        {
          name: '地产建筑行业专区',
          icon: 'building'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.box-icon
  font-size: 60px;
  color: #1485ee;
  margin-top: 20px;
  margin-bottom: 35px;
</style>
