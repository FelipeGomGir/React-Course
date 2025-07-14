// Tarea 
// 1. El primer valor de arr se llamará nombre.
// 2. Se llamará setNombre

const useState = (valor) => {
    return [valor, ()=>{ console.log('Hola Mundo')}];
}

const [ nombre, setName] = useState('Goku');

console.log( nombre );
setName()
