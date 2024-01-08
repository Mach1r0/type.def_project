import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue';
import './assets/css/main.css'; // Importing the main CSS file

new Vue({
  render: h => h(App),
}).$mount('#app');


createApp(App).mount('#app')
