<template>
  <div id='app'>
    <img alt="Vue logo" src="./assets/logo.png"/>
    <div id='nav'>
      <router-link to='/home'>Home</router-link>
      <router-link to='/login'>Login</router-link>
      <router-link to='/signup'>Sign up</router-link>
      <router-link to='/profile'>Profile</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .btn {
    background-color: #4CAF50; /* Green */
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  .questions-container {
    display: float;
    width: 70%;
    height: auto;
    margin: auto;
    box-shadow: 2px 2px 2px 2px;
  }
</style>
