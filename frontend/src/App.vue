<template>
  <div id="app">
    <router-view />
    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from '@/components/base/footer.vue'
export default {
  name: 'App',
  components: {
    AppFooter
  },
}
</script>

<style>

</style>