<template>
    <AppNavBar></AppNavBar>
    <div class="container-pai">
      <ul class="container-albums">
        <li v-for="(album, index) in albums" :key="index">
          <div class="album-item" :style="{backgroundImage: `url(${album.image})`}">
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
            albums: null
        }
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:8000/albums')
            console.log(response.data)  // Add this line
            this.albums = response.data
        } catch (error) {
            console.error('Failed to fetch albums:', error)
        }
    }
}
</script>

<style>
*{
    border: none;
    margin: 0 auto;
    padding: 0;
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
    align-items: center; /* Center vertically */
    text-align: center; /* Center horizontally */
    display: flex;
  }
  
.container-albums {
    align-items: center;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Displaying items in a grid with minimum width of 300px */
    gap: 20px; /* Adjust the gap between items */
    list-style: none;
    padding: 0;
  }
  
  .album-item {
    background: black;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    border: none;
    display: flex;
    flex-direction: column;
    outline: none;
    height: 400px; 
    width: 600px; 
    justify-content: center;
    text-decoration: center;
    gap: 1rem;
    justify-content: space-between;
    margin: 40px; /* Increase the margin to add more space */
}

.imagem-style{
    border: none;
    height: 500px; 
    width: 600px; 
    background-size: cover;
    background-position: center;
}

.container-albums li {
    background-color: transparent; /* Add this line */
    border: none;
}

</style>