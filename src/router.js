import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import LearnBasic from './module/LearnBasic/LearnBasic'
import HomePage from './views/HomePage'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/learn',
      name: 'learn',
      component: LearnBasic,
    },
  ],
})

export default router
