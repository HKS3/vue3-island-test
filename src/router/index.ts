import { createRouter, createWebHashHistory } from 'vue-router'
import SiteHome from '../views/SiteHome.vue'
import Page1Home from '../views/Page1Home.vue'
import Page1Hase from '../views/Page1Hase.vue'
import Page2Home from '../views/Page2Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/page1',
      name: 'page1-home',
      component: Page1Home
    },
    {
      path: '/page1/hase',
      name: 'page1/hase',
      component: Page1Hase,
    },
    {
      path: '/page2',
      name: 'page2-home',
      component: Page2Home
    }
  ]
})

export default router
