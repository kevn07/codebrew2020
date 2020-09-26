<template>
    <div class="create-room-container">
        <div class="create-room-field">
            <h1 @click="generateLink()" id="create-link">
                Create a Room!
            </h1>
            <div v-if="roomDetail.link">
                <p> Room Number: {{ roomDetail.number }} </p>
                <p> Room Link: {{ roomDetail.link }} </p> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateRoom",
    data() { 
        return {
            roomDetail: {
                link: null,
                number: null
            }
        }
    },
    methods: {
        generateLink() {
            this.roomDetail.link = "http://localhost:8080/room/1"
            this.roomDetail.number = 1
        }
    }
}
</script>

<style scoped>
    .create-room-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    #create-link:hover {
        text-decoration: underline;
    }
    .create-room-field {
        grid-column-start: 2;
        justify-self: center;
        text-align: center;
    }
</style>