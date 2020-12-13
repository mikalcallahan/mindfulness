<template>
  <div class="home">
    <div id="links">
      <ul id="links-list">
        <li v-for="link in externalLinks"
            :key="link.name"
            >
            <a :href="link.link">{{link.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import '../threejs/cube'

interface ExternalLink {
  name: string;
  link: string;
}

@Component
export default class About extends Vue {
  public externalLinks: ExternalLink[] = [
    {
      name: 'github',
      link: 'https://github.com/mikalcallahan'
    },
    {
      name: 'email',
      link: 'mailto:mikal.callahan@icloud.com'
    },
    {
      name: 'webring',
      link: 'https://webring.xxiivv.com'
    }
  ]
}
</script>

<style src="./Home.styl" lang="stylus">
</style>
