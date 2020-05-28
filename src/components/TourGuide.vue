<template>
  <div class="features-boxed">
    <b-container>
      <b-row class="justify-content-center features">
        <b-col class="item" sm="12" md="6" lg="3">
          <div class="box">
            <b-icon class="guide-icon" icon="bounding-box"></b-icon>
            <h3 class="name">行业导览</h3>
            <router-link to="/">查看详情</router-link>
          </div>
        </b-col>
        <b-col class="item" sm="12" md="6" lg="3">
          <div class="box">
            <b-icon class="guide-icon" icon="people"></b-icon>
            <h3 class="name">我要参会</h3>
            <router-link to="/">查看详情</router-link>
          </div>
        </b-col>
        <b-col class="item" sm="12" md="6" lg="3">
          <div class="box">
            <b-icon class="guide-icon" icon="building"></b-icon>
            <h3 class="name">我要参展</h3>
            <router-link to="/">查看详情</router-link>
          </div>
        </b-col>
        <b-col class="item" sm="12" md="6" lg="3">
          <div class="box">
            <b-icon class="guide-icon" icon="layout-text-sidebar"></b-icon>
            <h3 class="name">大会简介</h3>
            <router-link to="/about">查看详情</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import '@/assets/css/Features-Boxed.css'

export default {
  name: 'TourGuide'
}
</script>

<style lang="sass" scoped>
.guide-icon
  font-size: 40px
  margin-bottom: 10px
</style>
