<template>
    <div class="page-container">
        <h1>Profile</h1>
        <ProfileForm/>
    </div>
</template>

<script>
import ProfileForm from '../components/ProfileForm'
export default {
    name: 'Profile',
    components: {
        ProfileForm
    }
}
</script>