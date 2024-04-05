<template>
    <AppNavBar></AppNavBar>
    <div>
        <li v-for="(artist, index) in artists" :key="index">
            <img :src="artist.image" :alt="artist.name">
            <router-link :to="`/artists/${artist.slug}`">
                <h3>{{ artist.name }}</h3>
            </router-link>
            {{ artist.genders }}
            <ul>
                <li v-for="(album, albumIndex) in artist.albums" :key="`album-${albumIndex}`">
                    <img :src="album.image" :alt="album.name">
                    <router-link :to="`/albums/${album.slug}`">
                        <h3>{{ album.name }}</h3>
                    </router-link>
                    {{ album.description }}
                </li>
            </ul>
        </li>
    </div>
</template>

<script>
import axios from 'axios'
import AppNavBar from '@/components/base/navbar.vue'
export default {
    name: 'AppArtists',
    components: {
        AppNavBar
    },
    data () {
        return {
            artists: []
        }
    },
    async created() {
        try{
            const response = await axios.get('http://localhost:8000/artists/')
            console.log(response.data)
            this.artists = response.data
        } catch(error){
            console.error('Failed to fetch artists:', error)
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>