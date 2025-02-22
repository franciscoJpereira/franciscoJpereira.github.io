import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'

const vuetify = createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    secondary: colors.orange.accent3,
                    primary: colors.orange.accent2,
                    background: colors.orange.lighten5,
                }

            }
        }
    },
    icons: {
        iconfont: 'mdi'
    },
    components,
    directives
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
