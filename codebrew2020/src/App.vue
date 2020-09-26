<template>
  <v-app id="inspire">
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
      <v-toolbar-title>Weave</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
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
          { title: 'My Account', icon: 'mdi-account', path: '/userProfile' },
          { title: 'Room', icon: 'mdi-account-group-outline', path: '/room/12' }
        ]
    }),
    created () {
      this.$vuetify.theme.dark = false
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
    text-align: center;
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
</style>
