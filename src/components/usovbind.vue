<template>
    <div>
        <h1 class="title" v-bind:class="myCondition ? 'highlight':'red'">Hola a todos</h1>
        <h1 class="title" :class="myCondition ? 'highlight':'red'">Hola a todos</h1>
        <h2 @click="addOne" :id="myId">El valor de la variable number es: {{ number }}</h2>
        
        <h3 v-if="myCondition">Respuesta derivado de una directiva</h3>
        <h2 v-else-if="condition2">Condición 2</h2>
        <h3 v-else>No se cumplen las condiciones</h3>

        <h4 v-show="myCondition">Se muestra el mensaje</h4>
        <h3 v-if="myCondition">Comprobación</h3>
        <h5>{{ myId }}</h5>
        <input type="text" v-model="number">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const myId="coffe"
/* Definimos una variable de tipo reactiva*/
const number=ref(15);
const addOne=()=>{
  number.value++
}
let myCondition=false
let condition2=false

</script>

<style scope>
</style>