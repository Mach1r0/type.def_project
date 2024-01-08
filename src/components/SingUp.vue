// main.js or app.js
import Vue from 'vue';
import App from './App.vue';
import './assets/css/main.css'; // Importing the main CSS file

new Vue({
  render: h => h(App),
}).$mount('#app');
<template>
  <img class="logo" src="../assets/logonavbar.png" alt="">
  <h1 class="title">Sign Up</h1>
  <div class="register">
      <div>
          <a>Name:</a>
          <input type="text" placeholder="">
      </div>
      <div>
          <a>Nickname:</a>
          <input type="text" placeholder="">
      </div>
      <div>
          <a>Gmail:</a>
          <input type="text" placeholder="">
      </div>
      <div>
          <a>Password:</a>
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

.register{
  margin-top: -80px;
  background-color: rgba(169, 169, 169, 0.9);
  height: 50%;
  width: 30%;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 40px;
  margin-top: 90px;
  size: 100px;
  font-size: 20px;
}

.register a {
  padding: 32px; 
  margin-left: 720px;
  margin-right: auto;
  margin-top: 40px;
  display: flow;
  color: white;
  font-size: 20px;
}
.title{
  margin-left: center;
  margin-top: 30px; 
  margin-bottom: 50px;
  font-size: 45px;
  color: white;
}
body {
  background-image: url('../assets/img_of_singup.jpg'); /* Replace with your image path */
  background-repeat: no-repeat;
  background-size: cover;
}
</style>