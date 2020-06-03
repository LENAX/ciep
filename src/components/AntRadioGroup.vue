<template>
  <div class="ant-radio-group ant-radio-group-outline">
    <AntRadio
      :checked="radio.checked"
      :name="radio.name"
      :value="radio.value"
      v-for="radio in radioInputs"
      :key="radio.name"
    />
  </div>
</template>

<script>
import AntRadio from '@/components/AntRadio.vue'

export default {
  name: 'AntRadioGroup',
  components: {
    AntRadio
  },
  props: {
    radioInputs: Array
  }
}
</script>

<style lang="sass" scoped>
.ant-radio-group
  -webkit-box-sizing: border-box
  box-sizing: border-box
  margin: 0
  padding: 0
  color: rgba(0,0,0,.65)
  font-size: 14px
  font-variant: tabular-nums
  line-height: 1.5715
  list-style: none
  -webkit-font-feature-settings: 'tnum'
  font-feature-settings: 'tnum'
  display: inline-block
  line-height: unset

</style>
