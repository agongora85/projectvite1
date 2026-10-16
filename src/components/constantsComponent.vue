<template>
    <div>
        <h3 class="text-3xl font-bold underline">{{ alumno.lastName }}</h3>
        <h4>El profesor es: {{  profesor.lastName  }}</h4>
    </div>
</template>

<script setup lang="ts">
    import { alumno, profesor } from '../constants/people'
</script>

<style scope>
</style>