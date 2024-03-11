<template>
    <div class="nav">
        <a href="/">Home</a>
        <a href="/add">add restaurant</a>
        <a href="update">update resturant </a>
        <a v-on:click="logout" href="#">logout</a>
    </div>
</template>
<script>
    export default{
        name: 'typedefNavbar',
        methods:{
            logout(){
                localStorage.clear();
                this.$router.push({name: 'Login'})
            },
        }
    }
</script>
<style>
    .nav{
        background-color: #007BFF;
        width: 100%;
    }
</style>