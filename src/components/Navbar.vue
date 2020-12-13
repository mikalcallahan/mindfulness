<template>
 <div id="nav">
   <div id="nav-content">
    <div id="site-name">Mikal Callahan</div>
      <div id="router-links">
        <router-link to="/">Home</router-link> |
        <router-link to="/projects">Projects</router-link>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import routes from '../router/'

@Component
export default class Navbar extends Vue {

}
</script>
