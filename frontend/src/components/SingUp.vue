<template>
  <div class="background">
    <div class="register-form">
      <h2>Register</h2>
      <input type="text" v-model="name" placeholder="Username" />
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="password" v-model="confirmpassw" placeholder="Confirm Password" />
      <button @click="signUp">Register</button>
      <router-link class="btn-login" to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmpassw: '',
    };
  },
  methods: {
    async signUp() {
      try {
        const result = await axios.post('http://localhost:3000/users', {
          email: this.email,
          password: this.password,
          name: this.name,
        });

        console.warn(result);

        if (result.status === 201) {
          localStorage.setItem('user-info', JSON.stringify(result.data));
          this.$router.push({ name: 'HomePage' });
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    },
  },
  mounted() {
    const user = localStorage.getItem('user-info');
    if (user) {
      this.$router.push({ name: 'HomePage' });
    }
  },
};
</script>

<style>
.register-form {
  width: 300px;
}

.background {
  display: flex;
  align-items: center;
  background-image: url('../assets/image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.btn-login {
  margin-top: 15px;
}
</style>
