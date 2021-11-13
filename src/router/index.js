import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import carouselpok from '../views/carouselpok.vue'
import Cleaning from '../views/Cleaning.vue'
import SelectedDrink from '../views/SelectedDrink.vue'
import ConnectedBeverages from '../views/ConnectedBeverages.vue'



const routes = [
  {
    path: '/',
    name: 'ConnectedBeverages',
    component: ConnectedBeverages
  },
  {
    path: '/drink/:name',
    name: 'SelectedDrink',
    component: SelectedDrink,
  },
{
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
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
