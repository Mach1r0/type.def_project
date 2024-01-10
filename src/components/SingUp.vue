<template>
  <div class="register-form">
    <h2>Register</h2>
    <input type="text" placeholder="Username" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Register</button>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
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