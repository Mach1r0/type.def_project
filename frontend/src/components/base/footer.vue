<template>
   <footer> 
      <div class="footer-section">
         <p> {{ footerText }} </p>
         <router-link to="/aboutus"> {{ aboutus }}</router-link >
         <router-link to="/privacy"> {{ Privacy }}</router-link >
         <router-link to="/instagram"> {{ Instagram }}</router-link >
      </div>
   </footer>
 </template>
 
 <script>
 export default {
    name: 'AppFooter',
    data() {
       return{
          footerText: "Copyright 2003",
          aboutus: "About Us",
          Privacy: "Privacy",
          Instagram: "instagram",
       }
    }
 }
 </script>
 
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
   height: 100%;
   width: 100%;
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: "Inter", sans-serif;
}

footer{
   background-color: #152238;
   padding: 10px;
   width: 100%;
}

.footer-section{
   display: flex;
   justify-content: space-between;

}

.footer-section p, .footer-section a {
   color: white;
   text-decoration: none;
   transition: color 0.3s ease; 
   text-align: center;
}

.footer-section p:hover, .footer-section a:hover {
   color: black;
   text-decoration: none;
}

</style>