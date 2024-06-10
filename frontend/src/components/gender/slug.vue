<template>
  <AppNavBar />
  <div v-if="gender" class="container-all">
    <div class="container-header">
      <div v-if="gender" class="container-titulo">
        <h1>{{ gender.name }}</h1>
      </div>
      <div class="container-description">
        <p>{{ gender.description }}</p>
      </div>
    </div>
    
    
    <div class="container-albums">
      <h3 class="Title-albums">Top-ranked albums</h3>
      <button @click="prevPage" :disabled="currentPage === 0" id="left-btn">
        &lt;
      </button>
      <div v-for="(album, index) in paginatedAlbums" :key="index" class="album">
        <div class="album-image">
          <img :src="album.image" :alt="album.name" />
        </div>
        <div class="album-bio">
            <p> #{{ index+ 1 }} - </p> 
          <router-link :to="`/albums/${album.slug}`">
            <h2> {{ album.name }} </h2>
          </router-link>
          <router-link :to="`/artists/${artistSlugs[album.artist]}`">
            <h1> {{ album.artist }} </h1>
          </router-link>
        </div>
      </div>
      <button @click="nextPage" :disabled="currentPage >= pageCount - 1" id="right-btn">
        &gt;
      </button>
      <div class="pagination-buttons"></div>
    </div>
  </div>
</template>

<script>
import AppNavBar from "@/components/base/navbar.vue";
import axios from "axios";
export default {
  name: "SlugGenderApp",
  components: {
    AppNavBar,
  },
  data() {
    return {
      gender: null,
      albums: [],
      artistSlugs: {},
      currentPage: 0,
      albumsPerPage: 4,
    };
  },
  computed: {
    paginatedAlbums() {
      const start = this.currentPage * this.albumsPerPage;
      const end = start + this.albumsPerPage;
      return this.albums.slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.albums.length / this.albumsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.pageCount - 1) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
  },
  async created() {
    try {
      const slug = this.$route.params.slug;
      const response = await axios.get(`http://localhost:8000/genders/${slug}`);
      this.gender = response.data;

      const dataArtist = await axios.get(`http://localhost:8000/artists/`);
      const AllArtist = dataArtist.data.results;
      AllArtist.forEach((artist) => {
        this.artistSlugs[artist.name] = artist.slug;
      });
      const dataAlbum = await axios.get(`http://localhost:8000/albums/`);
      const allAlbums = dataAlbum.data.results;

      this.albums = allAlbums.filter((album) =>
        album.genders.includes(this.gender.name)
      );
    } catch (error) {
      console.error("Failed to fetch data: ", error);
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container-all {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  width: 100%;
  height: 100vh;
  background-color: aqua;
}

.container-header {
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: brown;
  height: 15%;
}

.container-albums {
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  width: 70%;
  background-color: grey;
}

.album {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  margin: 10px;
}

.album-image {
  display: flex;
  width: 15em;
  height: 15em;
  gap: 1rem;
  display: inline-block;
  position: relative;
  border: none;
  background-color: cornflowerblue;
}

.album-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.album-bio {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}

.pagination-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination-buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
}

.container-titulo {
  color: #174075;
  background-color: white;
}

.container-description{
  margin-top: 15px;
  line-height: 1.5;
  font-size: 1.2em;
  background-color: blueviolet;
}

</style>
