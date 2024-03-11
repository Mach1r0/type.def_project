import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Use createWebHistory
  routes
})

export default router
