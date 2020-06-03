<template>
  <label :class="radioButtonWrapperClass(isChecked)">
    <span :class="radioButtonClass(isChecked)">
      <input type="radio" class="ant-radio-button-input" :value="value" :checked="isChecked ? true : false"/>
      <span class="ant-radio-button-inner"></span>
    </span>
    <span>{{name}}</span>
  </label>
</template>

<script>
export default {
  name: 'AntRadio',
  props: {
    isChecked: Boolean,
    name: String,
    value: String
  },
  methods: {
    handleClick () {
      return !this.isChecked
    },
    radioButtonWrapperClass: (checked) => {
      return checked ? 'ant-radio-button-wrapper ant-radio-button-wrapper-checked' : 'ant-radio-button-wrapper'
    },
    radioButtonClass: (checked) => {
      return checked ? 'ant-radio-button ant-radio-button-checked' : 'ant-radio-button'
    }
  }
}
</script>

<style lang="sass" scoped>
.ant-radio-button-wrapper:first-child
  border-left: 1px solid #d9d9d9
  border-radius: 2px 0 0 2px

.ant-radio-button-wrapper
  position: relative
  display: inline-block
  height: 32px
  margin: 0
  padding: 0 15px
  color: rgba(0,0,0,.65)
  line-height: 30px
  background: #fff
  border: 1px solid #d9d9d9
  border-top-width: 1.02px
  border-left-width: 0
  cursor: pointer
  -webkit-transition: color .3s,background .3s,border-color .3s,-webkit-box-shadow .3s
  transition: color .3s,background .3s,border-color .3s,-webkit-box-shadow .3s
  transition: color .3s,background .3s,border-color .3s,box-shadow .3s
  transition: color .3s,background .3s,border-color .3s,box-shadow .3s,-webkit-box-shadow .3s

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)
  z-index: 1
  color: #1890ff
  background: #fff
  border-color: #1890ff

.ant-radio-button-wrapper>.ant-radio-button
  display: block
  width: 0
  height: 0
  margin-left: 0

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before
  background-color: #1890ff

.ant-radio-button-wrapper:not(:first-child)::before
  position: absolute
  top: -1px
  left: -1px
  display: block
  -webkit-box-sizing: content-box
  box-sizing: content-box
  width: 1px
  height: 100%
  padding: 1px 0
  background-color: #d9d9d9
  -webkit-transition: background-color .3s
  transition: background-color .3s
  content: ''

.ant-radio-button-wrapper .ant-radio-inner, .ant-radio-button-wrapper input[type=checkbox], .ant-radio-button-wrapper input[type=radio]
  width: 0
  height: 0
  opacity: 0
  pointer-events: none

[class^=ant-], [class*=ant-], [class^=ant-] *, [class*=ant-] *, [class^=ant-] *::before, [class*=ant-] *::before, [class^=ant-] *::after, [class*=ant-] *::after
  -webkit-box-sizing: border-box
  box-sizing: border-box
</style>
