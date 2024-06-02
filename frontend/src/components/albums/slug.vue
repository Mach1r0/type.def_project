<template>
    <AppNavBar></AppNavBar>
    <section>
        <div class="container-all">
            <div v-if="album" class="album-details">
                <div class="block-left">
                    <img class="imagem-detail" :src="album.image" :alt="album.name" />
                    <div class="track-style ">
                        <h3> Track listing </h3>
                        <div class="music-info">
                            <div v-for="(music, index) in album.musics" :key="index" class="musica-list">
                                <p class="music-list-info"> {{ index + 1 }} - {{ music.name }} - {{ music.time }}
                                    minutes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="album-info">
                    <h1 class="album-name">{{ album.name }} </h1>
                    <hr>
                    <p class="album-artist">Artist: {{ album.artist }} </p>
                    <p class="album-gender">Gender: {{ album.gender }} </p>
                    <p class="album-rating">Rating: / 5.0 from {{ album.review_count }} ratings </p>
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
    </section>
</template>

<script>
import axios from 'axios'
import AppNavBar from '@/components/base/navbar.vue'
export default {
    name: 'SlugApp',
    components: {
        AppNavBar,
    },
    data() {
        return {
            album: null
        }
    },
    async created() {
        try {
            const slug = this.$route.params.slug
            const response = await axios.get(`http://localhost:8000/albums/${slug}`)
            const album = response.data

            if (album.image && album.image.startsWith('/')) {
                album.image = `http://localhost:8000${album.image}`
            }
            this.$nextTick(() => {
                this.album = album
            })
            console.log(album.musics)
        } catch (error) {
            console.error('Failed to fetch', error)
        }
    }
}
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: #0b1528;
}

.container-all {
    width: 1800px;
    padding: 20px;
    background-color: #272a37;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-top: -300px;
}

body {
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.6;
    font-size: 18px;
}

.album-details {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.block-left {
    flex: 1;
    text-align: center;
}

.imagem-detail {
    width: 70%;
    height: auto;
    border-radius: 10px;
}

.track-style {
    margin-top: 20px;
}

.track-style h3 {
    color: white;
    font-size: 1.5em;
    margin-bottom: 10px;
    border-bottom: 2px solid white;
    padding-bottom: 5px;
    text-align: left;
}

.music-info {
    color: white;
    text-align: left;
}

.musica-list {
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
}

.music-list-info {
    font-size: 1.1em;
}

.album-info {
    flex: 2;
    padding: 20px;
    border-left: 2px solid #ddd;
}

.album-info h1 {
    font-size: 2em;
    margin-bottom: 10px;
}

.album-info hr {
    margin: 20px 0;
}

.album-info p {
    margin: 10px 0;
    font-size: 1.2em;
    color: white;
}

.album-info .album-name {
    font-weight: bold;
    color: white;
}

.review-style {
    margin-top: 20px;
}

.review-style h3 {
    color: white;
    font-size: 1.5em;
    margin-bottom: 10px;
    border-bottom: 2px solid white;
    padding-bottom: 5px;
}

.review {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
}

.review-title {
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 5px;
}

.review-content {
    margin-bottom: 5px;
}

.review-stars {
    color: #FFD700;
}

</style>
