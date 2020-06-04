import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
      component: () => import(/* webpackChunkName: "about" */ './views/about/About.vue')
    },
    {
      path: '/search/:searchType',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/search/SearchMainView.vue')
    },
    {
      path: '/search/results/:searchParamType',
      name: 'searchResults',
      // props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/search/SearchResults.vue')
    },
    {
      path: '/industries',
      name: 'industries',
      component: () => import(/* webpackChunkName: "about" */ './views/industry/Industries.vue')
    },
    {
      path: '/industry/:industryId',
      component: () => import(/* webpackChunkName: "about" */ './views/industry/IndustrySection.vue'),
      props: true
    },
    {
      path: '/regguide',
      name: 'regguide',
      component: () => import(/* webpackChunkName: "about" */ './views/company/CompanyRegisterGuide.vue')
    },
    {
      path: '/company/:id',
      name: 'company',
      component: () => import(/* webpackChunkName: "about" */ './views/company/CompanyHomeView.vue')
    },
    {
      path: '/job/:id',
      name: 'job',
      component: () => import(/* webpackChunkName: "about" */ './views/job/JobView.vue')
    },
    {
      path: '/live',
      name: 'live',
      component: () => import(/* webpackChunkName: "about" */ './views/live/LiveView.vue')
    },
    {
      path: '/auth/:authAction',
      alias: '/auth',
      name: 'auth',
      component: () => import(/* webpackChunkName: "about" */ './views/user/UserAuthView.vue')
    },
    {
      path: '/profile/:personId',
      name: 'profile',
      component: () => import(/* webpackChunkName: "about" */ './views/profile/ProfileRoot.vue'),
      children: [{
        path: 'view',
        component: () => import(/* webpackChunkName: "about" */ './views/profile/ProfileView.vue')
      }, {
        path: 'create',
        component: () => import(/* webpackChunkName: "about" */ './views/profile/ProfileCreateView.vue')
      }]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})
