<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import SimpleArray from './components/SimpleArray.vue';
import './bases/functions.ts'
import './bases/deses-obj.ts'
import './bases/deses-array.ts'

</script>

<template>
  <Navbar/>
  <main>Bienvenido, selecciona una opción del menú para ver los contenidos de la página.</main>
  <RouterView/>
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

main{
  text-align: justify;
  padding: 10px;
}
</style>