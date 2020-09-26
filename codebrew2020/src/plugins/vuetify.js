import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' 
Vue.use(Vuetify)

const opts = {  
    theme: {
        themes: {
          light: {
            primary: '#3f51b5',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    }
}

export default new Vuetify(opts)