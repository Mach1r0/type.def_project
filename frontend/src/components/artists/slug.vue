<template>
    <AppNavBar></AppNavBar>
        <div v-if="artist" class="container-all">
            <div class="container-album">
                <div v-for="(album, index) in artist.albums" :key="index" class="container-image">
                    <img :src="album.image" alt="album image" class="album-image">
                    <router-link :to="`/albums/${album.slug}`" class="albums-name">
                        <h1> {{ album.name }} </h1>
                    </router-link> 
                </div>
            </div>
            <div class="bio-container">
                <img :src="artist.image" :alt="artist.name" class="artist-image">
                <h1>{{ artist.name }} </h1>
                <p>{{ artist.location }} </p>
            </div>
        </div>
</template>

<script>
import AppNavBar from '@/components/base/navbar.vue'
import axios from 'axios'

export default {
    name: 'ArtistSlugApp',
    components:{
        AppNavBar,
    },
    data(){
        return {
            artist: null
        }
    }, 
    async created(){
        try{
            const slug = this.$route.params.slug
            const response = await axios.get(`http://localhost:8000/artists/${slug}`)
            let artist = response.data
            if (artist.image && artist.image.startsWith('/')) {
                artist.image = `http://localhost:8000${artist.image}`
            }
            console.log("legal", artist.albums)
            if (artist.albums) {
                artist.albums = artist.albums.map(album => {
                    if (album.image && album.image.startsWith('/')) {
                        album.image = `http://localhost:8000${album.image}`
                    }
                    return album
                })
            }
            console.log("oi ", artist.albums)

            this.$nextTick(() => {
                this.artist = artist 
            })
            console.log(artist.albums)
        } catch (error){
            console.error('failed ', error)
        }
    }
}
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
}

.container-imagem{
    flex-shrink: 0;
}

.artist-image{
    width: 168px;
    height: 168px;
    object-fit: cover;
    flex-shrink: 0;
}

.container-album{
    display: flex;
    flex-direction: column;
    background-color: blue;
    height: 80%;
    width: 30%;
    justify-content: center;
    align-items: center;
}

.container-all{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: aquamarine;
    gap: 4rem;
}


.bio-container{
    width: 10%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: antiquewhite;
    justify-content: flex-start;
}

.album-image{
    width: 150px;
    height: 150px;
}

</style>
