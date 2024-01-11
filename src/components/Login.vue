<template>
<div class="LoginScreen">
    <h2>Login</h2>
  <input type="text" v-model="name" placeholder="Username or email" />
  <input type="password" v-model="password" placeholder="Password" />
  <button>Login</button>
  <p>
    <router-link to="/sign-up">Sign up</router-link>
  </p>
</div>
</template>

<script>
export default {
  name: "LoginScreen",
};
</script>
