import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' 
Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.red.darken1,
                secondary: colors.red.lighten4,
                accent: colors.indigo.base,
            },
        },
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    }
})

export default vuetify