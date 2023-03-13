import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from "./store"

import './bootstrap';

// const app = new Vue({
// // 	router,store,
// // 	render: h => h(App)
// }).$mount("#app");

createApp(App)
.use(router)
.use(store)
.mount('#app')
