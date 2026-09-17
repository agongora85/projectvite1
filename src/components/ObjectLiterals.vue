<script setup lang="ts">
import { ref } from 'vue'
const contador=ref<number>(0)
const person = {
    lastName: 'Juan',
    age:35,
    address:{
        city: 'New York',
        zip: '51323',
        lat: 14.23232,
        lng: 34.5667
    }
}
// Si hago un proceso simple de asignación estariamos modificando ambos atributos
const person2=person;
person2.age=30;

console.log("El valor de person es: "+person.age);
console.log("El valor de person2 es: "+person2.age);
// Si quisiera manejar los dos objetos de forma independiente, sin que la modificación de uno afecte al otro, lo podría hacer de la siguiente manera

const person3=structuredClone(person);
person3.age=20

console.log(person3.age)

function getApellido(ape: string){
    return ape;
}
contador.value=15
</script>

<template>
    <h4>El valor del apellido es: {{  getApellido('Escalante') }}</h4>
    <h5>El valor del contador es {{ contador }}</h5>
</template>

<style scope>

</style>