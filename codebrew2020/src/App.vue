<template>
  <div id='app'>
    <img alt="Vue logo" src="./assets/logo.png"/>
    <div id='nav'>
      <router-link to='/home'>Home</router-link>
      <router-link to='/login'>Login</router-link>
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
</style>
