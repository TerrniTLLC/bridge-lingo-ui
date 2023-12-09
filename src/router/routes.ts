import IndexPage from '@pages/index.vue'
import ErrorPage from '@pages/404.vue'
const routes = [
  {
    name: 'Main',
    path: '/',
    component: IndexPage
  },
  {
    name: '404 error',
    path: '/:pathMatch(.*)*',
    component: ErrorPage
  }
]

export default routes
