import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mypinia from './mypinia'

import './assets/pure-min-3.0.0.css'
import './assets/normalize-8.0.1.css'
import './assets/base.css'

import MyFooter from "@/views/include/MyFooter.vue"

const app = createApp(App)

app.component('MyFooter', MyFooter);

app.use(router)
app.use(mypinia)

app.mount('#app')
