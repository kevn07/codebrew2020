<template>
    <div class="activity-menu">
        <span v-for="(activity, index) in activities" :key="activity">
            <ActivityModal :activity="activities[index]" class="modal"/>
        </span>
    </div>
</template>

<script>
import ActivityModal from './ActivityModal.vue'
export default {
    name: "ActivityMenu",
    components: {
        ActivityModal
    },
    data() {
        return {
            activities: [{
                name: 'storytelling',
                description: 'choose a story to read!',
                icon: 'mdi-book-open-page-variant-outline'
            },
            {
                name: 'board games',
                description: 'choose a virtual board to play with!',
                icon: 'mdi-gamepad-square'
            },
            {
                name: 'brain training',
                description: 'choose a cooperative game and challenge yourselves!',
                icon: 'mdi-head-snowflake-outline'
            },
            {
                name: 'watch together',
                description: 'choose a video to watch together!',
                icon: 'mdi-filmstrip'
            },]
        }
    }
}
</script>

<style>
    .activity-menu {
        /*   border: 1px solid #ccc; */
        display: grid;
        min-height: 40vh;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        background: white;
        overflow: auto;
        margin: 1em 1em 1em 1em;
        box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3)
    }
    .modal {
        padding: 1em;
        width: 100%;
        justify-self: center;
        align-self: center;
    }
    .modal:after {
        content: "";
        display: block;
    }
    .modal:hover {
        background: rgb(228, 247, 228)
    }
</style>

