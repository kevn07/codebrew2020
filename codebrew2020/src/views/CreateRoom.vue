<template>
    <div class="create-room-container">
            <h1 @click="generateLink()" id="create-link">
                <button type ='submit' class='btn'> Create a Room! </button>
            </h1>
            <div v-if="roomDetail.link">
                <p> Room Number: {{ roomDetail.number }} </p>
                <p> Room Link: {{ roomDetail.link }} </p> 
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