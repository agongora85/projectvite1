<!-- Los componentes deben de estar conformados por dos palabras-->
<template>
    <div>
        <h1>Mi primera App</h1>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
const id= route.params.id;
console.log("El parámetro es: "+id);
</script>

<style scope>
</style>