<template>
    <div class="modal-grid">
        <v-icon size="40" class="modal-icon">
            {{activity.icon}}
        </v-icon>
        <div>
            <h3>
                {{ activity.name}}
            </h3>
            <p>
                {{ activity.description }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: "ActivityModal",
    props: {
        activity: Array
    }
}
</script>

<style scoped>
    .modal-grid {
        display: grid;
        grid-template-rows: 0.5fr 1fr;
    }
    .modal-icon {
        padding-top: 25px;
        padding-bottom: 20px;
        position: left;
    }
</style>