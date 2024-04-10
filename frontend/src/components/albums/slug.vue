<template>
    <AppNavBar></AppNavBar>
    <div class="container-all">
        <div v-if="album" class="album-details">
            <div class="block-left">
                <img class="imagem-detail" :src="album.image" :alt="album.name" />
            </div>
            <div class="album-info">
                <h1 class="album-name">{{ album.name }} </h1>
                <hr>
                <p class="album-artist">Artist: {{ album.artist }} </p>
                <p class="album-gender">Gender: {{ album.gender }} </p>
                <p class="album-rating">Rating: / 5.0 from {{album.review_count}} ratings </p>
                <p class="album-type">Type: {{ album.type }} </p>
                <p class="album-release">Released: {{ album.release }} </p>
                <p class="album-description">Description: {{ album.description }} </p>
                <hr>
                <div v-if="album">
                    <div v-for="(review, index) in album.reviews" :key="index" class="review">
                        <h2 class="review-title">{{ review.title }}</h2>
                        <p class="review-content">{{ review.content }}</p>
                        <p class="review-stars"> {{ review.stars }}</p>
                    </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import AppNavBar from '@/components/base/navbar.vue'

export default {
    name: 'SlugApp',
    components:{
        AppNavBar,
    },
    data() {
        return {
            album: null
        }
    },
    async created(){
    try{
        const slug = this.$route.params.slug
        const response = await axios.get(`http://localhost:8000/albums/${slug}`)
        const album = response.data

        console.log(album.review_count); // Log the review count

        // Prepend the base URL if the image URL is relative
        if (album.image && album.image.startsWith('/')) {
            album.image = `http://localhost:8000${album.image}`
        }

        this.$nextTick(() => {
            this.album = album
        })

        console.log(this.album.image) // Log the image URL
    } catch(error) {
        console.error('Failed to fetch', error)
    }
}
}
</script>

<style>

.container-all {
    display: flex;
    padding: 30px;
}

.album-details {
    display: flex;
}

.block-left{
    background-color: black;
    width: 450px; 
    height: 100vh; 
    display: flex;
    justify-content: center;
}

.imagem-detail {
    margin-top: 40px;
    width: 400px; /* Set this to a fixed size */
    height: 400px; /* Set this to a fixed size */
    background: #fff;
    box-shadow: 0px 0px 20px #bbb;
    border-radius: 15px;
}

.album-info {
    padding: 20px; /* Increase padding to increase the size of the div */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: grey;
    margin-top: -100px;
    position: absolute;
    top: 310px;
    left: 500px;
    width: 1500px;
    height: 100vh; 
}

.album-info hr {
    background-color: black;
    size: 30px;
    font-size: 50px;
    height: 2.5px;
    width: 100%;
}
.album-info h1 {
    font-size: 45px;
    color: black;
    margin-bottom: 10px;
}

.album-name {
    font-size: 2em;
    margin-top: 0;
    margin-bottom: 10px;
    color: #444;
}

.album-info p {
    font-size: 20px;
    line-height: 1.7;
    margin-bottom: 0.5em;
    color: black;
}

.review {
    padding-top: 1em;
    margin-top: 1em;
    border-top: 1px solid #ddd;
}

.review-title {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    color: #444;
}

</style>
