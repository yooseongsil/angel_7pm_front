import Vue from 'vue'
import VueRouter from 'vue-router'
import SignInPage from '../views/SignInPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import Mypage from '../views/Mypage.vue'
import HacksListPage from '../views/hacks/HacksListPage.vue'
import HacksCreatePage from '../views/hacks/HacksCreatePage'
import HacksDetailPage from '../views/hacks/HacksDetailPage.vue'
import HacksApplyPage from '../views/hacks/HacksApplyPage'
import HacksIngPage from '../views/hacksIng/HacksIngPage.vue'
import TeamListPage from '../views/TeamListPage.vue'
import HacksSwitchingPage from '../views/hacksIng/HacksSwitchingPage'
import HacksIngMissionTeamBuildingFormPage from '../views/hacksIng/misson/HacksIngMissionTeamBuildingFormPage'
import HacksIngMissionTeamIdeationFormPage from '../views/hacksIng/misson/HacksIngMissionTeamIdeationFormPage'
import HacksIngMissionTeamSubmissionFormPage from '../views/hacksIng/misson/HacksIngMissionTeamSubmissionFormPage'
import UpdateProfilePage from '../views/mypage/UpdateProfilePage'
import MyHacksListPage from '../views/mypage/MyHacksListPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'HacksListPage'
    },
    meta: {
      requiresAuth: true
    }
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
    component: HacksListPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/hacks/create',
    name: 'HacksCreatePage',
    component: HacksCreatePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/hacks/:id',
    name: 'HacksDetailPage',
    component: HacksDetailPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/hacks/:id/apply',
    name: 'HacksApplyPage',
    component: HacksApplyPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/hacks/:id/ing',
    name: 'HacksIngPage',
    component: HacksIngPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/hacks/:id/ing/switch',
    name: 'HacksSwitchingPage',
    component: HacksSwitchingPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/hacks/:id/ing/mission/teamBuilding',
    name: 'HacksIngMissionTeamBuildingFormPage',
    component: HacksIngMissionTeamBuildingFormPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/hacks/:id/ing/mission/teamIdeation',
    name: 'HacksIngMissionTeamIdeationFormPage',
    component: HacksIngMissionTeamIdeationFormPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/hacks/:id/ing/mission/teamSubmission',
    name: 'HacksIngMissionTeamSubmissionFormPage',
    component: HacksIngMissionTeamSubmissionFormPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/team/list',
    name: 'TeamListPage',
    component: TeamListPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/mypage/updateProfile',
    name: 'UpdateProfilePage',
    component: UpdateProfilePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/mypage/hacks/list',
    name: 'MyHacksListPage',
    component: MyHacksListPage,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
