import { expect, test } from 'vitest'
import { sum } from '../../src/helpers/sum'

test('adds 1 + 2 to equal 3', () => {
    // expect(sum(1,2)).toBe(3)
    // Preparación
    const a = 1;
    const b = 2;
    // Estimulo
    const result = sum(a,b);
    // El comportamiento resultante esperado
    expect(result).toBe(a + b);

    /*if(sum(1,2) !==  3){
        throw new Error('La suma no es correcta');
    }*/
})