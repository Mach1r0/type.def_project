<template>
  <div id="app">
    <NavBar />
  </div>
</template>

<script>
import NavBar from "./components/base/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.register-form,
.LoginScreen {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 150px;
}

.register-form h2,
.LoginScreen h2 {
  text-align: center;
  margin-bottom: 20px;
}

.register-form input,
.LoginScreen input {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.register-form button,
.LoginScreen button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}
</style>
