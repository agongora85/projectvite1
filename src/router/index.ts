import { createRouter, createWebHistory } from 'vue-router'
import Hello from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import ExampleComponent from '../components/ExampleComponent.vue'
import About from '../components/About.vue'

const routes = [
  { path: '/', name: 'Example', component: ExampleComponent },
  { path: '/about', name: 'About', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
