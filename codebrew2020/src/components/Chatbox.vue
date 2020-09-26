<template>
    <div class="chat-container">
        <section ref="chatArea" class="chat-area">
            <p v-for="message in messages" class="message" :key="message" :class="{ 'message-out': message.author === 'you', 'message-in': message.author !== 'you' }">
                {{ message.body }}
            </p>
        </section>
        <section class="input-area">
            <form @submit.prevent="sendMessage('out')" >
                <div class="form-area">
                    <input v-model="youMessage" id="person-input" type="text" placeholder="Type your message">
                    <button type="submit" id="submit-button">
                        <v-icon>
                            mdi-send
                        </v-icon>
                    </button>
                </div>
            </form>
        </section>
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
            },
            {
                body: "g'day",
                author: "david"
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
    max-width: 100%;
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
  border-radius: 25px 25px 25px 25px;
  border: 1px solid lightgray;
}
form {
    background: white;
    padding: 1em;
    overflow: auto;
    width: 100%;
    margin-left: 1em;
    border-radius: 25px 25px 25px 25px;
    /* border: 1px solid lightgray; */
}
.form-area {
    display: grid;
    grid-template-columns: 4fr 1fr;
}
#person-input {
    align-self: start;
    width: 100%;
    height: 100%;
}

#submit-button {
    position: right;
}
</style>