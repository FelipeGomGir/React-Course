import {getHeroesByOwner, getHeroeById}  from "./bases/08-import-export";
// Las promesas se crean asi; el objeto promise recibe un callback que tiene dos argumentos el resolve que es otro callback, que se va ejecutar cuando la promesa es exitosa y el reject en el caso contrario
// const promesa = new Promise((resolve,reject)=>{
//  setTimeout(() => {
//     // tarea 
//     // importen el import-export.js
//     const heroe = getHeroesByOwner('DC')
//     console.log(heroe)
//     const heroeid = getHeroeById(2)
//     console.log(heroeid)
//     // El parametro que se le pase al resolve, le llega al .then()
//     // resolve(heroeid);
//     reject('No se pudo encontrar el héroe')
//  }, 2000);
// // setTimeout es una funcion que permite ejecutar codigo en cuanto se cumpla un tiempo determinado.
// });

// //  Asi reaccionamos o esperamos a que la promesa termine o se cumpla.
// //  el then se usa cuando se cumple satisfactoriamentela promesa o sea que el resolve fu llamado. 
// //  el catch en caso de que algo no funcione y se deba manejar el error o sea que el reject fue llamado.
// //  el finally es lo ultimo que se ejectua y siempre se hará aunque la promesa fallé o se resuelva.
// //  para que promesa.then() sea ejecutada dentro de la promesa se debe llamar el callback resolve(),
// promesa.then( (heroe)=>{
//     console.log('Heroe', heroe)
// }).catch(err=>console.warn(err));

const getHeroeByIdAsync = (id)=>{
    // se puede retornarn asu 
    return new Promise((resolve,reject)=>{
 setTimeout(() => {
    // tarea 
    // importen el import-export.js
    // const heroe = getHeroesByOwner('DC')
    // console.log(heroe)
    
    const heroeid = getHeroeById(id)
    console.log(heroeid)
    // El parametro que se le pase al resolve, le llega al .then()
    // resolve(heroeid);
    if(heroeid)
    {resolve(heroeid);}
    else{
        reject('Heroe no encontrado');
    }
 }, 2000);
})}
// Es posible solo escribir console.log porque then pasara el primer argumento a la funcion referenciada dentro del then al igual que catch
getHeroeByIdAsync(124)
.then(console.log)
.catch(console.log)