<template>
  <div class="job-box" @click="navigateToPath">
    <b-row align-h="center">
      <b-col md=8 sm=8 class="col-xs-12">
        <div class="job-title-box pl-3">
          <router-link :to="jobDetailUrl">
            <div class="job-title">{{ jobTitle }}</div>
          </router-link>
          <span class="comp-name">{{ jobInfoSummary }}</span>
        </div>
      </b-col>
      <b-col md=4 sm=4 class="text-center d-none d-sm-block d-md-block d-lg-block" align-self="center">
        <button class="btn btn-custom">投递简历</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'JobBox',
  props: {
    jobDetailUrl: String,
    jobTitle: String,
    jobInfoSummary: String
  },
  methods: {
    navigateToPath: function () {
      if (this.jobDetailUrl.includes('http') || this.jobDetailUrl.includes('www.')) {
        window.location = this.jobDetailUrl
      } else {
        this.$router.push({ path: this.jobDetailUrl })
      }
    }
  }
}
</script>

<style lang="sass">
.btn-custom
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: #fff;
  border: 1px solid #DCDFE6;
  border-color: #DCDFE6;
  background-color: #409eff;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

.job-box
  background-color: #fff;
  clear: both;
  margin-bottom: 10px;
  overflow: hidden;
  padding: 30px 0;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)

.job-title-box
  color: #242424;

.job-title-box .job-title
  ext-transform: capitalize;
  color: #242424;
  font-size: 20px;
  font-weight: 600;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
</style>
