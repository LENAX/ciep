<template>
  <div class="industry-section">
    <section style="padding: 0px;">
      <img class="img-fluid" src="@/assets/img/ciep_banner2.jpg" />
    </section>
    <div class="features-boxed">
      <div class="container">
        <div class="intro">
          <h2 class="text-center">参展行业专区</h2>
          <p class="text-center"></p>
        </div>
        <div class="row justify-content-center features">
          <div class="col-sm-6 col-md-5 col-lg-4 item">
            <IconBox
              boxTitle="事业单位(医疗、教育)专区"
              description=""
              navigatePath="http://www.ciep.gov.cn/"
            >
              <font-awesome-icon class="box-icon" icon="calendar-plus" />
            </IconBox>
          </div>
          <div class="col-sm-6 col-md-5 col-lg-4 item">
            <IconBox
              boxTitle="深圳市属国企专区"
              description=""
              navigatePath="/"
            >
              <font-awesome-icon class="box-icon" icon="cogs" />
            </IconBox>
          </div>
          <div class="col-sm-6 col-md-5 col-lg-4 item">
            <IconBox
              boxTitle="电子信息行业专区"
              description=""
              navigatePath="/"
            >
              <font-awesome-icon class="box-icon" icon="microchip" />
            </IconBox>
          </div>
          <div class="col-sm-6 col-md-5 col-lg-4 item">
            <IconBox
              boxTitle="电子信息行业专区"
              description=""
              navigatePath="/"
            >
              <font-awesome-icon class="box-icon" icon="robot" />
            </IconBox>
          </div>
          <div class="col-sm-6 col-md-5 col-lg-4 item">
            <IconBox
              boxTitle="新材料"
              description=""
              navigatePath="/"
            >
              <font-awesome-icon class="box-icon" icon="flask" />
            </IconBox>
          </div>
          <div class="col-sm-6 col-md-5 col-lg-4 item">
            <IconBox
              boxTitle="地产建筑"
              description=""
              navigatePath="/"
            >
              <font-awesome-icon class="box-icon" icon="building" />
            </IconBox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import IconBox from '@/components/IconBox.vue'

export default {
  name: 'Industries',
  components: {
    IconBox
  }
}
</script>

<style lang="sass">
.box-icon
  font-size: 60px;
  color: #1485ee;
  margin-top: 20px;
  margin-bottom: 35px;
</style>