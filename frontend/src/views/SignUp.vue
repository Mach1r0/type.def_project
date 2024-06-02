<template>
  <AppNavBar></AppNavBar>
  <section>
    <div class="container-all">
      <h1 class="title">REGISTER</h1>
     
      <div class="register">
        <div class="input-group">
          <p>Email</p>
          <input v-model="data.email" type="email" placeholder="Email address" />
        </div>
        <div class="input-group">
          <p>Username</p>
          <input v-model="data.name" type="text" placeholder="Username" />
        </div>
        <div class="input-group">
          <p>Password</p>
          <input v-model="data.password" type="password" placeholder="Password" />
        </div>
        <div class="input-group">
          <p>Confirm Password</p>
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button class="btn" @click="submit">Create Account</button>
      </div>

      <div class="text-under">
        <p>Already have an account?</p>
        <router-link to="/login" class="txt-login">Login</router-link>
      </div>
    </div>
  </section>
</template>

  
<script lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import AppNavBar from '@/components/base/navbar.vue'
export default {
  name: "SignUp",
  components:{
    AppNavBar,
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
        console.error('There was a problem with the fetch operation: ', error);
      }
    };

    return {
      data,
      submit
    };
  }
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
}

section {
  width: 100%;
  height: 100vh;
  background-color: #0b1528;
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.container-all {
  display: flex;
  flex-direction: column;
  width: 50%; /* Aumentar o tamanho geral */
  color: white;
  border-radius: 10px;
}

.title {
  color: white;
  width: 64%;
  margin-left: 0;
  padding: 1rem; 
  border-radius: 10px;
}

.register {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 55%;
  margin-top: 5px;
  background-color: #141723;
  padding: 2rem;
  border-radius:  5px;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group p {
  margin-bottom: 0.5rem; 
  color: white;
}

.register input {
  border-radius: 5px;
  font-size: 18px; 
  color: black;
  padding: 0.5rem; 
  border: 1px solid #ccc;
  margin-top: 5px;
}

.text-under{
  margin-top: 20px;
  margin-left: 20px;
  width: 65%;
  font-size: 20px;
  gap: 1rem;
}
.text-under a{
  text-decoration: none;
  color: #84c5fb;
  cursor: pointer;
}

.btn{
  font-size: 16px;
  display: flex;
  background-color: #283a58;
  height: 40px;
  color: white;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

</style>