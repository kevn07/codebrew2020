<template>
    <div>
        <p>{{ title }}</p>
        <div class="questions-container">
            <h4>Sign up with your email</h4>


            <div class="signup-input">
                <label for="givenname"><b>Given name</b></label>
                <input type="text"  placeholder="Enter given name" required>
            </div>
            <div class="signup-input">
                <label for="familyname"><b>Family name</b></label>
                <input type="text" placeholder="Enter your family name" required>
            </div>
            
            <div class="signup-input">
                <label for="dob"><b>Date of birth</b></label>
                <input type="date" placeholder="Enter your date of birth" required>
            </div>

            <div class="signup-input">
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter your email" required>
            </div>

            <div class="signup-input">
                <label for="pw"><b>Password</b></label>
                <input type="password" placeholder="Enter your password" required>
            </div>
            
            <div class="signup-input">
                <label for="pwconfirm"><b>Confirm password</b></label>
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
            
        }
    },
    props: {
        
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
        min-width: 170px;
    }

</style>