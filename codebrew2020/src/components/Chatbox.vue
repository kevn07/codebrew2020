<template>
    <div class="chat-container">
        <section ref="chatArea" class="chat-area">
            <p v-for="message in messages" class="message" :key="message" :class="{ 'message-out': message.author === 'you', 'message-in': message.author !== 'you' }">
                {{ message.body }}
            </p>
        </section>
        <form @submit.prevent="sendMessage('out')" id="input-area">
            <label for="person-input">You</label>
            <input v-model="youMessage" id="person-input" type="text" placeholder="Type your message">
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "ChatBox",
    data() {
        return {
            youMessage: "",
            messages: [{
                body: "hello @ Codebrew 2020",
                author: "david"
            },
            {
                body: "hello friend :))",
                author: "you"
            }]
        }
    },
    methods: {
        sendMessage(direction) {
            if (!this.youMessage && !this.receiveMessage) {
                return
            }
            if (direction === 'out') {
                this.messages.push({body: this.youMessage, author: 'you'})
                this.youMessage = ''
            }  else {
                alert('something went wrong')
            }
            this.$nextTick(() => {
                let messageDisplay = this.$refs.chatArea
                messageDisplay.scrollTop = messageDisplay.scrollHeight
            })
            
        }
    }
}
</script>

<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;
}
.message-out {
  background: #407FFF;
  color: white;
  margin-left: 50%;
}
.message-in {
  background: #F1F0F0;
  color: black;
}
.message {
  width: 45%;
  border-radius: 10px;
  padding: .5em;
/*   margin-bottom: .5em; */
  font-size: .8em;
}
.chat-area {
/*   border: 1px solid #ccc; */
  background: white;
  height: 50vh;
  padding: 1em;
  overflow: auto;
  margin: 1em 1em 1em 1em;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3)
}
.input-area {
    background: white;
    padding: 1em;
    overflow: auto;
    width: 100%;
}
</style>