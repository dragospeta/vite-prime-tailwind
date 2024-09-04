import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import App from './App.vue'
import router from './router'

import Button from 'primevue/button'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.component('Button', Button)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  },
  options: {
    cssLayer: {
      name: 'primevue',
      order: 'tailwind-base, primevue, tailwind-utilities'
    }
  }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
