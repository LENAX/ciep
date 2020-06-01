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
</style>
