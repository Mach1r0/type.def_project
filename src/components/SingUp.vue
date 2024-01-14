<template>
  <div class="background">
  <div class="register-form">
    <h2>Register</h2>
    <input type="text" v-model="name" placeholder="Username" />
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password"  v-model="password" placeholder="Password" />
    <button v-on:click="signUp">Register</button>
    <p>
    <router-link to="/login">Login</router-link>
    </p>
  </div>
</div>
</template>
''
<script>

import axios from 'axios'
export default {
  name: 'SignUp',
  data()
  {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods:{
    async signUp(){
      let result = await axios.post("http://localhost:3000/users",{
        email:this.email,
        password:this.password,
        name:this.name
      });

      console.warn(result);
      if(result.status==201){
        localStorage.setItem("user-info", JSON.stringify(result.data))
        this.$router.push({name:'HomePage'})
      }
    }
  },
  mounted(){
    let user = localStorage.getItem('user-info')
    if(user){
      this.$router.push({HomePage: 'HomePage'})
    }
  }
}

</script>

<style>
.background {  
    display: flex;
    align-items: center;
    background-image: url('../assets/img_of_singup.jpg'); 
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}
</style>