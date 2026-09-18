// Definimos primero una interfaz, con base en ciertas propiedades o atributos
interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?:string;
}

// Procemos a crear el objeto de acuerdo a la interfaz definida
export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Iroman'
}

console.log(person.name);
console.log(person.age);
console.log(person.codeName);

// Sacamos las propiedades anteriores para asignarlas en nuevas variables
// Implica que todo el contenido de person se va a pasar a varibles indivioduales
const { age, name, codeName, power = 'No tiene el poder' } = person;


// Equivale a hacer:
/*const age = person.age;
const name = person.name;
const codeName = person.codeName;
const power = person.power ?? 'No tiene el poder';*/

console.log({ age, name, power });

// Creamos una segunda interfaz
interface CreateHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?:string;
}

// Creamos un nuevo objeto
// Tomo las propiedades derivado de person y le asigno los valores que tiene al nuevo objeto
const createHero = (
    { name, age, codeName, power }: CreateHeroArgs) =>(
    {
        id: 1872376,
        name: name,
        age: age,
        codeName: codeName,
        power: power ?? 'No tiene poder',
    }
)

console.log("La desestructuración quedaría de la siguiente manera:");
console.log(createHero(person));
const hero= createHero(person);
console.log("El nombre es: "+hero.name);
console.log("La edad es: "+hero.age);
console.log("El código name: "+hero.codeName);
console.log("El poder es: "+hero.power);

