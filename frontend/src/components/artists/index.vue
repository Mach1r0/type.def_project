<template>
  <AppNavBar></AppNavBar>
    <section>
      <h3 class="title">All Artist</h3>
      <div class="container-content" v-for="(artist, index) in artists" :key="index">
        <div class="container-img">
          <img :src="artist.image" :alt="artist.name">
        </div>
        <div class="container-description">
          <div class="texto">
            <router-link :to="`/artists/${artist.slug}`" class="artist-name">
              <h3>{{ artist.name }}</h3>
            </router-link>
            <p>{{ artist.genders }}</p>
          </div>
          <button class="btn-albuns">Show albums</button>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}

section {
  width: 100%;
  height: 100vh;
  background-color: #0b1528;
  display: flex;
  flex-direction: column; 
}

.title {
    margin-top: 50px;
    margin-left: 0;
    color: white;
    gap: 1rem;
    display: flex;
    margin-left: 70px;
}

.title {
    font-size: 30px;
}

.container-content {
    margin-top: 30px;
    background-color: #152238;
    width: 60%;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    margin-left: 70px;
}

.container-img {
    height: 150px;
    width: 150px;
    flex-shrink: 0;
}

.container-img img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
}

.container-description p{
    color: white
}

.container-description {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 60%;
    margin-left: 20px;
}

.artist-name {
    color: #84C5FB;
    width: 30%;
    text-decoration: none;
    font-size: 23px;
    cursor: pointer;
}

.btn-albuns {
    width: 90%;
    height: 40px;
    background-color: #283A58;
    color: white;
    font-size: 20px;
    margin-top: 30px;
}

</style>