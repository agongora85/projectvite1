<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>
        <div>
            <button @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>
2409/2026
<script setup lang="ts">
import { ref, computed } from 'vue';
const counter = ref(2);
// Para hacer uso de las variables debemos de incluir el .value de lado del TypeScript, solamente cuando estamos trabajando con variables reactivas de tipo Ref
const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scope>
</style>