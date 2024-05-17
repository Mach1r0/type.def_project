<template>
    <AppNavBar/>
    <div class="container-allgenres">
        <li v-for="(gender, index) in gender" :key="index">
        <div class="container-image"> 
            <p>
                gender
            </p>
        </div>
        <div class="container-title"> 
            titulo
         </div>
        <div class="container-artist"> artist </div>
        </li>
    </div> 

</template>

<script>
import AppNavBar from '@/components/base/navbar.vue'
import axios from 'axios'
export default {
    name: 'SlugGenderApp',
    components: {
        AppNavBar,
    },
    data () {
        return {
            gender: null
        }
    }, 
    async created(){
        try{
            const response = await axios.get("http://localhost:8000/gender")
            this.gender = response.data
            
            this.gender.forEach(gender => {
                console.log('data')
            });
        } catch (error) {
            console.error('Failed to fetch data of gender: ', error)
        }
    }
}

</script>

<style>
</style>