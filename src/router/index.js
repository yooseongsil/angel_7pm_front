import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignInPage from '../views/SignInPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import Mypage from '../views/Mypage.vue'
import HacksListPage from '../views/HacksListPage.vue'
import HacksDetailPage from '../views/HacksDetailPage.vue'
import HacksIngPage from '../views/HacksIngPage.vue'
import TeamListPage from '../views/TeamListPage.vue'
import HacksMissionPage from '../views/hacks/misson/HacksMissionPage'

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
    path: '/hacks/ing',
    name: 'HacksIngPage',
    component: HacksIngPage
  },
  {
    path: '/hacks/:id',
    name: 'HacksDetailPage',
    component: HacksDetailPage
  },
  {
    path: '/hacks/ing/mission/:id',
    name: 'HacksMissionPage',
    component: HacksMissionPage
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
