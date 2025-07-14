// desestructuracion
//asignación desestructurante

const persona ={
    nombre: "Tony",
    edad: 45,
    clave: { tipo: "Ironman"}
}

const useContext = ({nombre,edad,clave:{tipo}})=> {
    return {
        nombre: nombre,
        anios: edad,
        tipoV: tipo
    }}

const {nombre, anios,tipoV} = useContext(persona)

console.log(nombre,anios,tipoV)

