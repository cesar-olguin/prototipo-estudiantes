import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('./views/Student.vue')
    },
    {
      path: '/time',
      name: 'time',
      component: () => import('./views/Student.vue')
    },
    {
      path: '/assistance',
      name: 'assistance',
      component: () => import('./views/Assistance.vue')
    },
    {
      path: '/grades',
      name: 'grades',
      component: () => import('./views/Grades.vue')
    },
    {
      path: '/homework',
      name: 'homework',
      component: () => import('./views/Student.vue')
    },
    {
      path: '/subject',
      name: 'subject',
      component: () => import('./views/Subject.vue')
    }
  ]
})
