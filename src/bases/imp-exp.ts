import heroes, { type Owner } from "../data/heroes";
/*
Después del import podemos agregar una palabra que haga referencia a todo el contenido que se pretende importar, en el caso de este código el nombre de heroes va a tomar todo lo que se encuentre dentro del archivo heroes
*/

export const getHeroById=(id: number) => {
    return heroes.find(hero => hero.id === id);
}

/*
export const getHeroesByOwner = (owner: string) => {
    return heroes.filter(heroe => heroe.owner === owner);
}
*/

// Si queremos manejar tipado de datos la función quedaría de la siguiente manera
export const getHeroesByOwner = (owner: Owner) =>  {
    return heroes.filter(heroe => heroe.owner === owner);
}

console.log(getHeroById(5));
console.log(getHeroesByOwner('DC'));
console.log(getHeroesByOwner('Marvel'));