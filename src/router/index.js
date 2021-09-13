import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import carouselpok from '../views/carouselpok.vue'
import Cleaning from '../views/Cleaning.vue'
import SelectedDrink from '../views/SelectedDrink.vue'
import ConnectedBeverages from '../views/ConnectedBeverages.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drink/:name',
    name: 'SelectedDrink',
    component: SelectedDrink,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },{
    path: '/carouselpok',
    name: 'carouselpok',
    component: carouselpok
  },
  {
    path: '/cleaning',
    name: 'Cleaning',
    component: Cleaning
  },
  {
    path: '/connectedBeverages',
    name: 'ConnectedBeverages',
    component: ConnectedBeverages
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
