import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from 'vue'

let routes = [
  // 其他内容页
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    name: 'Index',
    redirect: '/index',
    children: [
      {
        name: 'homeindex',
        path: 'index',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          icon: 'fas fa-home',
        },
      },
      {
        name: 'users',
        path: 'users',
        component: () => import('@/views/Users/index.vue'),
        meta: {
          icon: 'fas fa-user',
        },
      },
      {
        name: 'menus',
        path: 'menus',
        component: () => import('@/views/Menus/index.vue'),
        meta: {
          icon: 'fas fa-bars',
        },
      },
      {
        name: 'roles',
        path: 'roles',
        component: () => import('@/views/Roles/index.vue'),
        meta: {
          icon: 'fas fa-tools',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Login/register.vue'),
  },  
] as RouteRecordRaw[]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
