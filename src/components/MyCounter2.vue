<template>
    <div></div>
</template>

<script setup lang="ts">

interface Props {
    id: string;
    nombre: string;
}
const props = defineProps<Props>()
    
console.log("Parámetros recibidos:", props.id, props.nombre)
</script>

<style scope>
</style>