<template>
<<<<<<< HEAD:src/components/Home.vue
    <navbar />
    <h1>oi tudo bem, {{name}}</h1>
=======
    <h1>oi</h1>
>>>>>>> 78180c1 (Creating backend and style the navbar):frontend/src/components/Home.vue
</template>

<script>
import navbar from "./navbar.vue";
export default {
  name: "HomePage",
  data(){
      return {
        name: '',
      }
  },
  components: {
    navbar
  },
  mounted() 
  {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name; 
    console.log("User:", user); // Log the user to the console
    if (!user) {
      this.$router.push({ name: "SignUp" }); // Removed the space after 'SignUp'
    }
  },
};
</script>
