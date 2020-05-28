<template>
  <div class="company-register-guide">
    <section style="padding: 0px;"><img class="img-fluid" src="@/assets/img/ciep_banner2.jpg"></section>
    <div class="bg-light shadow-sm article-clean" style="background-color: rgb(255,255,255);">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2 text-justify">
                    <div class="heading-inner">
                        <h3 class="title">报名热线</h3>
                    </div>
                    <div class="text">
                        <p>400-886-5539<br></p>
                    </div>
                    <div class="heading-inner">
                        <h3 class="title">参会要求</h3>
                    </div>
                    <div class="text">
                        <p>用人单位须为合法注册企事业单位，需提供年薪不低于人民币20万元的中高级管理、专业技术类职位。<br></p>
                    </div>
                    <div class="heading-inner">
                        <h3 class="title">参会方式:</h3>
                    </div>
                    <div class="text">
                        <p>（一）参会单位请填写《参会回执》，与营业执照复印件、职位需求表一同发送至深圳千里马国际猎头有限公司；<br></p>
                        <p>（二）展位安排采取先到先得、规模优先的原则，报名截止日期为2020年6月30日；<br></p>
                        <p>（三）参会费用请汇至深圳千里马国际猎头有限公司指定账户（详情见《参会回执》）。<br></p>
                    </div>
                    <div class="heading-inner">
                      <!-- 附上附件下载地址 -->
                      <h3 class="text-center">附件：参会回执</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/Article-Clean.css'

export default {
  name: 'CompanyRegisterGuide'
}
</script>

<style lang="sass" scoped>
.text p
  font-size: 16px;
  font-family: 'Helvetica Neue'

.title
  font-size: 20px;

h3
  font-family: 'Helvetica Neue'

.heading-inner
  margin-bottom: 30px;
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 20px;

.heading-inner .title
  background-color: #f8f9fa!important;
  border-bottom: 2px solid #29aafe;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0;
  position: relative;
  text-transform: capitalize;
  float: left;
  color: #242424;
  margin-bottom: 0;
  font-family: 'Helvetica Neue';
</style>
