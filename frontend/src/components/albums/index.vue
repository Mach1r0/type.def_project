<template>
  <AppNavBar></AppNavBar>
  <div class="container-pai">
    <div v-if="albums.length === 0">
      <h1>Carregando...</h1>
    </div>
    <ul v-else class="container-albums">
      <li v-for="(album, index) in albums" :key="index">
        <div class="album-item" :style="{ backgroundImage: 'url(' + album.image + ')' }">
          <div class="imagem-style"></div>
        </div>
        <router-link class="albumname-style" :to="`/albums/${album.slug}`">
          <h3 class="text-style"> {{ album.name }} </h3>
        </router-link>
        <p class="description-style">{{ album.description }}</p>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios'
import AppNavBar from '@/components/base/navbar.vue'

export default {
    name: 'AppAlbums',
    components: {
        AppNavBar,
    },
    data() {
        return {
            albums: []
        }
    },
async created() {
    try {
        const response = await axios.get('http://localhost:8000/albums/')
        console.log('Albums:', response.data)
        if (response.data.results) {
            this.albums = response.data.results // Access the array from the 'results' property
        } else {
            this.albums = []
        }

        this.albums.forEach(album => {
            console.log(album.review_count);
        });
    } catch (error) {
        console.error('Failed to fetch albums:', error)
    }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif;
}

.albumname-style {
    border: none;
    color: inherit; 
    text-decoration: none;
}

.text-style {
    text-decoration: none;
    margin: 0 auto;
    outline: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
}
  
.container-albums {
  align-items: center;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  list-style: none;
  padding: 0;
  gap: 5rem;
  justify-content: space-evenly;
  margin: 0;
  padding-bottom: 30px;
}
  
.album-item {
    background: black;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    display: flex;
    height: 325px; 
    width: 420px; 
    margin: 40px; 
}

.container-pai{
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: #0b1528;
}

.container-albums li {
    background-color: transparent;
    border: none
}

.text-style{
  color: #84C5FB;
  font-size: 30px;
}

.description-style{
  color: white;
  font-size: 20px;
}

</style>