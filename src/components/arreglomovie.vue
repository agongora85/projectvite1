<template>
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
</template>

<script setup lang="ts">
const movies=["Lord of the Rings","Star Wars", "Dune", "Batman"]
</script>

<style scope>
</style>