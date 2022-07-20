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
				component: () => import(/* webpackChunkName: "CompositeApiView2" */ '../views/CompositeApi/componentsProvideView.vue'),
			}
		]
	},
	{
		path: '/globalstore',
		name: 'GlobalStoreView',
		component: () => import(/* webpackChunkName: "GlobalStoreView" */ '../views/GlobalStoreView.vue')
	},
	{
		path: '/ajax',
		name: 'AjaxView',
		component: () => import(/* webpackChunkName: "AjaxView" */ '../views/AjaxView.vue')
	},
	{
		path: '/vuex',
		name: 'VuexView',
		component: () => import(/* webpackChunkName: "VuexView" */ '../views/VuexView.vue')
	},
	{
		path: '/vuex02',
		name: 'VuexView02',
		component: () => import(/* webpackChunkName: "VuexView02" */ '../views/VuexView02.vue')
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
