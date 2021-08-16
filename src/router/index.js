import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from './public.routes'
import pageGuardian from './guardian'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [...publicRoutes],
})

router.beforeEach((to, from, next) => {
  pageGuardian(to, from, next)
  document.title = to.meta.title
})

export default router
