import { createApp } from 'vue'
import App from './App.vue'

import routes from '~pages'
import { createRouter, createWebHashHistory } from 'vue-router'

import './assets/css/style.css'

const app = createApp(App)

app.use(
    createRouter({
      history: createWebHashHistory(),
      routes
    })
  )
  
app.mount('#app')
