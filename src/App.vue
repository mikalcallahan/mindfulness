<template>
  <div id="app">
      <div id="nav">
        <div id="nav-content">
          <div id="site-name">Mikal Callahan</div>
          <div id="router-links">
            <router-link to="/">Home</router-link> |
            <router-link to="/projects">Projects</router-link>
          </div>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<style src="./styles.styl" lang="stylus">
</style>
