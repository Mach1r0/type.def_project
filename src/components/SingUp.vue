<template>
  <div class="register-form">
    <h2>Register</h2>
    <input type="text" v-model="name" placeholder="Username" />
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password"  v-model="password" placeholder="Password" />
    <button v-on:click="signUp">Register</button>
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
        passowrd:this.password,
        name:this.name
      });

      console.warn(result);
      if(result.status==201){
        alert("sign-up done");
        localStorage.setItem("user-info", JSON.stringify(result.data))
      }
  }
  }
}

</script>

<style scoped>
.register-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

.register-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.register-form input {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.register-form button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: #fff;
  cursor: pointer;
}
body {
  background-image: url('../assets/img_of_singup.jpg'); /* Replace with your image path */
  background-repeat: no-repeat;
  background-size: cover;
}
</style>