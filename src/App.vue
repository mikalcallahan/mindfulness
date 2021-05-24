<template>
  <div id="app">
  <Navbar/>
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
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

<style src="./styles.styl" lang="stylus"></style>
<style src="./styles/transitions.styl" lang="stylus"></style>
