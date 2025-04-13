function sumarRango(numeroInicial, numeroFinal) {
    if (numeroInicial > numeroFinal) {
        throw new Error("El número inicial debe ser menor o igual que el número final.");
    }

    let suma = 0;
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma += i;
    }
    return suma;
}

// Solicitar al usuario el rango de números
const numeroInicial = parseInt(prompt("Ingrese el número inicial:"));
const numeroFinal = parseInt(prompt("Ingrese el número final:"));

try {
    const resultado = sumarRango(numeroInicial, numeroFinal);
    console.log(`La suma del rango de números entre ${numeroInicial} y ${numeroFinal} es: ${resultado}`);
    alert(`La suma del rango de números entre ${numeroInicial} y ${numeroFinal} es: ${resultado}`);
} catch (error) {
    console.error(error.message);
    alert(error.message);
}