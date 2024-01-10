import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'; // Importing the main CSS file
import router from '@/router.js' 

createApp(App)
    .use(router)
    .mount('#app');