<template>
  <div class="home">
    <img
      class="img-fluid"
      alt="ciep theme banner"
      src="@/assets/img/ciep_banner.jpg"
    />
    <SearchBar />
    <TourGuide />
    <ContactModal />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import TourGuide from '@/components/TourGuide.vue'
import ContactModal from '@/components/ContactModal.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    TourGuide,
    ContactModal
  }
}
</script>
