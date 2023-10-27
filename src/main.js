import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import { createPinia } from "pinia"
import "@vuepic/vue-datepicker/dist/main.css"

import("@/assets/css/style.css")


const pinia = createPinia()

createApp(App).use(router).use(pinia).mount("#app")
