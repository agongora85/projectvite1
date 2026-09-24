<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import './bases/functions.ts'
import './bases/deses-obj.ts'
import './bases/deses-array.ts'

</script>

<template>
  <Navbar/>
  <RouterView/>
</template>
<style scoped>
.title{
  color:blueviolet;
}

.highlight{
  color:yellow;
}

.red{
  color:red;
}

main{
  text-align: justify;
  padding: 10px;
}
</style>