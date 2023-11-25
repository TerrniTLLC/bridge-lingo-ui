import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTelegram from 'vue-tg'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(VueTelegram)

app.mount('#app')
