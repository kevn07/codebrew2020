<template>
    <div>
        <h1 @click="generateLink()" id="create-link">
            Create a Room!
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
</style>