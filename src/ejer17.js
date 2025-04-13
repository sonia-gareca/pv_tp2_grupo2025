function contarLetraA(cadena) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    return contador;
}

// devolvel el resultado 
const texto = prompt("Ingrese un texto:");
const cantidadA = contarLetraA(texto);
alert(`La letra "a" aparece ${cantidadA} veces en el texto ingresado.`);
console.log(`La letra "a" aparece ${cantidadA} veces en el texto ingresado.`);