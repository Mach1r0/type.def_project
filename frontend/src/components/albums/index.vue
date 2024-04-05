<template>
    <AppNavBar></AppNavBar>
    <div>
        <ul>
            <li v-for="(albums, index) in albums" :key="index">
                <img :src="albums.image" :alt="albums.name" />
                <router-link :to="`/albums/${albums.slug}`"> <!-- Add this line -->
                    <h3>{{ albums.name }}</h3>
                </router-link>
                <p>{{ albums.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import AppNavBar from '@/components/base/navbar.vue'

export default {
    name: 'AppAlbums',
    components: {
        AppNavBar,
    },
    data() {
        return {
            albums: []
        }
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:8000/albums')
            console.log(response.data)  // Add this line
            this.albums = response.data
        } catch (error) {
            console.error('Failed to fetch albums:', error)
        }
    }
}
</script>

<style>
    ul{
        display: flex;
        max-width: 1000px;
        margin: 20px auto;
        padding: 10px;
        box-sizing: border-box;
    }

    li{
        list-style: none;
        padding: 20px;
        margin: 10px;
        text-align: center;
        border: 1px solid #229966;
        flex-grow: 1;
    }

</style>