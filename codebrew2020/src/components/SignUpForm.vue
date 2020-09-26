<template>
    <div>
        <p>{{ title }}</p>
        <h1> {{ value }} </h1>
        <button v-on:click="increment"> increment </button>
    </div>
</template>

<script>
export default {
    name: 'SignUpForm',
    data() {
        return {
            value: 0
        }
    },
    props: {
        title: String
    },
    methods: {
        changedtitle() {
            this.title = this.title + ' kevin'
        },
        increment() {
            this.value += 1
        }
    
    },
    created() {
        this.changedtitle()
    }
}
</script>

<style scoped>

</style>