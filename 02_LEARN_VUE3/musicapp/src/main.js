import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'swiper/css';
import 'swiper/css/bundle';

createApp(App).use(store).use(router).mount('#app')
