import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)
app.use(VueLazyLoad)
app.use(router)
app.use(store)

app.mount('#app')
