import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignInPage from '../views/SignInPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import Mypage from '../views/Mypage.vue'
import HacksListPage from '../views/HacksListPage.vue'
import HacksDetailPage from '../views/HacksDetailPage.vue'
import TeamListPage from '../views/TeamListPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signIn',
    name: 'SignInPage',
    component: SignInPage
  },
  {
    path: '/signUp',
    name: 'SignUpPage',
    component: SignUpPage
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage
  },
  {
    path: '/hacks/list',
    name: 'HacksListPage',
    component: HacksListPage
  },
  {
    path: '/hacks/:id',
    name: 'HacksDetailPage',
    component: HacksDetailPage
  },
  {
    path: '/team/list',
    name: 'TeamListPage',
    component: TeamListPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
