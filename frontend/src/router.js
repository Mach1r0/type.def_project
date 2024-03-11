import { createWebHistory, createRouter } from 'vue-router';
import HomePage from 'src/components/Home.vue';
import SignUp from 'src/components/Login.vue';
import Login from './components/Login.vue';

const routes = [
  {
    name: 'HomePage',
    component: HomePage,
    path: '/',
  },
  {
    name: 'SignUp',
    component: SignUp,
    path: '/signup',
  },
  {
    name: 'Login',
    component: Login,
    path: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
