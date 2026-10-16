<template>
    <div v-for="pelicula in peliculas" :key="pelicula.id">
        {{ pelicula.title }} ({{ pelicula.year }})
    </div><br><br>
</template>

<script setup lang="ts">
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

<style scope>
</style>