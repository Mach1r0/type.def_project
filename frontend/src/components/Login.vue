<template>
  <div class="container-header">
  <img
    src="../assets/logo_image.png"
    alt="Description of image"
    class="logo-style"
  />
  <router-link to="/home" class="title-page">TYPE.DEF</router-link>
  </div>
  <div class="container">
    <div class="title-style">
      <h1>LOGIN</h1>
    </div>
    <div class="container-login">
      <input type="text" placeholder="Nickname or email" />
      <input type="text" placeholder="password" />
      <router-link to="/forgot-password" class="text-forgot"
        >Forgot your password?</router-link
      >
    </div>
    <button class="btnlogin">LOGIN</button>
    <div class="text-under">
      <p style="color: black">Don't have account?</p>
      <router-link to="/sign-up" class="register-link"
        ><u>Register now!</u></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container-header{
  background-color: rgb(192, 192, 192);
  margin-top: -60px;
  max-width: 2000px;
  height: 130px;
}

.title-page{
  margin-top: -90px;
}
.logo-style {
  max-width: 150px;
  display: flex;
  width: 100%;
  margin-left: 170px;
  margin-top: -50px;  
  justify-content: flex-start;
}

.container {
  margin-top: 200px;
}

.text-forgot {
  justify-content: end;
  text-decoration: none;
  color: grey;
  display: flex;
  font-style: italic;
  width: 420px;
}

.text-under {
  display: flex;
  gap: 0.5rem;
  max-width: 420px;
  margin-top: 45px;
  margin: 0 auto;
  margin-top: 20px;
  justify-content: center;
  font-style: italic;
}

.register-link {
  color: black;
  font-style: italic;
  text-decoration: none; /* Underline the link, you can adjust this based on your design */
  cursor: pointer; /* Change cursor on hover for better user experience */
}

.container-login input {
  height: 45px;
  width: 420px;
  border-radius: 15px;
  outline: none;
  border: none;
  padding: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.container-login {
  margin: 0 auto;
  width: 40%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 10px;
  margin-top: 40px;
  align-items: center;
}

.container-login input::placeholder {
  color: black;
}

.title-style h1 {
  font-family: "inter", sans-serif;
  font-weight: bolder;
  color: black;
  font-size: 30px;
  align-items: center;
  text-align: center;
}

.btnlogin {
  font-family: "inter", sans-serif;
  width: 40%;
  justify-content: center;
  max-width: 129px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
}
</style>
