<template>
    <div>
        <p>{{ title }}</p>
        <div class="questions-container">
            <h1>Sign up with your email</h1>
            <div class="signup-input">
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter your email" required>
            </div>

            <div class="signup-input">
                <label for="pw"><b>Password</b></label>
                <input type="password" placeholder="Enter your password" required>
            </div>
            
            <div class="signup-input">
                <label for="email"><b>Confirm password</b></label>
                <input type="password" placeholder="Confirm your password" required>
            </div>

            <div>
                <a class="btn" href="/home" id="cancelbtn">Cancel</a>
                <a class="btn" href="/profile" id="signupbtn">Create account</a>
            </div>
        </div>
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
    },
    created() {
    }
}
</script>

<style scoped>

    .signup-input {   
        margin: auto;
        text-align: left;
    }

    .btn {
        margin: 0 5px;
        min-width: 100px;
    }

</style>