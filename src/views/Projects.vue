<template>
  <div class="page-content">
  <div class="grid-12-col">
    <ul id="projects-list">
      <li v-for="project in projects" :key="project.link">
        <a :href="project.link">{{project.name}}</a>
      </li>
    </ul>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Project } from '../models/Project'

@Component
export default class About extends Vue {
  public projects: Project[] = [
    {
      name: 'Vish',
      link: 'https://getvish.com'
    },
    {
      name: 'Cosé',
      link: 'https://www.figma.com/file/LSCWlA3XrTkpU8RUPlYV5grz/conceptions?node-id=177%3A38'
    },
    {
      name: 'Mindfulstreaming',
      link: 'http://mindfulstreaming.now.sh'
    },
    {
      name: 'VueBoilerplate',
      link: 'https://github.com/mikalcallahan/vuejs-boilerplate'
    },
    {
      name: 'Sinnoise',
      link: 'https://github.com/mikalcallahan/sinnoise'
    },
    {
      name: 'Metamorphosis',
      link: 'https://github.com/mikalcallahan/metamorphosis'
    },
    {
      name: 'Conscient',
      link: 'https://github.com/mikalcallahan/conscient'
    }
  ]
}
</script>

<style src="./Projects.styl" lang="stylus">
</style>
