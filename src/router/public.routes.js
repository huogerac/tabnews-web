import Public from '../pages/layouts/Public.vue'
import Home from '../pages/public/Home.vue'
import Login from '../pages/public/Login.vue'
import Pagina403 from '../pages/public/403'
import Pagina404 from '../pages/public/404'
import Pagina500 from '../pages/public/500'
import Authorize from '../pages/public/Authorize'

export default [
  {
    path: '/',
    component: Public,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          title: 'Home',
          permission: '*',
        },
      },
      {
        path: 'login',
        name: 'login',
        component: Login,
        meta: {
          title: 'Login',
          permission: '*',
        },
      },
      {
        path: '403',
        name: '403',
        component: Pagina403,
        meta: {
          permission: '*',
        },
      },
      {
        path: '404',
        name: '404',
        component: Pagina404,
        meta: {
          permission: '*',
        },
      },
      {
        path: '500',
        name: '500',
        component: Pagina500,
        meta: {
          permission: '*',
        },
      },
      {
        path: 'authorize',
        name: 'authorize',
        component: Authorize,
        props: true,
        meta: {
          title: 'Authorize',
          permission: '*',
        },
      },
    ],
  },
]
