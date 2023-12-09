import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'Main',
    path: '/',
    component: () => import('pages/index.vue')
  },
  {
    name: '404 error',
    path: '/:pathMatch(.*)*',
    component: () => import('pages/404.vue')
  }
]

export default routes
