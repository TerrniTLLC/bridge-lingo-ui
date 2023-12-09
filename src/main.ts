import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Notifications from 'notiwind'
import VueTelegram from 'vue-tg'
import App from './App.vue'
import { router } from './router/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTelegram)
app.use(Notifications)

app.mount('#app')
