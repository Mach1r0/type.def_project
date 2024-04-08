<template>
    <AppNavBar></AppNavBar>
    <div v-if="album">
        {{ album.name }}
        <br>
        {{ album.gender }}
        <br>
        <img :src="album.image" :alt="album.name" />
        <br>
        {{  album.type }}
        <br>
        {{ album.release }}
        <br>
        {{ album.artist }}
        <br>
        {{ album.description }}
        <br>
    </div>
    <div v-if="album">
        <div v-for="(reviews, index) in album.reviews" :key="index">
            <p>{{ reviews.title }}</p>
            <p>{{ reviews.content }}</p>
            <p> {{ reviews.stars}}</p>
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
</style>