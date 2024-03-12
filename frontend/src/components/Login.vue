<template>
  <div class="title-style">
    <h1>Login page</h1>
  </div>
  <div class="container-login">
    <input type="text" placeholder="Nickname or email" />
    <input type="text" placeholder="password" />
    <router-link to="/forgot-password">Forgot the password?</router-link>
  </div>
  <button class="btnlogin">Login</button>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style>

* {
  margin: 0 auto;
  width: 100%;
}
.container-login input{
    justify-content: space-between;
    margin: 10px;
    height: 30px;
    border-radius: 3px;
    ]




    


}
.container-login {
  display: block;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  padding: 0 0 0 40px;
  background-color: red;
}
.btnlogin {
    max-width: 300px;

}
</style>
