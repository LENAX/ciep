<template>
  <div class="industry-section">
    <section style="padding: 0px;"><img class="img-fluid" src="@/assets/img/ciep_banner2.jpg"></section>
    <div class="features-boxed">
        <b-container>
            <div class="intro">
                <h2 class="text-center">{{this.sectionIdList[parseInt(this.industryId)].name}}</h2>
            </div>
            <b-row class="justify-content-center features">
                <b-col sm=6 md=5 lg=4 class="item">
                  <IconBox
                    boxTitle=""
                    description=""
                    navigatePath="/industries"
                  >
                    <img class="img-fluid" src="@/assets/img/22fb0cee7e1f3bde58293de743871417.jpg" style="width: 136px;">
                  </IconBox>
                </b-col>
                <b-col sm=6 md=4 lg=3 class="item">
                  <IconBox
                    boxTitle=""
                    description=""
                    navigatePath="/industries"
                  >
                    <img class="img-fluid" src="@/assets/img/289dff07669d7a23de0ef88d2f7129e7.jpg">
                  </IconBox>
                </b-col>
                <b-col sm=6 md=4 lg=3 class="item">
                  <IconBox
                    boxTitle=""
                    description=""
                    navigatePath="/industries"
                  >
                    <img class="img-fluid" src="@/assets/img/42d6c7d61481d1c21bd1635f59edae05.png" style="width: 120px;">
                  </IconBox>
                </b-col>
                <b-col sm=6 md=4 lg=3 class="item">
                  <IconBox
                    boxTitle=""
                    description=""
                    navigatePath="/industries"
                  >
                    <img class="img-fluid" src="@/assets/img/950a4152c2b4aa3ad78bdd6b366cc179.jpg" style="width: 171px;">
                  </IconBox>
                </b-col>
                <b-col sm=6 md=4 lg=3 class="item">
                  <IconBox
                    boxTitle=""
                    description=""
                    navigatePath="/industries"
                  >
                    <img class="img-fluid" src="@/assets/img/66368270ffd51418ec58bd793f2d9b1b.jpg" style="width: 205px;">
                  </IconBox>
                </b-col>
                <b-col sm=6 md=4 lg=3 class="item">
                  <IconBox
                    boxTitle=""
                    description=""
                    navigatePath="/industries"
                  >
                    <img class="img-fluid" src="@/assets/img/979d472a84804b9f647bc185a877a8b5.png" style="width: 207px;">
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

<style lang="sass" scoped>

</style>
