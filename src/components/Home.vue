<template>
    home
</template>

<script>
export default {
    name: 'HomePage', 
    mounted(){
  let user = localStorage.getItem('user-info')
  console.log('User:', user); // Log the user to the console
  if(!user)
  {
    this.$router.push({name:'SignUp'}) // Removed the space after 'SignUp'
  }
}}
</script>