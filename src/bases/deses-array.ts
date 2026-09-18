const colores=['rojo','verde','azul']
// Normalmente tendríamos el siguiente código para acceder a cada valor
const color1=colores[0];
const color2=colores[1];
const color3=colores[2];

console.log(color1)

// Con desestructuración podemos llevar a cabo lo siguiente
const [c1, c2, c3]=colores;
console.log(c2)
const [,,tc] = colores;
console.log(tc)

// Operador Rest (...)
const numeros=[10, 20, 30, 40, 50];
const [primero, ...restantes]=numeros;
console.log(primero)
console.log(restantes)

// Intercambio de variables
let a=10;
let b=20;
[a,b]=[b,a]
console.log(a)
console.log(b)