<template>
  <div class="about" id="about-section">
    <section style="padding: 0px;">
      <img class="img-fluid" src="@/assets/img/ciep_banner2.jpg" />
    </section>
    <div class="shadow-sm article-clean" style="background-color: rgb(255,255,255);">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2 text-justify">
            <div class="intro">
              <div class="text-center">
                <img class="img-fluid" src="@/assets/img/ciep_large_logo.png" />
              </div>
            </div>
            <div class="text">
              <p>
                中国国际人才交流大会是经国务院批准，目前我国唯一专门对外国专家组织、培训机构、专业人才开放的规模最大、规格最高的国家级、国际性的人才与智力交流盛会，是一个集人才、智力、技术、项目管理为一体的综合性大会。
                <br />
              </p>
              <p>“精英天下”中高级人才招聘会作为中国国际人才交流大会重要板块，每年均吸引上万名优秀的海内外中高级人才参会。本届精英天下将以云招聘平台+云端直播间相结合的新模式，通过互联网的传播优势，加大服务企业招揽优秀人才的力度。</p>
              <p>热线电话：400-886-5539</p>
              <p>主办单位：国家外国专家局、深圳市人民政府</p>
              <p>承办单位：深圳市外国专家局、深圳国际人才交流中心</p>
              <p>协办单位：深圳千里马国际猎头有限公司</p>
              <p>
                大会官网：
                <a href="http://www.ciep.gov.cn/" target="_blank">http://www.ciep.gov.cn/</a>
              </p>
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
  name: 'About'
}
</script>

<style lang="sass" scoped>
$break-small: 320px
$break-large: 1200px

#about-section
  -webkit-box-shadow: 0px -4px 5px 0px rgba(0,0,0,0.75)
  -moz-box-shadow: 0px -4px 5px 0px rgba(0,0,0,0.75)
  box-shadow: 0px -4px 5px 0px rgba(0,0,0,0.75)

p
  font-family: 'Helvetica Neue'
  @media screen and (max-width: $break-small)
    font-size: 14px !important

  @media screen and (min-width: $break-large)
    font-size: 18px !important
</style>
