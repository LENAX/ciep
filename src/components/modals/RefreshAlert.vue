<template>
  <b-modal id="refresh-alert-modal" title="您确定要刷新或关闭页面吗？" hide-footer>
    <p class="text-danger">
        <strong>刷新页面会导致您退出登录并丢失未保存的数据！</strong>
    </p>
    <hr />
    <b-button
      class="mt-3 float-right"
      variant="outline-danger"
      @click="$bvModal.hide('contact-modal')"
    >关闭</b-button>
  </b-modal>
</template>
