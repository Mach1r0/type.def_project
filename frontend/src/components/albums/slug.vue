<template>
    <AppNavBar></AppNavBar>
    <div class="container-all">
        <div v-if="album" class="album-detail">
            <div class="album-header">
                <img class="album-image" :src="album.image" :alt="album.name" />
                <h1 class="album-name">{{ album.name }}</h1>
            </div>
            <div class="album-info">
                <p class="album-gender">{{ album.gender }}</p>
                <p class="album-type">{{  album.type }}</p>
                <p class="album-release">{{ album.release }}</p>
                <p class="album-artist">{{ album.artist }}</p>
                <p class="album-description">{{ album.description }}</p>
            </div>
        </div>
        <div v-if="album">
            <div v-for="(reviews, index) in album.reviews" :key="index" class="review">
                <h2 class="review-title">{{ reviews.title }}</h2>
                <p class="review-content">{{ reviews.content }}</p>
                <p class="review-stars"> {{ reviews.stars}}</p>
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

            // Prepend the base URL if the image URL is relative
            if (album.image.startsWith('/')) {
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
.container-all{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
    background: #f4f4f4;
}

.album-detail {
    display: flex;
    flex-direction: row;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0px 0px 20px #bbb;
    border-radius: 10px;
}

.album-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
}

.album-image {
    width: 80%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
}

.album-name {
    font-size: 2em;
    margin-top: 0.5em;
    color: #444;
}

.album-info {
    width: 50%;
    padding-left: 20px;
}

.album-info p {
    font-size: 1em;
    line-height: 1.5;
    margin-bottom: 1em;
    color: #666;
}

.review {
    border-top: 1px solid #ddd;
    padding-top: 1em;
    margin-top: 1em;
}

.review-title {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    color: #444;
}

.review p {
    font-size: 1em;
    line-height: 1.5;
    margin-bottom: 1em;
    color: #666;
}
</style>