<template>
    <div>
        <div class="questions-container">  
            <div class="signup-input">
                <input type="text" placeholder="Email" required>
            </div>
            <div class="signup-input">
                <input type="password" placeholder="Password" required>
            </div>
            <div>
              <a class="btn" href="/home">Log in</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.signup-input {
        margin: 20px auto;
        text-align: center;
    }

input {
        margin: auto;
        padding-left: 10px;
        border-bottom: 1px solid rgb(49, 49, 49);
        width: 45%;
        height: 50px;
    }
    input:focus {
        outline: none;
        border-bottom: 2px solid rgb(49, 49, 49);
    }
</style>