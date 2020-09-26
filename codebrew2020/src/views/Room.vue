<template>
    <div class="container">
        <div class="videoContainer">
            <code v-for="index in numberOfUsers" :key="index">
                <Cam />
            </code>
        </div>
        <div class="chatbox">
            <!-- <ChatBox /> -->
        </div>
    </div>
</template>

<script>
import Cam from "@/components/Cam"
// import ChatBox from "@/components/ChatBox"
export default {
    name: "room",
    components: {
        Cam
    },
    data() {
        return {
            numberOfUsers: 2
        };
    },
    computed: {
        device: function() {
            return this.devices.find(n => n.deviceId === this.deviceId);
        }
    },
    watch: {
        camera: function(id) {
            this.deviceId = id;
        },
        devices: function() {
            // Once we have a list select the first one
            const [first, ...tail] = this.devices;
            if (first) {
                this.camera = first.deviceId;
                this.deviceId = first.deviceId;
            }
            console.log(tail)
        }
    }
};
</script>

<style scoped>
    .container {
        display: grid
    }
</style>