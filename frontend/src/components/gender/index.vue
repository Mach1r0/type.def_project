<template>
    <AppNavBar/>

    <h1 class="name-page"> Gender </h1>
    <h3 class="name-page"> All Gender </h3>
    
    <div v-for="(genders, index) in genders" :key="index">
        <router-link :to="`/gender/${genders.slug}`"> 
            {{ genders.name }}
        </router-link>
        <div class="img">
            <img :src="genders.image" :alt="genders.name">
        </div>
        <p>
            {{ genders.description }}
        </p>
    </div>

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
    async created(){
        try{
            const response = await axios.get('http://localhost:8000/genders/')
            this.genders = response.data
        } catch(error) {
            console.error('Failed to fetch', error)
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