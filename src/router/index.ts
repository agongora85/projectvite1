import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import ExampleComponent from '../components/ExampleComponent.vue'
import SimpleArray from '../components/SimpleArray.vue'
import About from '../components/About.vue'
import ArrayComponent from '../components/ArrayComponent.vue'
import fatherComponent from '../components/fatherComponent.vue'
import constantsComponent from '../components/constantsComponent.vue'
import ObjectLiterals from '../components/ObjectLiterals.vue'
import HeaderComponent from '../components/HeaderComponent.vue';
import usovbind from '../components/usovbind.vue';
import arreglomovie from '../components/arreglomovie.vue';

const routes = [
  { path: '/', name:'helloWorld', component: HelloWorld},
  { path: '/example', name: 'Example', component: ExampleComponent },
  { path: '/about', name: 'About', component: About },
  { path: '/arreglosimple', name: 'ArregloSimple', component: SimpleArray },
  { path: '/arraycomponent', name: 'arrayComponent', component: ArrayComponent},
  { path: '/tipoPadre', name: 'tipoPadre', component: fatherComponent},
  { path: '/constants', name: 'constants', component: constantsComponent},
  { path: '/objectLiterals', name: 'objectLiterals', component: ObjectLiterals},
  { path: '/headerComponent', name: 'headerComponent', component: HeaderComponent},
  { path: '/usovbind', nmae: 'usovbind', component: usovbind},
  { path: '/arreglomovie', name: 'arreglomovie', component: arreglomovie},
  { path: '/importacion', name: 'importacion', component: () => import('../components/importacionComponent.vue')},
  { path: '/promesas', name: 'promesas', component: () => import('../components/promesas.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
