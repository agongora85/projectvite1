<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue';
import ObjectLiterals from './components/ObjectLiterals.vue';
import ArrayComponent from './components/ArrayComponent.vue';
import { alumno, profesor } from './constants/people.ts'
import fatherComponent from './components/fatherComponent.vue';
import './bases/functions.ts'
import './bases/deses-obj.ts'
import './bases/deses-array.ts'
/* Definimos una variable de tipo reactiva*/
const number=ref(15);
const addOne=()=>{
  number.value++
}
const myId="coffe"
let myCondition=false
let condition2=false
const movies=["Lord of the Rings","Star Wars", "Dune", "Batman"]

// Definimos la interface
interface Movie {
  id: number,
  title: string,
  year: number
}

const peliculas: Movie[] = [
  { id: 1, title: 'Dune', year: 2021 },
  { id: 2, title: 'Batman', year: 2022 }
]

</script>

<template>
  <h2>Demo Vue 3</h2>
  <div v-for="pelicula in peliculas" :key="pelicula.id">
    {{ pelicula.title }} ({{ pelicula.year }})
  </div><br><br>
  <RouterLink to="/">Example</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterView/>
  <br><br><br><br><br><br><br><br><br><br>
  <fatherComponent/>
  <h3>{{ alumno.lastName }}</h3>
  <h4>El profesor es: {{  profesor.lastName  }}</h4>
  <ArrayComponent></ArrayComponent>
  <ObjectLiterals></ObjectLiterals>
  <HeaderComponent></HeaderComponent>
  <HeaderComponent/>
  <h1 class="title" v-bind:class="myCondition ? 'highlight':'red'">Hola a todos</h1>
  <h1 class="title" :class="myCondition ? 'highlight':'red'">Hola a todos</h1>
  <h2 @click="addOne" :id="myId">El valor de la variable number es: {{ number }}</h2>
  
  <h3 v-if="myCondition">Respuesta derivado de una directiva</h3>
  <h2 v-else-if="condition2">Condición 2</h2>
  <h3 v-else>No se cumplen las condiciones</h3>

  <h4 v-show="myCondition">Se muestra el mensaje</h4>
  <h3 v-if="myCondition">Comprobación</h3>


  <h5>{{ myId }}</h5>
  <div>
    <p v-for="movie in movies" :key="movie">
      {{ movie }}
    </p>
    <!-- Si queremos definir o controlar un index al arreglo establecido la definición del for quedaría de la siguiente manera  -->
     <div v-for="(movie, index) in movies" :key="movie">
      {{ index + 1 }} - {{ movie }}
     </div>
     <!-- Se le suma un 1, ya que es un arreglo y el índice comienza con 0 -->
  </div>
  <input type="text" v-model="number">
</template>
<style scoped>
.title{
  color:blueviolet;
}

.highlight{
  color:yellow;
}

.red{
  color:red;
}
</style>