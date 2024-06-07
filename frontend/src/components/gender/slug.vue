<template>
    <AppNavBar/>
    <div v-if="gender" class="container-all"> 
        <div class="container-header">
            Top albums of {{ gender.name }}
        </div>

        <div class="container-body">
            <div class="container-image">

            </div>
            <div class="bio-container">
                
            </div>                 
        </div>
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
        const slug = this.$route.params.slug;
        const response = await axios.get(`http://localhost:8000/genders/${slug}`);
        this.gender = response.data;
        
        this.gender.forEach(gender => {
            console.log('data');
        });
    } catch (error) {
        console.error('Failed to fetch data of gender: ', error);
    }
}
}

</script>

<style>
*{
    margin: 0;
    padding: 0;
}

.container-all{
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: aqua;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container-header{
    display: flex;
    width: 60%;
    background-color: brown;
    height: 20%;
}

.container-body{
    display: flex;
    width: 60%;
    height: 80%;
    background-color: grey;
}


.container-image{
    display: flex;
    height: 30%;
    width: 20%;
    background-color: cornflowerblue;
}

.bio-container{
    display: flex;
    width: 80%;
    height: 40%;
    background-color: chartreuse;
}

</style>