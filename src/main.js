import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)
app.use(VueAxios, { $request: axios })
app.use(router)
app.use(VueSweetalert2)
app.mount('#app')
