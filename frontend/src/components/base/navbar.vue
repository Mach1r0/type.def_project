<template>
  <div class="container-all">
    <div class="container-topo">
      <div class="logo-style">
        <img src="aaa" alt="Logo">
      </div>
      <h1 class="title-style">TYPE.DEF</h1>
      <form @submit.prevent="handleSearch">
        <input class="search-style" type="text" v-model="searchQuery" placeholder="Search for artist, album or track" />
      </form>
      <div class="style-user">
        <router-link to="/login">Login</router-link>
        <router-link to="/sign-up">Register</router-link>
      </div>
    </div>
    <div class="navbar-links">
      <router-link to="/gender"> Gender </router-link>
      <router-link to="/artists"> Artists </router-link>
      <router-link to="/albums"> Albums </router-link>
      <router-link to="/releases"> New Releases </router-link>
      <router-link to="/best-ofs"> Best of's </router-link>
      <router-link to="/SingUp "> Profile </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavBar",
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleSearch() {
      console.log(this.searchQuery);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar-links {
  display: flex;
  gap: 4rem;
  margin-top: 60px;
  margin-left: 120px;
}

.navbar-links a {
  text-decoration: none;
  font-weight: bold;
  color: black;
}

.style-user {
  gap: 4rem;
  display: flex;
  justify-content: end;
  background-color: grey;
  width: 100%;
  margin-right: 30px;
}

.style-user a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}

.container-topo {
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 60px;
}

.search-style {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  height: 51px;
  width: 420px;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  font-family: "inter", sans-serif;
  outline: none;
  border: none;
}

.title-style {
  color: black;
  text-decoration: none;
  align-items: left;
  cursor: pointer;
  font-size: 30px;
}

.container-all {
  background-color: antiquewhite;
  box-sizing: border-box;
  margin-top: -45px;
}
</style>
