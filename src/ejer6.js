/*
6. Crear un array denominado edades con al menos 8 edades distintas.
   Recorrer el array y obtener el promedio de las edades del array.
*/

const edades = [18, 22, 25, 30, 35, 40, 45, 50];

let suma = 0;
let promedio, i;


for (i=0; i<=7; i++){
    suma=suma+edades[i];
}

promedio = suma/8;

console.log("EL promedio de las edades es: " + promedio);

