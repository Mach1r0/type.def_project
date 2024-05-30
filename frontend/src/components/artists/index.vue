<template>
  <AppNavBar></AppNavBar>
    <section>
      <div v-for="(artist, index) in artists" :key="index" class="container-album">
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
          <button>Show albuns</button>
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

*{
  width: 100vw; 
}

section {
  background-color: pink;
  display: flex;
  flex-direction: column; 
  gap: 1rem;
}

.container-album {
  border: 1px solid black;
  padding: 10px;
  background-color: antiquewhite;
  display: flex;
}

.img-artista {
  width: 150px;
  height: 150px;
}

.img-artista img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: red;
}

.descricao {
  width: calc(100% - 150px);
  background-color: rgb(149, 100, 194);
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.texto {
  padding: 5px;
}

button {
  width: 100%;
}
</style>
