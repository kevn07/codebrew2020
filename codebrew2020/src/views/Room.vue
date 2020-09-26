<template>
    <div class="container">
        <div class="videoContainer">
            <code v-for='index in numberOfUsers' :key='index'>
                <Cam />
            </code>
        </div>
        <div>
            <div id="roomNavBar">
                <h1 v-on:click='changeFeature("chat")' class="featureOption">chat</h1>
                <h1 v-on:click='changeFeature("activities")' class="featureOption">activities</h1>
            </div>
            <div class="chatboxContainer" v-if='feature == "chat"'>
                <ChatBox />
            </div>
            <div class="chatboxContainer" v-if='feature == "activities"'>
                <ActivityBox />
            </div>
        </div>
    </div>
</template>

<script>
import Cam from "@/components/Cam"
import ChatBox from "@/components/Chatbox"
export default {
    name: "room",
    components: {
        Cam,
        ChatBox
    },
    data() {
        return {
            numberOfUsers: 2,
            feature: "chat",
            selected: {
                underline: true
            }
        };
    },
    methods: {
        changeFeature(feature) {
            this.feature = feature
        }
    },
    computed: {
        activitySelected() {
            return this.feature == "activity"
        },
        chatSelected() {
            return this.feature == "chat"
        }
    }
};
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    #roomNavBar {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        
    }
    .featureOption {
        margin-bottom: 0;
    }
    .featureOption:hover {
        text-decoration: underline;
    }
</style>