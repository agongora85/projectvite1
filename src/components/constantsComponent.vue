<template>
    <div>
        <h3>{{ alumno.lastName }}</h3>
        <h4>El profesor es: {{  profesor.lastName  }}</h4>
    </div>
</template>

<script setup lang="ts">
    import { alumno, profesor } from '../constants/people'
</script>

<style scope>
</style>