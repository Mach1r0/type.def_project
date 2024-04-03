<template>
    <AppNavBar/>
    <h1 class="name-page"> Gender </h1>
    <h3 class="name-page"> All Gender </h3>
    </template>

    <script>
import axios from axios
import AppNavBar from '@/components/base/navbar.vue'
const { data }  = await axios.get()

export default {
    name: 'AppGender',
    components: {
        AppNavBar,
    },
    data() {
        return {
            
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