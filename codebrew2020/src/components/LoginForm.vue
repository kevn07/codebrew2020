<template>
    <div>
        <div class="questions-container">  
            <div class="signup-input">
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter your email" required>
            </div>
            <div class="signup-input">
                <label for="pw"><b>Password</b></label>
                <input type="password" placeholder="Enter your password" required>
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