import { obtenerDatos } from "./ejer19-Datos.js";

const boton = document.getElementById("mostrarDatos");

boton.addEventListener("click", () => {
    obtenerDatos();
});

 