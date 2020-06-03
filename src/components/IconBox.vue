<template>
  <div class="box" v-on:click="navigateToPath">
    <slot></slot>
    <h3 class="name">{{ boxTitle }}</h3>
    <p class="description">{{ description }}</p>
    <router-link class="learn-more" :to="{path: this.navigatePath}">
      查看详情
      <b-icon icon="chevron-double-right"></b-icon>
    </router-link>
  </div>
</template>

<script>
import '@/assets/css/Features-Boxed.css'

export default {
  name: 'IconBox',
  props: {
    boxTitle: String,
    description: String,
    navigatePath: String
  },
  methods: {
    navigateToPath: function () {
      if (this.navigatePath.includes('http') || this.navigatePath.includes('www.')) {
        window.location = this.navigatePath
      } else {
        this.$router.push({ path: this.navigatePath })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.learn-more
  font-family: Helvetica

.box
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  cursor: pointer
  -webkit-transition: all .2s cubic-bezier(.645,.045,.355,1)
  transition: all .2s cubic-bezier(.645,.045,.355,1)

.box:hover
  -webkit-box-shadow: 0 6px 16px -8px rgba(0,0,0,.08), 0 9px 28px 0 rgba(0,0,0,.05), 0 12px 48px 16px rgba(0,0,0,.03);
  box-shadow: 0 6px 16px -8px rgba(0,0,0,.08), 0 9px 28px 0 rgba(0,0,0,.05), 0 12px 48px 16px rgba(0,0,0,.03);
</style>
