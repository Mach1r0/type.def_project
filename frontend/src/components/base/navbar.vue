<template>
  <header>
    <div class="head">
      <div class="h-left">
        <router-link to='/Home'>TYPE.DEF</router-link>
        <div class="h-search">
          <input type="text" v-model="searchQuery" placeholder="Search">
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div class="h-right">
        <router-link to="/sign-up">Register</router-link>
        <router-link class="login-css" to="/login">Login</router-link>
      </div>
    </div>
    <div class="head-links">
      <router-link to="/gender">Genres</router-link>
      <router-link to="/artist">Artists</router-link>
      <router-link to="/albums">Albums</router-link>
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

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    header {
        display: flex;
        flex-direction: column;
    }
    .head {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .h-left {
        width: 50%;
        display: flex;
        align-items: center;
    }
    .h-left h1 {
        padding: 30px;
    }
    .h-search {
        display: flex;
        align-items: center;
        background-color: #FFFFFF;
        height: 40px;
        border-radius: 7px;
        box-shadow: -1px 4px 5px 0px rgba(0,0,0,0.75);
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
        color: #cccccc;
        background-color: transparent;
    }

    .h-right {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 30px;
    }
    .h-right a {
        text-decoration: none;
        color: black;
        font-weight: bolder;
    }
    .login-css {
        padding: 10px;
        border: 1px solid black;
        border-radius: 8px;
    }

    .head-links {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 4rem;
        padding-top: 10px;
        border-bottom: 2px solid #cccccc;
    }
    .head-links a {
        text-decoration: none;
        color: black;
        font-weight: bolder;
        font-size: 16px;
        border-radius: 12px 12px 0 0;
        padding: 7px;
    }
    .head-links a:hover {
        background-color: #cccccc;
    }
</style>

