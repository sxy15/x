import { createWebHistory , createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./index.vue') },
    { path: '/about', component: () => import('./about.md') },
  ],
})

export default router
