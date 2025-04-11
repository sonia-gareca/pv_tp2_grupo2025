/*
5. Declarar dos variables denominadas horas, minutos, asignar valores a cada una y realizar la conversión 
   para expresar esas horas y minutos en segundos. Mostrar por consola las horas y minutos, luego el resultado 
   de la conversión en segundos.
*/

//variables horas y minutos
let horas = 2; 
let minutos = 30; 

//conversión a segundos
let segundos = (horas * 3600) + (minutos * 60);

// Mostrar los valores
console.log("hs:" + horas + ", " + "min: " + minutos);
console.log("Total en segundos: " + segundos);