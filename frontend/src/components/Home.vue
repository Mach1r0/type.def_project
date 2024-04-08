<template>
  <AppNavBar></AppNavBar>
  <h1>Home Page</h1>

  <p> THE BEST WEBSITE OF REVIEW OF MUSIC </p>
  <h3> Welcome to TYPE.DEF </h3>
    <br>
  <p>Number of Artist: {{ ArtistCount }} </p>
  <p>Number of Albums: {{ albumCount }} </p>
  <p>Number of Review: {{ reviewCount }} </p>

</template>

<script>
  let avgReviews = {}
  import { ExpansionPanelSummary } from '@material-ui/core'
  import AppNavBar from '@/components/base/navbar.vue'
  import axios from 'axios'
  export default {
    name: 'HomePage',
    components:{
      AppNavBar
    },
    data() {
      return {
        albums: [],
        genders: [],
        albumCount: 0,
        reviewCount: 0,
        ArtistCount: 0,
      }
    },
    async created(){
      try {
          const responseAlbums = await axios.get('http://localhost:8000/albums/')
          this.albums = responseAlbums.data

          const responseGenders = await axios.get('http://localhost:8000/genders/')  // Update this line
          this.genders = responseGenders.data

          const responseCountArtist = await axios.get('http://localhost:8000/countartist/')
          this.ArtistCount = responseCountArtist.data.Artist_count
          
          const responseCount = await axios.get('http://localhost:8000/count/')
          this.reviewCount = responseCount.data.Review_count
          this.albumCount = responseCount.data.Album_count

      }catch(error){
        console.error("Failed to fetch", error)
      }
    }
  } 
</script>
  
<style>
</style>