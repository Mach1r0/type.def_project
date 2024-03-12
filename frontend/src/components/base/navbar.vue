<template>
  <div class="container">
    <div class="title classa">
      <input type="text" placeholder="Search" />
    </div>
    <div class="navbar-links">
      <router-link to="/gender"> Gender </router-link>
      <router-link to="/artists"> Artists </router-link>
      <router-link to="/albums"> Albums </router-link>
      <router-link to="/new-releases"> New Releases </router-link>
      <router-link to="/best-ofs"> Best of's </router-link>
      <router-link to="/profile"> Profile </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style></style>
