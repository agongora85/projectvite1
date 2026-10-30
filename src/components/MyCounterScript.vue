<template>
    <section>
        <h1>{{ nombre }}</h1>
        <h3>Counter: {{  counter }}</h3>
        <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>
        <div>
            <button @click="counter++" class="p-5 bg-blue-50 rounded hover:bg-blue-700 mr-2">+1</button>
            <button @click="counter--" class="p-5 bg-blue-50 rounded hover:bg-blue-700 mr-2">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
// Con la siguientes estructura contamos con más código a comparación del setup script, ya que podemos agregar más opciones como data, methods, computed, etc.
// import { computed, defineComponent, ref } from 'vue';
import { useCounter } from '../composables/useCounter';
interface Props {
    value: number;
}
const props=defineProps<Props>();
const { counter, squareCounter, nombre } = useCounter(props.value);


/*
export default defineComponent({
    // Definimos los props que se mandan con navbar en conjunto con el index.ts, para poder recibirlos en el componente y hacer uso de ellos
    props: {
        value: { type: Number, required: true }
    },
    setup( props ) {
        const counter = ref(props.value);
        const squareCounter = computed(() => counter.value * counter.value);

        // En la siguientes lineas retornamos un objeto
        return {
            counter,
            squareCounter
        };
    },
});*/

</script>

<style scoped>

</style> 