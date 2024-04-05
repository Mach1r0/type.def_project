<template>
  <div class="container-all">
    <div class="container-topo">
      <div class="logo-style">
        <img src="/logo.png" alt="Logo" />
      </div>
      <h1 class="title-style">TYPE.DEF</h1>
      <form @submit.prevent="handleSearch">
        <input
          class="search-style"
          type="text"
          v-model="searchQuery"
          placeholder="Search for artist, album or track"
        />
      </form>
      <div class="style-user">
        <router-link to="/login">Login</router-link>
        <router-link to="/sign-up">Register</router-link>
      </div>
    </div>
    <div class="navbar-links">
      <router-link to="/gender">Genres</router-link>
      <router-link to="/artist">Artists</router-link>
      <router-link to="/albums">Albums</router-link>
      <router-link to="/SingUp">Profile</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavBar",
  data() {
    return {
      searchQuery: "",
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
.container-all {
  width: 100%;
  height: 10%;
  padding: 0;
  display: flex;
  background-color: black;
  flex-direction: column;
}

.container-topo {
  background-color: green;
  display: flex;
  gap: 4rem;
  height: 100%;
}

.logo-style {
  background-color: white;
  width: 50px;
  height: 50px;
  width: 100%;
  height: 100%;

}

.title-style {
  color: black;
  text-decoration: none;
  align-items: left;
  cursor: pointer;
  font-size: 30px;
}

.search-style {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  height: 51px;
  width: 420px;
  border-radius: 10px;
  font-size: 15px;
  font-family: "inter", sans-serif;
  outline: none;
  border: none;
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

.navbar-links {
  display: flex;
  gap: 4rem;
  margin-top: 60px;
  margin-left: 120px;
}

.navbar-links a {
  text-decoration: none;
  font-weight: bold;
  color: white;
}
</style>