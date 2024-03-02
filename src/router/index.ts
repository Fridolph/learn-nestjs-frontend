import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from 'vue'

let routes = [] as RouteRecordRaw[]

routes = [
  // {
  //   path: '/',
  //   name: 'Index',
  //   component: () => import('@/App.vue'),

  // },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}