<template>
  <div id="app">
    <Navbar />
    <div class="container py-4">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/TopNavbar'
export default {
  components: {
    Navbar
  },

}
</script>