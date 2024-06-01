<template>
  <AppNavBar></AppNavBar>
    <section>
      <div class="container-album" v-for="(artist, index) in artists" :key="index">
        <div class="img-artista">
          <img :src="artist.image" :alt="artist.name">
        </div>
        <div class="descricao">
          <div class="texto">
            <router-link :to="`/artists/${artist.slug}`" class="artist-name">
              <h3>{{ artist.name }}</h3>
            </router-link>
            <p>{{ artist.genders }}</p>
          </div>
          <button class="btn-albuns">Show albuns</button>
        </div>
      </div>
    </section>
</template>


<script>
import axios from 'axios';
import AppNavBar from '@/components/base/navbar.vue';

export default {
  name: 'AppArtists',
  components: {
    AppNavBar
  },
  data() {
    return {
      artists: []
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:8000/artists/');
      this.artists = response.data.results;
    } catch (error) {
      console.error('Failed to fetch artists:', error);
    }
  }
};
</script>
<style>

section {
  width: 100%;
  height: 100vh;
  background-color: #0b1528;
  display: flex;
  flex-direction: column; 
  gap: 0;
  align-items: center;
}

.container-album {
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #152238;
  display: flex;
  margin-left: 90px;
  border-radius: 20px;
  max-width: 700px;
  max-height: 300px ;
  margin-top: 20px;
  width: 90%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.img-artista {
  width: 150px;
  height: 150px;
  flex-shrink: 0;
}

.img-artista img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
}

.descricao {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start; 
}

.texto {
  font-size: 18px;
  margin-left: -70px; 
}

.texto h3 {
  margin-bottom: 10px;
}

.artist-name{
  text-decoration: none;
  display: flex;
  color: #84C5FB;
}

button {
  font-size: 16px;
  margin-left: -70px;
  border: none;
  max-width: 600px;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  align-self: flex-start; 
}
@media (max-width: 600px) {
  button {
    padding: 5px 10px;
    font-size: 12px;
    max-width: 300px;
  }
}

</style>
