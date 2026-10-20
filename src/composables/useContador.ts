import { ref } from 'vue'

export function useContador(){
    const contador=ref(0)

    const incrementar = () => {
        contador.value++
    }

    const decrementar = () => {
        contador.value--
    }

    const reiniciar = () => {
        contador.value=0
    }

    return {
        contador,
        incrementar,
        decrementar,
        reiniciar
    }
}