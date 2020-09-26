<template>
 <nav class="navbar navbar-expand navbar-light bg-light">
      <h2 class="navbar-brand"> <router-link to="/home">AppName </router-link></h2>
          <!-- <h2 class="nav-item nav-link active" href="/home">Home</h2> -->
          <h2 class="nav-item nav-link active"><router-link to="/room">Join Room </router-link></h2>
          <!-- <h2 class="nav-item nav-link active" href="/gameRoom">Game room</h2> -->
          <h2 class="nav-item nav-link active"><router-link to="/profile">My profile</router-link></h2>
    </nav>
</template>

<script>
  export default{
    name: "navBar"
  }
</script>

<style scoped>
  .navbar {
    display: flex;
    flex-direction: row;
    margin-left: 1em;
    justify-items: flex-start;
    justify-content: space-evenly;
  }
</style>