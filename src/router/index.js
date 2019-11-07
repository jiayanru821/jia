import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    component:()=>import('../views/home/home.vue'),
    redirect:'/home/first',
    children:[
      {
        path:'/home/first',
        component:()=>import('../views/home/first/first.vue')
      },
      {
        path:'/home/bookcity',
        component:()=>import('../views/home/bookcity/bookCity.vue')
      }
    ]
  },
  {
    path:'/detail/:id',
    component:()=>import('../views/detail/detail.vue')
  },
  {
    path:'/login',
    component:()=>import('../views/login/login.vue')
  },
  {
    path:'/',
    redirect:'/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
