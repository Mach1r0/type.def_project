<template>
  <AppNavBar></AppNavBar>
  <div class="container-all">
    <div class="container-bio">
      <div class="container-header">
        <h1>Home Page</h1>
        <p> THE BEST WEBSITE OF REVIEW OF MUSIC </p>
        <h3> Welcome to TYPE.DEF </h3>
      </div>
      <div class="container-stats">
        <p>Number of Artist: {{ ArtistCount }} </p>
        <p>Number of Albums: {{ albumCount }} </p>
        <p>Number of Review: {{ reviewCount }} </p>
      </div>
    </div>
    <div class="container-body">
      <div class="container-albums">

      </div>
      <div class="container-info">

      </div>
    </div>
  </div>
</template>

<script>
  let avgReviews = {}
  import { Container, ExpansionPanelSummary } from '@material-ui/core'
  import AppNavBar from '@/components/base/navbar.vue'
  import axios from 'axios'
import { calculateSizeAdjustValues } from 'next/dist/server/font-utils'
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
  
<style scoped>

.container-all{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: aqua;
  justify-content: center;
  align-items: center;
}

.container-bio{
  display: flex;
  width: 100%;
  height: 15%;
  flex-direction: column;
  background-color: blueviolet;
}

.container-header{
  display: flex;
  background-color: grey;
  width: 100%;
  height: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container-stats{
  display: flex;
  height: 30%;
  margin-top: 20px;
  background-color: bisque;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.container-body{
  margin-top: 10px;
  display: flex;
  background-color: black;
  height: 80%;
  width: 90%;
}

.container-albums{
  display: flex;
  background-color: white;
  width: 65%;
}

.container-info{
  display: flex;
  background-color: brown;
  width: 35%;
  height: 100%;
}

</style>