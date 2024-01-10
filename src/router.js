import Home from "./components/Home.vue";
import SingUp from "./components/SingUp.vue";
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SingUp,
    path: "/sign-up",
  },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;