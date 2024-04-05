<template>
  <AppNavBar></AppNavBar>
  <h1>Home Page</h1>

  <h3> Welcome to TYPE.DEF </h3>
  <p> Artist </p>
  <p> Albuns </p>
  <p> Reviews </p>
  
</template>

<script>
  let avgReviews = {}

  import AppNavBar from '@/components/base/navbar.vue'
  import axios from 'axios'
  export default {
    name: 'HomePage',
    components: {
      AppNavBar
    },
    async created(){
      try {
          const response = await axios.get('http://localhost:8000/albums/')
          this.genders = response.data
      }catch(error){
        console.error("Failed to fetch", error)
      }
    }
  } 
  </script>
  
  <style>
  </style>
  