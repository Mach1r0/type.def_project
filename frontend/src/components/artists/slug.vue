<template>
    <AppNavBar></AppNavBar>
    <P>marolar</P>
</template>

<script>
import AppNavBar from '@/components/base/navbar.vue'
import axios from 'axios'

export default {
    name: 'ArtistsApp',
    components:{
        AppNavBar
    },
    data(){
        return {
            artist: null
        }
    }, 
    async created(){
        try{
            const slug = this.$route.params.slug
            const response = await axios.get(`http://localhost:8000/api/artist/${slug}`) // replace with your API endpoint
            const artist = response.data

            if (artist.image && artist.image.startsWith('/')) {
                artist.image = `http://localhost:8000${artist.image}`
            }   

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

<style>

</style>