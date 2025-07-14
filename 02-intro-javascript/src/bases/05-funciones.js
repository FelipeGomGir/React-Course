// funciones en JS 
function saludar(nombre){
    return `Hola, ${ nombre }`;
}

console.log( saludar('Goku'))

const saludar2 = nombre => `Hola, ${nombre}`;

console.log(saludar2("Hola"))

// Tarea 
//  1. Transformen a una funcion flecha 
//  2. Tiene que retornar un objeto implícito
//  3. Pruebas

function getUsuarioActivo( nombre ){
    return {
        uid: "ABC567",
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);

// Solucion 
const usuarioActivo2 = (nombre)=>({
         uid: "ABC567",
         username: nombre
    })

console.log(usuarioActivo2("Hola2"))