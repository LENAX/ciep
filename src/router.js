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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/industries',
      name: 'industries',
      component: () => import(/* webpackChunkName: "about" */ './views/Industries.vue'),
    }
    /*
    {
      path: '/login',
      name: 'login',
      component: UserLogin,
      props: (route) => ({ query: route.query.type })
    },
    {
      path: '/register',
      name: 'register',
      component: UserRegister,
      props: (route) => ({ query: route.query.type})
    },
    {
      path: '/event',
      component: EventView,
      children: [{
        path: 'intro',
        component: EventIntro,
      }, {
        path: 'signup',
        component: EventSignup
      }] 
    },
    {
      path: '/live',
      name: 'live',
      component: LiveView
    },
    
    {
      path: '/company/:id',
      name: 'company',
      component: CompanyView,
      children: [{
        path: 'info',
        component: CompanyInformation,
      }, {
        path: 'jobs',
        component: JobList,
        props: (route) => ({ query: route.query})
      }]
    },
    {
      path: '/job/:id',
      name: 'job',
      component: JobView,
      children: [{
        path: 'apply',
        component: JobApplication
      }]
    },
    {
      path: '/profile/:userid',
      name: 'profile',
      component: ProfileView,
      children: [{
        path: 'create',
        component: ProfileCreation
      }, {
        path: 'edit',
        component: 'ProfileEdit'
      }, {
        path: 'upload',
        component: 'ProfileUpload'
      }]
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
      props: (route) => ({ query: route.query})
    }
    */
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})
