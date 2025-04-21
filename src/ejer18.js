import { cambiarTexto } from "./ejer18-cambiarTexto.js"; //importar la función cambiarTexto 

const boton = document.getElementById("cambiar_Texto"); 

boton.addEventListener("click", () => {
    cambiarTexto();
});
 
 