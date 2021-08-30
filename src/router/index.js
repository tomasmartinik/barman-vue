import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cleaning from '../views/Cleaning.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cleaning',
    name: 'Cleaning',
    component: Cleaning
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
  
export default router
