import { ref, computed } from 'vue';
export const useCounter = (initialValue: number = 5) => {
    const counter = ref(initialValue); 
    const nombre ="Alejandro"; 
    return{
        counter,
        squareCounter: computed(() => counter.value * counter.value),
        nombre
    };
};