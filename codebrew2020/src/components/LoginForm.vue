<template>
    <div>
        <h2>Name</h2>
        <h2>sample field</h2>
        <p> {{ msg }}</p>
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