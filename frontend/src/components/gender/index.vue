<template>
    <AppNavBar />
    <section>
        <h3> All Genres </h3>
        <div class="container-content" v-for="(genders, index) in genders" :key="index">
            <div class="container-img">
                <img :src="genders.image" :alt="genders.name">
            </div>
            <div class="container-description">
                <router-link :to="`/gender/${genders.slug}`">
                    {{ genders.name }}
                </router-link>
                <p >
                    {{ genders.description }}
                </p>
                <button>show all subgenres  </button>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import AppNavBar from '@/components/base/navbar.vue'

export default {
    name: 'AppGender',
    components: {
        AppNavBar,
    },
    data() {
        return {
            genders: []
        }
    },
    computed: {
        uniqueGenders() {
            const genders = this.albums.map(album => album.gender);
            return [...new Set(genders)];
        }
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:8000/genders/')
            this.genders = response.data.results;
            console.log(response)
        } catch (error) {
            console.error('Failed to fetch', error)
        }
    }
}
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
  height: 100vh;
  background-color: #0b1528;
  display: flex;
  flex-direction: column; 
}

section h3 {
    margin-left: 0;
    color: white;
    gap: 1rem;
    display: flex;
    margin-left: 70px;
}

section h3 {
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
    color: white;
}
.container-description {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 60%;
    margin-left: 20px;
}

.container-description a {
    color: #84C5FB;
    width: 30%;
    text-decoration: none;
    font-size: 23px;
    cursor: pointer;
}

.container-description button {
    width: 90%;
    height: 40px;
    background-color: #283A58;
    color: white;
    font-size: 20px;
}

</style>
