<template>
  <div id='app'>
    <navBar></navBar>
    <router-view/>
  </div>
</template>

<script>
import navBar from './components/navBar'
export default {
  name: "App",
  components: {
    navBar
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
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
