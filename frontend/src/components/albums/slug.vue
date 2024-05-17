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
    <AppFooter class="app-footer"></AppFooter>
</template>

<script>
import axios from 'axios'
import AppNavBar from '@/components/base/navbar.vue'
import AppFooter from '@/components/base/footer.vue'
export default {
    name: 'SlugApp',
    components:{
        AppNavBar,
        AppFooter,
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

        if (album.image && album.image.startsWith('/')) {
            album.image = `http://localhost:8000${album.image}`
        }

        this.$nextTick(() => {
            this.album = album
        })

    } catch(error) {
        console.error('Failed to fetch', error)
    }
}
}
</script>

<style>
* {
    height: auto;
}
.block-left{
    padding: 10px;
    height: auto;
    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.music-info{
    background-color: #D9D9D9;
    border-radius: 10px;
    display: flex;
}

.review-style{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 90%;
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
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 100%;
}

.album-details {
    justify-content: space-between;
    width: 80%;
    padding: 30px;
    box-shadow: 0px 0px 20px #717070;
    border-radius: 15px;
    display: flex;
}


.imagem-detail {
    height: 90%;
    width: 100%;
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
    border-radius: 15px;
    width: 70%;
    height: auto;
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
    width: 100%;
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
    font-size: 20px;
}

</style>
