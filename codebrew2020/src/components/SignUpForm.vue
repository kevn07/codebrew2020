<template>
    <div>
        <p>{{ title }}</p>
        <div class="questions-container">
            <h4>Sign up with your email</h4>
            <div class="signup-input">
                <input type="text"  placeholder="Given name" required>
            </div>
            <div class="signup-input">
                <input type="text" placeholder="Family name" required>
            </div>
            
            <div class="signup-input">
                <input type="date" placeholder="Date of birth" required>
            </div>

            <div class="signup-input">
                <input type="text" placeholder="Email" required>
            </div>

            <div class="signup-input">
                <input type="password" placeholder="Password" required>
            </div>
            
            <div class="signup-input">
                <input type="password" placeholder="Confirm password" required>
            </div>

            <div id="signup-btn-col">
                <a class="btn btn-left" href="/home" id="cancelbtn">Cancel</a>
                <a class="btn btn-right" href="/profile" id="signupbtn">Create account</a>
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

<style scope>    
    label, input {
        display: block;
        margin-left: 20%;
    }

    input {
        margin: auto;
        border: 2px solid #303c6c;
        border-radius: 8px;
        width: 45%;
        height: 45px;
    }

    .signup-input {
        margin: 20px auto;
        text-align: left;
    }

    .btn {
        min-width: 170px;
    }

    .btn-left {
        margin: 0 5px 0 auto;
    }

    .btn-right {
        margin: 0 auto 0 5px;
    }

    #signup-btn-col {
        display: flex;
    }

</style>