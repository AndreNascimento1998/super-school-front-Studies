import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import { createPinia } from "pinia";
import '@/styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueTheMask from 'vue-the-mask'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(VueTheMask)
app.mount('#app')
