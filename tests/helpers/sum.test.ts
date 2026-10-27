import { describe, expect, test } from 'vitest'
import { sum, addArray } from '../../src/helpers/sum'

describe('add function', () => {
    test('adds 1 + 2 to equal 3', () => {
        // expect(sum(1,2)).toBe(3)
        // Preparación
        const a = 1;
        const b = 2;
        // Estimulo
        const result = sum(a,b);
        // El comportamiento resultante esperado
        expect(result).toBe(a + b);
        // Se compara, se estimula y después produce los resultados correspondientes
        /*if(sum(1,2) !==  3){
            throw new Error('La suma no es correcta');
        }*/
    });
});

describe('addArray function', ()=>{
    test('should return 0 if the array is empty', ()=>{
        const numberArray = [];
        const result = addArray(numberArray);
        expect(result).toBe(0);
    });

    test('should return proper value of the addArray function', () => {
        const numberArray = [1, 2, 3, 4, 5];
        const result = addArray(numberArray);
        expect(result).toBe(15);    
    });
});

