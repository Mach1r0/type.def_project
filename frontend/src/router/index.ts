import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../components/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import ReleasesPage from '../components/navbar-pages/releases.vue'
import AppAlbums from '@/components/albums/index.vue'
import AppBestof from '../components/navbar-pages/best_of_.vue'
import AppArtist from '../components/artists/index.vue'
import AppGender from '../components/gender/index.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '/', component: HomePage},
  {path: '/login', component: Login},
  {path: '/sign-up', component: SignUp},
  {path: '/albums', component: AppAlbums},
  {path: '/gender', component: AppGender},
  {path: '/artist', component: AppArtist},
  {path: '/best-of', component: AppBestof}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
