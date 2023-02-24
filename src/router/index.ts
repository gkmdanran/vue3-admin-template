import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Cookies from "js-cookie";
import { ElMessage } from 'element-plus';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    children: [
      {
        path: '',
        name: 'Welcome',
        component: () => import('@/views/Welcome/index.vue'),
      },
      {
        path: '/demo',
        name: 'Demo',
        component: () => import('@/views/Demo/index.vue'),
      },
    ],
  },
  { path: '/:path(.*)', component: () => import('@/views/NotFound/index.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    if (Cookies.get('TOKEN')) {
      next()
    } else {
      ElMessage({
        type: 'warning',
        message: '请先登录',
      })
      next({ name: 'Login' })
    }
  }
})
export default router
