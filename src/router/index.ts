import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
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
/*import quoted from '../components/quoted.vue';*/
/*import calculatedproperty from '../components/calculatedproperty.vue';*/
import MyCounter from '../components/MyCounter.vue';
import MyCounter2 from '../components/MyCounter2.vue';
import MyCounterScript from '../components/MyCounterScript.vue';

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
  { path: '/usovbind', name: 'usovbind', component: usovbind},
  { path: '/arreglomovie', name: 'arreglomovie', component: arreglomovie},
  { path: '/importacion', name: 'importacion', component: () => import('../components/importacionComponent.vue')},
  { path: '/promesas', name: 'promesas', component: () => import('../components/promesas.vue')},
  { path: '/quoted', name: 'quoted', component: ()=> import('../components/quoted.vue')},
  { path: '/calculatedproperty', name: 'calculatedproperty', component: ()=> import('../components/calculatedproperty.vue')},
  { path: '/mycounter/:id', name: 'mycounter', component: MyCounter},
  // Para recibir los parametros mediante props, se debe de agregar la propiedad props: true en la ruta
  { path: '/mycounter2/:id/:nombre', name: 'mycounter2', component: MyCounter2, props: true},
  // Se convierte el valor en number antes de pasarlo como prop al componente, para ello se utiliza una función que recibe la ruta y retorna un objeto con las props
  { path: '/mycounterscript/:value', name: 'mycounterscript', component: MyCounterScript, props: (route: RouteLocationNormalized) => ({ value: Number(route.params.value ?? 0) }) }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
