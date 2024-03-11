<template>
    <img class="logo" src="../assets/—Pngtree—vaporwave sun png vector_6834151.png" />
    <h1 class="title">teste</h1>
    <div class="register">
        <input type="text" placeholder="Enter Nickname">
        <input type="text" placeholder="Enter Name">
        <input type="text" placeholder="Enter Password">
        <input type="text" placeholder="Confirm Password">
        <button>Sign Up</button>
    </div>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style>

.logo{
    width: 100px;
}

.register{
    border-radius: 3px;
    
}

.register input{
    display: block;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    border: 0.1 px solid skyblue;
}
.register button {
    margin-top: 10px;
    width: 150px;
    background: skyblue;
}
</style>