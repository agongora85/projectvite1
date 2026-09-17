interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?:string;
}

export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Iroman'
}

console.log(person.name);
console.log(person.age);
console.log(person.codeName);

const { age, name, codeName, power = 'No tiene el poder' } = person;
console.log({ age, name, power });

interface CreateHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?:string;
}

const createHero = ({ name, age, codeName, power }: CreateHeroArgs) =>({
    id: 1872376,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
})

console.log("La desestructuración quedaría de la siguiente manera:");
console.log(createHero(person));
const hero= createHero(person);
console.log("El nombre es: "+hero.name);
console.log("La edad es: "+hero.age);
console.log("El código name: "+hero.codeName);
console.log("El poder es: "+hero.power);

