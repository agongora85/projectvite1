export function sum(a: number, b: number){
    return a + b
}

/**
 * 
 * arr indica que debe de ser un array de numeros
 * Cuando entra a la función de reduce lo que hace es tomar el valor acc como acumulador y el valor de curr como el elemento actual, es decir:
 * acc = acumulador
 * cur = elemento actual
 * 0 equivale al valor inicial
 */
export const addArray = (arr: number[]):number => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}; 