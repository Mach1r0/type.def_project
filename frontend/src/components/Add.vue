<template>
    <navbar />
home
</template>

<script>
import navbar from "./navbar.vue";
export default {
  name: "HomePage",
  components: {
    navbar
  },
  mounted() 
  {
    let user = localStorage.getItem("user-info");
    console.log("User:", user); // Log the user to the console
    if (!user) {
      this.$router.push({ name: "SignUp" }); // Removed the space after 'SignUp'
    }
  },
};
</script>
