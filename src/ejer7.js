/*
7. Declarar un array denominado nombres con al menos 6 nombres. Obtener el nombre más
 largo del array nombres. Las cadenas de textos (String) son listas de caracteres y las
 listas tienen un largo (length) que indica su tamaño.
*/

/*
-->>>length
    tiene dos usos principales:
     1-Para cadenas de texto (String): Devuelve la cantidad de caracteres que tiene la cadena, incluyendo
       espacios y símbolos.
     2- Para arreglos (Array): Devuelve la cantidad total de elementos que contiene el arreglo.
*/

let nombres = ["Juan", "María", "Alejandro", "Isabella", "Cristina", "Fernando"];
let nombreMasLargo, max; //string
let band = true;

for (i=0; i<nombres.length; i++){
  if(band){
    max=nombres[i];
    band=false;
  }else{
    if(nombres[i].length > max.length){
      max=nombres[i];
    }   
  } 
}

console.log("El nombre más largo es: " + max);