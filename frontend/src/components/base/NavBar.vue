<template>
    <header class="header">
      <div class="header-container">
        <div class="logo">
          <h2>TYPE.DEF</h2>
        </div>
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/albums">Albums</router-link></li>
            <li><router-link to="/signup">Sign Up</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>
  
  <style>
  .logo {
    align-items: center;
    display: flex;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }
  
  .header-container {
    height: 60px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
    background: purple;
    padding: 30px;
  }
  </style>
  