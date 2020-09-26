<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
                v-for="item in items"
                :key="item.title"
                @click="changeRouter(item)"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img :src="require('@/assets/weave.png')" height="50"/>
      <v-toolbar-title id="company-title">Weave</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
        <router-view/>
        </v-row>
      </v-container>
      
    </v-main>
    
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
          // { title: 'Home', icon: 'mdi-home-city', path: '/home' },
          { title: 'My Account', icon: 'mdi-account', path: '/profile' },
          { title: 'Create Room', icon: 'mdi-account-switch', path: '/createRoom' },
          { title: 'Join Room', icon: 'mdi-account-group ', path: '/room/1' }
        ]
    }),
    created () {
    },
    methods: {
      changeRouter(item) {
        this.$router.push(item.path)
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: top;
    color: #2c3e50;
    margin-top: 20px;
  }
  
  .btn {
    background-color: #4CAF50; /* Green */
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  .questions-container {
    display: float;
    width: 70%;
    height: auto;
    margin: auto;
    box-shadow: 2px 2px 2px 2px;
  }

  #company-title {
    margin-left: 0.3em;
  }
</style>
