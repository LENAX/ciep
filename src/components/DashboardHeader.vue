<template>
  <section class="company-dashboard">
    <b-container>
      <b-row>
        <b-col md="12" sm="12" class="nopadding">
          <div class="dashboard-header">
            <b-row>
              <b-col md="6" sm="12" class="col-xs-12">
                <div class="dashboard-header-logo-box">
                  <slot name="headerImage"></slot>
                  <h5>{{ headerTitle }}</h5>
                  <p>{{ headerDescription }}</p>
                </div>
              </b-col>

              <b-col md="4" sm="3" class="d-none d-md-block" v-if="subHeader || subHeaderDescription">
                <div class="rad-info-box">
                  <span style="text-align: right; font-size: 18px">
                    <slot name="secondaryHeaderImage"></slot>
                    <span style="font-size: 18px">{{subHeader}}</span>
                  </span>
                  <span class="value">
                    <span>{{subHeaderDescription}}</span>
                  </span>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'DashboardHeader',
  props: {
    headerTitle: String,
    headerDescription: String,
    subHeader: String,
    subHeaderDescription: String
  }
}
</script>

<style lang="sass" scoped>

.company-dashboard
  padding-bottom: 40px;
  text-align: center;
  background: url('../assets/img/ciep_theme_bg.jpeg') no-repeat center center / cover;

.dashboard-header-logo-box
  background: white none repeat scroll 0 0 !important;
  border: 8px solid rgba(204, 204, 204, 0.5);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  padding: 20px;

.rad-info-box
  background: #FFF;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  border: 10px solid;
  border-color: rgba(204, 204, 204, 0.5);
  padding: 18px;
  margin-bottom: 30px;

.rad-info-box .value
  font-size: 30px;
  font-weight: 600;
  margin-top: 5px;

.rad-info-box .value, .rad-info-box .title-dashboard
  color: #242424;
  display: block;
  position: relative;
  text-align: center;
  z-index: 10;
</style>
