<template>
    <img class="logo" src="../assets/—Pngtree—vaporwave sun png vector_6834151.png" />
    <h1 class="title">REGISTER</h1>
    <div class="register">
        <input type="text" placeholder="Enter Nickname">
        <input type="text" placeholder="Enter Name">
        <input type="text" placeholder="Enter Password">
        <input type="text" placeholder="Confirm Password">
        <button>REGISTER</button>
        <p>Alredy have an account?</p>
        <router-link to="/login">Login</router-link>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap')
</style>

<style>

.logo{
    width: 100px;
}

.register{
    width: 50%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 10px;
}
.register input {
    background-color: white;
}
.register button {
    background-color: rgb(0, 0, 0);
}
.register input, button{
    width: 80%;
    border-radius: 7px;
    border: none;
    padding: 8px;
    outline: none;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);   
}
.register input::placeholder {
    color: black; /* Change to the desired color */
}


.title{
    color: black;
    font-size: 28px;
    font-weight: bold;
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
}


.register button{
    color: white;
    border-radius: 10px;
    height: 50px;
    font-size: 15px;
    width: 120px;
    height: 40px;
    font: 100px;
    font-family: "Oswald", sans-serif;
}
</style>