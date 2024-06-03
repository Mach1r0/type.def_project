<template>
  <header>
    <div class="head">
      <div class="h-left">
        <router-link to='/' class="title-class">TYPE.DEF</router-link>
      </div>
    </div>
    <div class="head-links">
      <router-link to="/gender">Genres</router-link>
      <router-link to="/artist">Artists</router-link>
      <router-link to="/albums">Albums</router-link>
    </div>
    <div class="h-search">
      <input type="text" v-model="searchQuery" placeholder="Search">
      <i class="fas fa-search"></i>
    </div>
    <div class="h-right">
      <router-link class="signup-css" to="/sign-up">Register</router-link>
      <router-link class="login-css" to="/login">Login</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppNavBar',
  data() {
    return {
      searchQuery: ""
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

header {
    display: flex;
    max-height: 46px; 
    background-color: #152238;
    border-bottom: 2px solid #fff; 
    align-items: center;
    margin-left: 0px;
}

.title-class{
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bolder;
  margin-left: -70px; 
  font-size: 1.5rem;
  padding: 10px;
}

.head {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
}
.h-left {
    width: 30%;
    display: flex;
    align-items: center;
    padding-left: 120px; 
}

.h-search {
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 30px;
    width: 400px;
    width: 100%;
    border-radius: 7px;
    font-size: 14px;
    padding: 5px;
    margin-right: 20px;
}

.h-search input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 7px;
    padding: 10px;
    font-size: 16px;
    font-weight: bolder;
    background-color: transparent;
}

.h-search i {
    padding: 10px;
    color: #333;
    background-color: transparent;
}

.h-right {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 16px;
    margin-top: 10px;
    margin-right: 80px;
}

.h-right a {
    padding: 8px; 
    text-decoration: none;
    color: #fff;
    font-weight: bolder;
}

.login-css, .signup-css {
    border-radius: 12px 12px 0 0; 
    color: #fff;
    transition: color 0.3s ease; 
}

.login-css:hover {
    color: black;
}

.login-css:hover, .signup-css:hover {
    color: #333;
    background-color: #fff;

}

.head-links {
  width: 50%; 
  display: flex;
  justify-content: flex-start;
  gap: 4rem;
  padding-top: 10px;
  margin-left: -200px; 
  margin-right: 20px; 
  transition: color 1s ease; 
}

.head-links a {
    text-decoration: none;
    color: #fff;
    font-weight: bolder;
    font-size: 16px;
    border-radius: 12px 12px 0 0;
    padding: 7px;
    transition: background-color 1s ease, color 1s ease; 
}

.head-links a:hover  {
    background-color: #fff;
    color: #333;
}

</style>

