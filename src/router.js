import HomePage from "./components/Home.vue";
import SingUp from "./components/SingUp.vue";
import { createWebHistory, createRouter } from 'vue-router';
import Login from "./components/Login.vue";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SingUp,
    path: "/sign-up",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;