<script lang="ts" setup>
import { reactive } from 'vue' 
const usuario= reactive({
    name: 'Alejandro',
    lastName: 'Góngora'
})

const numberArray=[1,2,3,4,5]
numberArray.push(6)
console.log({numberArray})

// Para cuando los valores son fijos y no quisieramos que se alteren
const numberArrayAge=[20, 25, 22, 35, 40] as const;
console.log({numberArrayAge})

// Si queremos definir un arreglo que establezca los valores de uno ya creado podemos hacer lo siguiente
const numberArrayAge2=[...numberArray]
numberArrayAge2.push(43)

console.log({numberArrayAge2})

const numberxStringArray:(number|string)[]=[12, 'Alex', 30, 'Góngora']

console.log({numberxStringArray})
console.log(numberxStringArray[2].toString())

</script>

<template>
<div>Los datos del usuario son: {{  usuario.name }}</div>
</template>


<style scope>
</style>