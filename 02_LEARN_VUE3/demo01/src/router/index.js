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
		path: '/compositeapi',
		name: 'CompositeApiView',
		component: () => import(/* webpackChunkName: "CompositeApiView" */ '../views/CompositeApi/index.vue'),
		children: [
			{
				path: 'ref',
				component: () => import(/* webpackChunkName: "CompositeApiView1" */ '../views/CompositeApi/refView.vue'),
			},
			{
				path: 'reactive',
				component: () => import(/* webpackChunkName: "CompositeApiView2" */ '../views/CompositeApi/reactiveView.vue'),
			},
			{
				path: 'components',
				component: () => import(/* webpackChunkName: "CompositeApiView2" */ '../views/CompositeApi/componentsView.vue'),
			},
			{
				path: 'provide',
				component: () => import(/* webpackChunkName: "CompositeApiView2" */ '../views/CompositeApi/componentsProvideView'),
			}
		]
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
