<template>
  <img src="../assets/logo_image.png" alt="Description of image" class="logo-style"/>
 <router-link to="/home" class="title-page">TYPE.DEF</router-link>
 <div class="container">
  <h1 class="title">REGISTER</h1>
  <div class="register">
        <input type="text" placeholder="Email adress" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <button>REGISTER</button>
     <div class="text-under">
        <p>Alredy have an account?</p>
        <router-link to="/login" class="txt-login">Login</router-link>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap");
</style>

<style>

.logo-style{
    max-width: 200px;
}

.title-page{
    font-style: none;
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;
    color: black;
    padding: 0 ;
    display: flex;
    justify-content: flex-start;
    align-items: left;
    margin-left: 30px;
    margin-top: -40px;
    cursor: pointer;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.logo {
  width: 100px;
}

.register {
  width: 50%;
  height: 45px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px;
  margin: 0 auto;
  align-items: center; 
}
.text-under{
    text-decoration: none;
    color: black;
}
.txt-login{
    color: black;
}

.register input {
    background-color: white;
}

.register button {
    background-color: rgb(0, 0, 0);
}

.register input, button {
  height: 45px;
  width: 420px;
  border-radius: 7px;
  border: none;
  padding: 8px;
  outline: none;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.register input::placeholder {
  color: black; /* Change to the desired color */
}

.title {
  color: black;
  font-size: 30px;
  font-weight: bold;
  font-family: "inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.register button {
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
