<template>
  <div class="about">
    <div class="introduction">
      <p>Mikal Callahan is a software developer and UI/UX designer in love with the process of designing and developing user experiences. I create full-stack solutions to web oriented needs.</p>
    </div>

    <div class="works">
      <div class="list-item">
        <div class="img-container">
          <img alt="corse" src="../assets/works/cose.jpg">
        </div>
      </div>
      <div class="list-item">
        <div class="img-container">
          <img alt="run riot" src="../assets/works/runriot.png">
        </div>
      </div>
      <div class="list-item">
        <div class="img-container">
          <img alt="union cowork" src="../assets/works/unioncowork.jpg">
        </div>
      </div>
    </div>

    <div class="specialize">
      <h4>UI/UX Design</h4>
      <p>
        User centered modern designs are what I find myself tending to create. I am constantly inspired by not just design, but nature and conversation as well. Each experience I come out of shapes my perspective in some way and in turn shapes my designs.
      </p>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {
}
</script>

<style src="./About.styl" lang="stylus">
</style>
