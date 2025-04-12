const numero = prompt("Ingrese un numero del 1 al 12 para saber el mes");

function retornarMes (numero){
    const meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        if(numero >=1 && numero <= 12){
            alert( `el mes corresponde al numero ${numero} es ${meses[numero - 1 ]}`)
        }else{
            alert ("no es un mes valodo");
        }
};

// Llamar a la función pasando el número ingresado por el usuario
//Como prompt() devuelve un valor como cadena de texto, utilicé parseInt(numero) para asegurarnos de que el valor sea un número entero.
retornarMes(parseInt(numero));