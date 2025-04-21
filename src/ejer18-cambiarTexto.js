export function cambiarTexto() {
    const nuevoTexto = prompt("Ingrese el nuevo texto para el párrafo:");
    if (nuevoTexto.trim() !== "") { //distinto a una cadena vacía 
        // Obtener el elemento por su ID y cambiar su contenido
        document.getElementById("texto").textContent = nuevoTexto; 
    } else {
        alert("El texto ingresado está vacío. Intente nuevamente.");
    }
};
