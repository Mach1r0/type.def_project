import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import ReleasesPage from './components/navbar-pages/releases.vue'
import AppAlbums from './components/navbar-pages/albums.vue'
import AppBestof from './components/navbar-pages/best_of_.vue'
import AppArtist from './components/navbar-pages/artits.vue'
import AppGender from './components/navbar-pages/gender.vue'

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
  },
  {
    path: '/releases',
    name: 'releases',
    component: ReleasesPage
  },
  {
    path: '/albums',
    name: 'albums',
    component: AppAlbums
  },
  {
    path: '/best-ofs',
    name: 'besfof',
    component: AppBestof
  },
  {
    path: '/albums',
    name: 'albums',
    component: AppAlbums
  },
  {
    path: '/artists',
    name: 'artists',
    component: AppArtist
  },
  {
    path: '/gender',
    name: 'gender',
    component: AppGender
  }

] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Use createWebHistory
  routes
})

export default router
