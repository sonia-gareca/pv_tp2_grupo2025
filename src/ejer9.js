/*Ejercicios para usar prompt
9. Solicitar al usuario que ingrese su nombre, luego muestre un mensaje de bienvenida: Hola 
(aquí el nombre del usuario), bienvenido a Programación Visual!
*/

/*
En JavaScript, prompt es una función que muestra un cuadro de diálogo en el navegador para solicitar al usuario que ingrese un valor.
*/


let nombre;

// Se le pide al usuario que ingrese su nombre y se almacena en la variable nombre
nombre = prompt( "Ingrese su nombre: " ); 
console.log( "Hola " + nombre + ", bienvenido a Programación Visual!" ); //concatenación de cadenas
