<template>
    <AppNavBar></AppNavBar>
    <div class="container-all">
        <div v-if="album" class="album-details">
            <div class="block-left">
                <img class="imagem-detail" :src="album.image" :alt="album.name" />
                <h3 class="track-style"> Track listing </h3>
                <div class="music-info">
                    <div class="musica-list">
                        <p>oi</p>
                    </div>
                </div>
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
            <div class="review-style">
                <h3> Reviews </h3>
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

.music-info{
    display: flex;
    background-color: #D9D9D9;
    width: 100%;
    height: 400px;
    border-radius: 10px;
    display: flex;
    margin-top: 40px;
}

.review-style{
    margin-top: 35px;
}
.review-style p{
    margin-left: 35px;
    display: flex;
}
.review-title h3{
    color: black;
}

.review-style h3{
    left: 0;
    display: flex;
    font-size: 25px;
    
}

.container-all {
    display: flex;
    padding: 30px;
}

.album-details {
    margin-top: 32px;
    box-shadow: 0px 0px 20px #717070;
    border-radius: 15px;
    width: 500px;
    display: flex;
    padding: 40px;
    justify-content: center;
    margin-left: 145px;
}


.imagem-detail {
    width:  450px; 
    height: 450px;
    background: #fff;
    box-shadow: 0px 0px 20px #bbb;
    border-radius: 15px;
}

.album-info {
    padding: 20px; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #D9D9D9;
    margin-top: -100px;
    border-radius: 15px;
    position: absolute;
    top: 350px;
    left: 680px;
    width: 1250px;
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
    left: 0;
    padding-top: 1em;
    margin-top: 10em;
    border-top: 2px solid #000000;
}

.review-title {
    margin-left: 30px;
    width: 100%;
    background-color: #000000;
    display: flex;
    font-size: 1.5em;
    margin-bottom: 0.5em;
    color: white;
}
.track-style {
    display: flex;
    margin-top: 100px;
    margin-left: 10px;
    font-size: 20px;
}

</style>
