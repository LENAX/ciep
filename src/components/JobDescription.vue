<template>
  <div class="single-job-page-2 job-short-detail card">
    <div class="card-content pl-3 pr-1">
      <div class="description" v-for="description in descriptions" :key="description.descriptionTitle">
        <div class="desc-block" v-if="description.descriptionItems.length > 0 && description.descriptionItems[0].length > 0">
          <div class="heading-inner">
            <p class="title">{{description.descriptionTitle}}</p>
          </div>
          <ul class="desc-points">
            <li v-for="descPoint in description.descriptionItems" :key="descPoint">
              <font-awesome-icon icon="caret-right" class="blue"/>
              {{descPoint}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDescription',
  props: {
    descriptions: Array
  }
}
</script>

<style lang="sass" scoped>
.card
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  border-radius: 2px
  border: 2px solid #ebeef5

.heading-inner
  margin: 10px 0 20px 0
  display: block
  width: 100%
  position: relative
  overflow: hidden

.heading-inner .title
  background-color: #fff !important
  border-bottom: 2px solid #29aafe
  font-size: 20px
  font-weight: 600
  padding: 10px 0
  position: relative
  text-transform: capitalize
  float: left
  color: #242424
  margin-bottom: 0

ul
  text-decoration: none
  list-style: none
  padding: 0px

ul.desc-points li i
  margin-right: 15px
  color: #29aafe

.blue
  color: #29aafe
</style>
