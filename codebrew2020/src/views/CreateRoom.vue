<template>
    <div class="create-room-container">
            <h1 @click="generateLink()" id="create-link">
                create a room!
            </h1>
            <div v-if="roomDetail.link">
                <p> room number: {{ roomDetail.number }} </p>
                <p> room link: {{ roomDetail.link }} </p> 
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
    #create-link:hover {
        text-decoration: underline;
    }
    .create-room-container {
        float: center;
        justify-self: center;
        text-align: center;
        width: 100%
    }
</style>