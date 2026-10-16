<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>
        <h2>Total: {{ total }}</h2>
        <div>
            <button @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
const counter = ref(2);
const precio=ref(5);
// Para hacer uso de las variables debemos de incluir el .value de lado del TypeScript, solamente cuando estamos trabajando con variables reactivas de tipo Ref
const squareCounter = computed(() => counter.value * counter.value);
const total = computed(() => counter.value * precio.value);
</script>

<style scope>
</style>