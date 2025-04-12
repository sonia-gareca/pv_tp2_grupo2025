const numero = [1,2,3,4,5];

function duplicar(arreglo){
    const nuevoArreglo = arreglo.map(num => num * 2);
    return nuevoArreglo;
};

const resultado = duplicar(numero);

console.log(resultado);