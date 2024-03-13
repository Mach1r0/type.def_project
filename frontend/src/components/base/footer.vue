<template>
   <footer> 
      <p> {{ footerText }} </p>
   </footer>
</template>

<script>
export default{
   data() {
      return{
         footerText: 'Copyright 2003'
      }
   }
}

</script>

<style scoped>
   footer{
      background: lightcyan;
      padding: 10px;

   }
</style>
    
