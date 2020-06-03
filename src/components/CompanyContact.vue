<template>
  <div class="company-detail widget">
    <div class="widget-heading">
      <span class="title">公司简介</span>
    </div>
    <div class="company-contact-detail">
      <table>
        <tbody>
          <tr>
            <th>公司地址:</th>
            <td>{{address}}</td>
          </tr>
          <tr>
            <th>网址:</th>
            <td>{{webSite}}</td>
          </tr>
          <tr>
            <th>企业性质:</th>
            <td>{{companyProp}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyContact',
  props: {
    address: String,
    webSite: String,
    companyProp: String
  }
}
</script>

<style lang="sass" scoped>
.widget
  margin-bottom: 30px
  overflow: hidden
  padding: 20px 30px
  position: relative
  border-radius: 4px
  border: 2px solid #ebeef5
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  background-color: #fff
  overflow: hidden
  color: #303133
  transition: .3s

.widget .widget-heading
  background-color: transparent
  padding-bottom: 10px
  text-transform: capitalize
  margin-bottom: 20px
  font-size: 18px
  font-weight: 600

.widget-heading .title
  padding-bottom: 15px
  border-bottom: 2px solid #29aafe

.widget .company-contact-detail
  padding: 0

.company-contact-detail table
  width: 100%

.company-contact-detail table tr
  border-bottom: 1px solid #ccc

.company-contact-detail table th
  width: 30%
  padding: 15px 0
  color: #242424

.company-contact-detail table td
  width: 70%
  padding: 15px 0
  color: #242424
</style>
