<template>
  <div>
    <h2>Contador: {{ contador }}</h2>

    <button @click="incrementar">
      +
    </button>

    <button @click="decrementar">
      -
    </button>

    <button @click="reiniciar">
      Reiniciar
    </button>
  </div>
</template>

<script setup lang="ts">
import { useContador } from '../composables/useContador'

const {
  contador,
  incrementar,
  decrementar,
  reiniciar
} = useContador()
</script>
