import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodSortView from '../views/FoodSortView.vue'
import HotelSortView from '../views/HotelSortView.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/foodSort',
    name: 'foodSort',
    component: FoodSortView,
  },
  {
    path: '/hotelSort',
    name: 'hotelSort',
    component: HotelSortView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
