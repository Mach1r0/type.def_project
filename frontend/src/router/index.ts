import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../components/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import AppAlbums from '@/components/albums/index.vue'
import AppBestof from '../components/navbar-pages/best_of_.vue'
import AppArtist from '../components/artists/index.vue'
import AppGender from '../components/gender/index.vue'
import AlbumPage from '../components/albums/slug.vue' // Import your AlbumPage component
import SlugGenderApp from '../components/gender/slug.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '/', component: HomePage},
  {path: '/login', component: Login},
  {path: '/sign-up', component: SignUp},
  {path: '/albums', component: AppAlbums},
  {path: '/albums/:slug', component: AlbumPage}, 
  {path: '/gender', component: AppGender},
  {path: '/gender/:slug', component: SlugGenderApp},
  {path: '/artist', component: AppArtist},
  {path: '/best-of', component: AppBestof}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router