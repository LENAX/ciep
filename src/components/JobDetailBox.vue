<template>
  <div class="single-job-detail-box">
    <b-row>
      <b-col md=9 sm=12 class="col-xs-12">
        <div class="job-detail-2">
          <h2>{{ jobTitle }}</h2>
          <div class="job-detail-meta pl-0">
            <ul class="pl-0">
              <li>
                <font-awesome-icon class="blue" icon="map-marker" /> {{location}}
              </li>
              <li>
                <font-awesome-icon class="green" icon="money-check" /> {{salary}}
              </li>
              <li>
                <font-awesome-icon class="red" icon="clock" /> {{type}}
              </li>
            </ul>
          </div>
        </div>
      </b-col>
      <b-col md=3 sm=12 class="col-xs-12">
        <a class="btn btn-success btn-lg text-light">投递简历</a>
      </b-col >
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'JobDetailBox',
  props: {
    jobTitle: String,
    location: String,
    salary: String,
    type: String
  }
}
</script>

<style lang="sass" scoped>
.blue
  color: #409EFF

.green
  color: #67C23A

.red
  color: #F56C6C

.single-job-section
  overflow: hidden;
  position: relative;

.single-job-section-2 .single-job-detail-box
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;

.single-job-section-2 .single-job-detail-box .job-detail-meta ul li 
  display: inline;
  margin-right: 15px;
  font-size: 16px;
  color: #777;
  padding-left: 0px;

.single-job-detail-box .apply-job
  padding-top: 20px;

.apply-job
  position: relative;
  overflow: hidden;

.single-job-section-2 .single-job-detail-box .job-detail-2 h2
  margin-top: 0;
  text-transform: capitalize;
</style>
