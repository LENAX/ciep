<template>
  <div class="feature-box-section">
    <slot name="banner"></slot>
    <div class="features-boxed">
      <b-container>
        <div class="intro">
          <h2 class="text-center">{{sectionTitle}}</h2>
          <p class="text-center" v-if="sectionDescription">{{sectionDescription}}</p>
        </div>
        <b-row class="justify-content-center features">
          <slot name="feature-boxes"></slot>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureBoxSection',
  props: {
    sectionTitle: String,
    sectionDescription: String
  }
}
</script>

<style lang="sass" scoped>
.features-boxed .intro
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto;

.features-boxed .features
    padding: 50px 0;

.features-boxed .item .box
    text-align: center;
    padding: 30px;
    background-color: #fff;
    margin-bottom: 30px;

.features-boxed .item .name
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 8px;
    margin-top: 0;
    color: inherit;

.features-boxed .item .description
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 20px;
</style>
