<template>
    <div class="container">
        <div> 
            <h1>
                virtual stage
            </h1>
        </div>
        <div id="room-nav-bar">
                <h1 v-on:click='changeFeature("chat")' class="featureOption"  v-bind:class="{ active: isActive }">chat</h1>
                <h1 v-on:click='changeFeature("activities")' class="featureOption" id="activities-tab"  v-bind:class="{ active: !isActive }">activities</h1>
        </div>
        <div id="item-container">
            <div class="video-container">
                <span v-for='index in numberOfUsers' :key='index'>
                    <Cam />
                </span>
            </div>
            <div class="activity-container">
                <div class="chatbox-container" v-if='feature == "chat"'>
                    <ChatBox />
                </div>
                <div class="chatbox-container" v-if='feature == "activities"'>
                    <ActivityMenu />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cam from "@/components/Cam"
import ChatBox from "@/components/Chatbox"
import ActivityMenu from "@/components/ActivityMenu"
export default {
    name: "room",
    components: {
        Cam,
        ChatBox,
        ActivityMenu
    },
    data() {
        return {
            numberOfUsers: 2,
            feature: "chat",
            selected: {
                underline: true
            },
            isActive: true
        };
    },
    methods: {
        changeFeature(feature) {
            this.feature = feature
            if (feature == "chat") {
                this.isActive = true
            } else {
                this.isActive = false
            }
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
    #room-nav-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        grid-column-start: 2;
    }
    #item-container {
        padding-top: 1em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .featureOption {
        margin-bottom: 0;
        width: 100%;
        text-align: center;
        border-radius: 25px 25px 25px 25px;
    }
    .featureOption:hover {
        text-decoration: underline;
    }

    .active {
        background: rgb(240, 240, 240);
        text-decoration: underline;
    }
</style>