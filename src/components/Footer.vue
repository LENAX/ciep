<template>
  <div class="footer-clean" style="background-color: #fcfcfc;" id="footer">
    <footer>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-4 col-sm-4 col-md-3 item">
            <h3>
              <strong>导航链接</strong>
            </h3>
            <ul>
              <li>
                <a href="http://www.ciep.gov.cn/" target="_blank">大会官网</a>
              </li>
              <li>
                <router-link to="/">精英天下首页</router-link>
              </li>
              <li>
                <router-link to="/industries">行业导览</router-link>
              </li>
              <li>
                <a href="https://www.szhr.com.cn/" target="_blank">深圳人才网</a>
              </li>
            </ul>
          </div>
          <div class="col-4 col-sm-4 col-md-3 text-center item">
            <h3>大会服务</h3>
            <ul>
              <li>
                <router-link to="/regguide">企业注册</router-link>
              </li>
              <li>
                <router-link to="/auth/register">人才注册</router-link>
              </li>
              <li>
                <router-link to="/about">大会简介</router-link>
              </li>
              <li>
                <router-link to="/live">宣讲直播</router-link>
              </li>
            </ul>
          </div>
          <div class="col-4 text-right">
            <img class="img-fluid" src="@/assets/img/qrcode_cnszhr.jpg" />
            <p class="copyright">深圳千里马国际猎头有限公司</p>
            <p class="copyright">
              ICP备案编号粤
              <a href="http://www.miitbeian.gov.cn/" target="_blank">B2-20050045号</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import '@/assets/css/Footer-Clean.css'

export default {
  name: 'Footer'
}
</script>
