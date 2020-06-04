<template>
  <div class="features-boxed">
    <b-container>
      <b-row class="justify-content-center features">
        <b-col class="item" sm="12" md="6" lg="3">
          <IconBox
            boxTitle="行业导览"
            description=""
            navigatePath="/industries"
          >
            <b-icon class="guide-icon" icon="bounding-box"></b-icon>
          </IconBox>
        </b-col>
        <b-col class="item" sm="12" md="6" lg="3">
          <IconBox
            boxTitle="我要参会"
            description=""
            navigatePath="/auth/register"
          >
            <b-icon class="guide-icon" icon="people"></b-icon>
          </IconBox>
        </b-col>
        <b-col class="item" sm="12" md="6" lg="3">
          <IconBox
            boxTitle="企业参展"
            description=""
            navigatePath="/regguide"
          >
            <b-icon class="guide-icon" icon="building"></b-icon>
          </IconBox>
        </b-col>
        <b-col class="item" sm="12" md="6" lg="3">
          <IconBox
            boxTitle="大会简介"
            description=""
            navigatePath="/about"
          >
            <b-icon class="guide-icon" icon="layout-text-sidebar"></b-icon>
          </IconBox>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import IconBox from '@/components/IconBox.vue'

export default {
  name: 'TourGuide',
  components: {
    IconBox
  }
}
</script>

<style lang="sass" scoped>
.guide-icon
  font-size: 40px
  margin-bottom: 10px
</style>
