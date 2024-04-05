<template>
  <div id="app">
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/base/footer.vue';

export default {
  name: 'App',
  components: {
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>