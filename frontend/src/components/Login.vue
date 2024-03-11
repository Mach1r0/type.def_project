<template>
  <div>
    <input v-model="email" type="text" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginScreen',
  data() 
  {
    return {
      email: '',
      password:''
    }
  },
  methods:{
  async login()
  {
    let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
    
    console.warn(result);

    if(result.status==200 && result.data.length > 0){
      console.log("Login Success");
      localStorage.setItem("user-info", JSON.stringify(result.data[0]))
      this.$router.push({name:'HomePage'})
    } 
  }
}
};
</script>