import {heroes}  from "../data/heroes";

// const getHeroeById = (id)=>{
//     return heroes.find(Heros => {
//         if(Heros.id == id){
//         return true;
//     } else {
//         return false;
//     }})
// }

// console.log(getHeroeById(4))


export const getHeroeById = (id)=> heroes.find(Heros => Heros.id === id)

// console.log(getHeroeById(4))

export const getHeroesByOwner = owner => heroes.find(hero => hero.owner === owner)
//   tengo el atributo por el que quiero buscar, luego uso el array . find () al interior de este método se espera un callback generalmente se pasa una arrowfunction que debe contener la condicion para que en caso de que se cumpla se retorne el objeto del array.

// console.log(getHeroesByOwner('DC'))

// export {getHeroesByOwner as default}
