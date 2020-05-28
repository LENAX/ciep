<template>
  <b-modal id="contact-modal" title="联系方式" hide-footer>
    <p>咨询电话: 4008865539</p>
    <p>洽谈合作: szhr@szhr.com</p>
    <p>咨询电话: 4008865539</p>
    <p>微信公众号: cnszhr</p>
    <p>业务范围: 网络招聘、委托招聘、招聘外包</p>
    <p>地址: 深圳市罗湖区宝安北路粤港澳大湾区人才产业园</p>
    <hr />
    <b-button
      class="mt-3 float-right"
      variant="outline-danger"
      @click="$bvModal.hide('contact-modal')"
    >关闭</b-button>
  </b-modal>
</template>
