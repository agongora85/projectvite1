// se importan las tres funciones principales para realizar las pruebas
/**
 * describe : Agrupa pruebas relacionadas
 * test : define una prueba individual
 * expect : permite validar resultados
 */
import { describe, expect, test } from 'vitest'
import { sum, addArray } from '../../src/helpers/sum'


// add function nombre del agrupador
describe('add function', () => { // Grupo de pruebas para sum()
    test('adds 1 + 2 to equal 3', () => { // Definición de la prueba con una breve descripción de lo que se espera
        // expect(sum(1,2)).toBe(3)
        // Preparación
        const a = 1;
        const b = 2;
        // Estimulo
        const result = sum(a,b);
        // El comportamiento resultante esperado
        expect(result).toBe(a + b); // Se espera que el valor obtenido se parte de la suma de a + b (Assert)
        // Se compara, se estimula y después produce los resultados correspondientes
        // Antes del test se hacían validaciones manuales
        /*if(sum(1,2) !==  3){
            throw new Error('La suma no es correcta');
        }*/
    });
});

// addArray funcion nombre del agrupador después de la palabra reservada describe
// addArray(numberArray) tomamos la función definida como parte de los helpers
describe('addArray function', ()=>{
    // Si el arreglo se encuentra vacío debe devolver 0
    test('should return 0 if the array is empty', ()=>{
        const numberArray = [];
        const result = addArray(numberArray);
        expect(result).toBe(0); // Se espera que el valor obtenido sea 0
    });

    test('should return proper value of the addArray function', () => {
        const numberArray = [1, 2, 3, 4, 5];
        const result = addArray(numberArray);
        expect(result).toBe(15); // Se espera que el valor obtenido sea 15    
    });
});

