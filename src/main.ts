import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/pure-min-3.0.0.css'
import './assets/normalize-8.0.1.css'
import './assets/base.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
