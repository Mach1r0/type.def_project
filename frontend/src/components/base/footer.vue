<template>
   <footer> 
      <p> {{ footerText }} </p>
      <router-link to="/aboutus"> {{ aboutus }}</router-link >
      <router-link to="/privacy"> {{ Privacy }}</router-link >
      <router-link to="/instagram"> {{ Instagram }}</router-link >
   </footer>
</template>

<script>
export default {
   name: 'AppFooter',
   data() {
      return{
         footerText: "Copyright 2003",
         aboutus: "About Us",
         Privacy: "Privacy",
         Instagram: "instagram",
      }
   }
}
</script>

<style scoped>
   footer{
      background: lightcyan;
      padding: 10px;
      margin-top: 200px;
   }
</style>