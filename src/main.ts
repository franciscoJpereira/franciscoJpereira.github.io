

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    secondary: '#7E52A0',
                    primary: '#29274C',
                    background: '#012A36',
                }

            }
        }
    },
    components,
    directives
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
