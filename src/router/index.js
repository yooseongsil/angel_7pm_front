import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignInPage from '../views/SignInPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import Mypage from '../views/Mypage.vue'
import HacksListPage from '../views/hacks/HacksListPage.vue'
import HacksApplyPage from '../views/hacks/HacksApplyPage'
import HacksDetailPage from '../views/hacks/HacksDetailPage.vue'
import HacksIngPage from '../views/hacksIng/HacksIngPage.vue'
import TeamListPage from '../views/TeamListPage.vue'
import HacksSwitchingPage from '../views/hacksIng/HacksSwitchingPage'
import HacksIngMissionTeamBuildingFormPage from '../views/hacksIng/misson/HacksIngMissionTeamBuildingFormPage'
import HacksIngMissionTeamIdeationFormPage from '../views/hacksIng/misson/HacksIngMissionTeamIdeationFormPage'
import HacksIngMissionTeamSubmissionFormPage from '../views/hacksIng/misson/HacksIngMissionTeamSubmissionFormPage'
import UpdateProfilePage from '../views/mypage/UpdateProfilePage'

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
    path: '/hacks/list',
    name: 'HacksListPage',
    component: HacksListPage
  },
  {
    path: '/hacks/apply',
    name: 'HacksApplyPage',
    component: HacksApplyPage
  },
  {
    path: '/hacks/:id',
    name: 'HacksDetailPage',
    component: HacksDetailPage
  },
  {
    path: '/hacks/ing',
    name: 'HacksIngPage',
    component: HacksIngPage
  },
  {
    path: '/hacks/ing/switch',
    name: 'HacksSwitchingPage',
    component: HacksSwitchingPage
  },
  {
    path: '/hacks/ing/mission/teamBuilding',
    name: 'HacksIngMissionTeamBuildingFormPage',
    component: HacksIngMissionTeamBuildingFormPage
  },
  {
    path: '/hacks/ing/mission/teamIdeation',
    name: 'HacksIngMissionTeamIdeationFormPage',
    component: HacksIngMissionTeamIdeationFormPage
  },
  {
    path: '/hacks/ing/mission/teamSubmission',
    name: 'HacksIngMissionTeamSubmissionFormPage',
    component: HacksIngMissionTeamSubmissionFormPage
  },
  {
    path: '/team/list',
    name: 'TeamListPage',
    component: TeamListPage
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage
  },
  {
    path: '/mypage/updateProfile',
    name: 'UpdateProfilePage',
    component: UpdateProfilePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
