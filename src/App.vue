<template>
  <div id="app">
  <Navbar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './components/Navbar.vue'
export default Vue.extend({
  components: {
    Navbar
  }
})
</script>

<style src="./styles.styl" lang="stylus">
</style>
