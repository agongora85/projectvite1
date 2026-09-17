function greetPerson(name: string){
    return `Hola, ${ name }`;
}

console.log(greetPerson('Fernando'))

// Podemos definir una función de flecha para obtener el mismo resultado
const getUser = (nameUser: string) => `Hola, ${ nameUser }`;
console.log(getUser('María'))
const getDetailUser = () => {
    return {
        uid: 'ABC-1234',
        username: 'Tony001'
    }
}
console.log(getDetailUser())
