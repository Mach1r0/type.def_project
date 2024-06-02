<template>
  <AppNavBar></AppNavBar>
  <section>
    <div class="container-all">
      <form @submit.prevent="submit">
        <h1>Log in</h1>
        <div class="container-login">
          <p>Email</p>
          <input v-model="data.email" type="text" placeholder="Email" required />
          <p>Password</p>
          <input v-model="data.password" type="password" placeholder="Password" required />
        </div>
        <button class="btnlogin" type="submit"> LOGIN </button>
      </form>

      <div class="text-under">
        <p>Don't have account?</p>
        <router-link to="/sign-up">Register now!</router-link>
        <router-link to="/forgot-password">Forgot your password?</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import AppNavBar from '@/components/base/navbar.vue'
export default {
  name: 'LoginPage',
  components: {
    AppNavBar,
  },
  setup() {
    const data = reactive({
      email: '',
      password: ''
    });
    const router = useRouter();

    const submit = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/login/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        await response.json();
        router.push('/');
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

section {
  height: 100vh;
  width: 100%;
  background-color: #0b1528;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-all {
  display: flex;
  flex-direction: column;
  width: 80%; 
  color: white;
  border-radius: 10px;
}
.container-all h1 {
  margin-bottom: 1.5rem;
}

.container-login {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 35vw;
  height: auto; 
  background-color: #161a25;
  border-radius: 15px;
  padding: 1rem;
}

.container-login p {
  margin: 0;
  color: #dbe0e9;
}

.container-login input {
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  color: #dbe0e9;
  background-color: #152238;
}

.btnlogin {
  margin-top: 1rem; 
  padding: 1rem; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #323643;
  color: white;
  width: 35vw;
}

.text-under {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
}

.text-under p {
  color: white;
}

.text-under a {
  text-decoration: none;
  color: #84C5FB;
  cursor: pointer;
}

</style>
