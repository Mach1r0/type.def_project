<template>
  <div>
    <input v-model="email" type="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginScreen',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods:{
    async login(){
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      )
      console.warn(result);
    }
  }
};
</script>