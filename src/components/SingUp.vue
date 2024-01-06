<template>
    <img class="logo" src="../assets/logonavbar.png" alt="">
    <h1>Sign Up</h1>
    <div class="register">
        <div>
            <a>Name</a>
            <input type="text" placeholder="">
        </div>
        <div>
            <a>Nickname</a>
            <input type="text" placeholder="">
        </div>
        <div>
            <a>gmail</a>
            <input type="text" placeholder="">
        </div>
        <div>
            <a>password</a>
            <input type="text" placeholder="">
        </div>
        <button>Sign Up</button>
    </div>
</template>

<script>
export default{
    name :'SignUp'
}
</script>

<style>
.logo{
    width: 100px;   
}

.register div {
    display: flex;
    flex-direction: column;
}

.register input{
    border: 1px solid;
    border-radius: 4px;
    width: 300px;
    height: 40px;
    margin-top: -20px;
    margin-bottom: -70px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
}

.register button{
    width: 185px;
    border-radius: 5px;
    border: 1px solid;
    height: 35px;
}

.register a{
    padding: 35px;
    margin-left: 350px;
    margin-right: auto;
    margin-top: 30px;
    display: flow;
    color: black;
    font-size: 20px;
}
</style>