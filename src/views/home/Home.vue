<template>
  <div class="home">
    <img
      class="img-fluid"
      alt="ciep theme banner"
      src="@/assets/img/ciep_banner.jpg"
    />
    <SearchBar />
    <TourGuide />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import TourGuide from '@/components/TourGuide.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    TourGuide
  }
}
</script>
