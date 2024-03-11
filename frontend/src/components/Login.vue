<template>
    <div class="title-style">
        <h1> Login page </h1>
    </div>
    <div class="container-login">
        <input type="text" placeholder="Nickname or email">
        <input type="text" placeholder="password">
        <router-link to="/forgot-password">Forgot the password?</router-link>
    </div>
    <button class="btnlogin"> Login</button>
</template>

<script>
export default {
    name: 'LoginPage'
}
</script>

<style>
*{
    margin: 0;
    width: 100%;
    
}

.container-login{
    display: block;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    background-color: red;
}
</style>
