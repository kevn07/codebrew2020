<template>
    <div class="page-container">
        <h1>Login</h1>
        <LoginForm msg="this is a message"/>
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>