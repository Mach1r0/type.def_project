import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assuming your router file is named router.js

createApp(App)
    .use(router)
    .mount('#app');
