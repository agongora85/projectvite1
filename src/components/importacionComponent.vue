<template>
    <div v-for="hero in heroesdc" :key="hero.id">
        {{ hero.name }} - {{ hero.owner }}
    </div><br>
    <div v-for="h in heroesm" :key="h.id">
        {{ h.name }} - {{ h.owner }}
    </div>
</template>

<script setup lang="ts">
import { getHeroesByOwner } from '../bases/imp-exp';
const heroesdc = getHeroesByOwner('DC');
const heroesm = getHeroesByOwner('Marvel') ;
</script>

<style scope>
</style>