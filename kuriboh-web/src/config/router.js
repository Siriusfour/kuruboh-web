import { createMemoryHistory, createRouter } from 'vue-router'

import purchase from '../components/purchase/purchase.vue'
import apply from '../components/apply/apply.vue'
import shoppingCar from '../components/shoppingCar/shoppingCar.vue'


const routes = [
  { path: '/apply', component: apply },
  { path: '/', component: purchase },
  { path: '/shoppingCar', component: shoppingCar },

]

export  const router = createRouter({
  history: createMemoryHistory(),
  routes,
})