<template>
  <div>
    <img src="../assets/logo.png" alt="Description of image" class="logo-style"/>
    <router-link to="/home" class="title-page">TYPE.DEF</router-link>
  
    <div class="container">
      <h1 class="title">REGISTER</h1>
  
      <div class="register">
        <input v-model="data.email" type="email" placeholder="Email address" />
        <input v-model="data.name" type="text" placeholder="Username" />
        <input v-model="data.password" type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
  
        <button @click="submit">REGISTER</button>
  
        <div class="text-under">
          <p>Already have an account?</p>
          <router-link to="/login" class="txt-login">Login</router-link>
        </div>
      </div>
    </div>
  
    <app-footer class="signup-footer"/>
  </div>
</template>
  
<script lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import AppFooter from '../components/base/footer.vue';

export default {
  name: "SignUp",
  components: {
    AppFooter
  },
  setup() {
    const data = reactive({
      name: '', 
      email: '',
      password: ''
    });

    const router = useRouter();

    const submit = async () => {
     
      try {
        const response = await fetch('http://localhost:8000/api/register/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        await router.push('/login');
      } catch (error) {
        console.error('There was a problem with the fetch operation: ');
      }
    };

    return {
      data,
      submit
    };
  }
};

</script>

  <style>
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap");
  </style>
  
  <style>
  .signup-footer{
        background: lightcyan;
        padding: 10px;
        margin-top: 400px;
  }
  
  .logo-style{
      max-width: 100px;
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
      cursor: pointer
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