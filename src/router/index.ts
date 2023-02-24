import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/Demo/index.vue'),

  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
