<template>
  <div class="bg-light">
    <b-container class="pt-2 pb-2">
      <b-row class="mt-1 mb-2" offset="3">
        <b-col md-offset="1">
          <b-button-group>
            <b-button squared variant="primary">找职位</b-button>
            <b-button squared variant="outline-secondary">找公司</b-button>
          </b-button-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md-offset="1">
          <!-- <b-nav-form> -->
          <b-form-input v-model="keywords" id="search-input" placeholder="请输入关键词"></b-form-input>
          <b-button variant="primary" type="submit" class="search-btn">
            <b-icon icon="search" id="search-icon"></b-icon>搜索
          </b-button>
          <!-- </b-nav-form> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      keywords: '',
      search_type: ''
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  #search-input {
    /* width: 80% !important; */
    display: block;
  }

  .search-btn {
    background: #409eff;
    display: block;
    width: 100%;
    margin-top: 5px;
  }
}

@media only screen and (min-width: 601px) {
  #search-input {
    width: 80% !important;
    display: inline-block;
  }

  .search-btn {
    background: #409eff;
  }
}

#search-icon {
  font-size: 18px;
  margin-right: 5px;
}
</style>
