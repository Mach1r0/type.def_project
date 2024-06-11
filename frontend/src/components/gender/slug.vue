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
      <div class="Title-albums">
        <h3>Top-ranked albums</h3>
      </div>
      <div class="albums-and-pagination">
        <button v-if="currentPage > 0" @click="prevPage" id="left-btn">
          &lt;
        </button>
        <div class="albums">
          <div v-for="(album, index) in paginatedAlbums" :key="index" class="album">
            <div class="album-image">
              <img :src="album.image" :alt="album.name" />
            </div>
            <div class="album-bio">
              <div class="container-title-album">
                <span class="album-index">#{{ currentPage * albumsPerPage + index + 1 }} - </span>
                <router-link :to="`/albums/${album.slug}`" class="album-link">
                  <h2>{{ album.name }}</h2>
                </router-link>
              </div>
              <div class="artist-name-style">
                <router-link :to="`/artists/${artistSlugs[album.artist]}`" class="artist-link">
                  <h1>{{ album.artist }}</h1>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <button v-if="currentPage < pageCount - 1" @click="nextPage" id="right-btn">
          &gt;
        </button>
      </div>
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

.artist-name-style {
  font-size: 10px; 
  color: #84c5fb;
  text-decoration: none;
}

.album-link h2{
  color: #84c5fb;
  font-weight: 100;
}

.container-all {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  width: 100%;
  height: 100vh;
  background-color: #0b1528;
}

.container-header {
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 20px;
}

.container-titulo {
  color: #174075;
}

.container-description {
  margin-top: 15px;
  line-height: 1.5;
  font-size: 1.2em;
  font-size: 20px;
  display: flex;
  color: white;
  margin-left: 0;
  font-weight: 300;
}

.container-albums {
  width: 70%;
  margin-top: 20px;
  margin-bottom: 20px; 
}


.Title-albums {
  color: white;
  font-size: 25px;
  display: flex;
  margin-bottom: 20px;
}

.albums-and-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.albums {
  display: flex;
  width: 100%;
  justify-content: space-around;
  overflow: hidden;
}

.album {
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px; 
}

.album-image {
  width: 15em; /* Ajusta a largura da imagem para 100% do contêiner pai */
  height: 15em; /* Define a altura da imagem como 15em */
  overflow: hidden; /* Esconde qualquer parte da imagem que ultrapasse o contêiner */
}

.album-image img {
  width: 100%; /* Garante que a largura da imagem se ajuste ao contêiner */
  height: 100%; /* Garante que a altura da imagem se ajuste ao contêiner */
  object-fit: cover; /* Corta a imagem para cobrir completamente o contêiner */
}


.album-bio {
  margin-top: 10px;
}

.container-title-album {
  display: flex;
  align-items: center;
}

.album-index {
  color: #959caf;
  font-weight: bolder;
  font-size: 22px;
  margin-right: 5px;
}

.album-link, .artist-link {
  color: #84c5fb;
  text-decoration: none; 
  color: inherit;
  font-size: 15px;
}

#left-btn, #right-btn {
  height: 50px;
  width: 50px;
  border-radius: 10px;
  background-color: #174075;
  color: white;
  border: none;
  cursor: pointer;
}

#left-btn {
  margin-right: 10px;
}

#right-btn {
  margin-left: 10px;
}
</style>
