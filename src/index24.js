const btn = document.getElementById("btn");

const colores = [
    'Red',
    'Green',
    'Blue',
    'Yellow',
    'Purple',
    'Orange',
    'Pink',
    'Cyan',
    'Magenta',
    'Brown',
    'Gray',
    'White',
    'Teal',
    'Navy'
];

btn.addEventListener("click", () => {

    const colorAleatorio=colores[Math.floor(Math.random()*colores.length)];
    
    document.body.style.backgroundColor=colorAleatorio;
    
    alert(`El color de fondo esta por cambiar a ${colorAleatorio}`);
});