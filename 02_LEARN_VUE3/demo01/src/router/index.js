import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'HomeView',
		component: () => import(/* webpackChunkName: "HomeView" */ '../views/HomeView.vue')
	},
	{
		path: '/lifecycle',
		name: 'LifeCycleView',
		component: () => import(/* webpackChunkName: "LifeCycleView" */ '../views/LifeCycleView.vue')
	},
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
