export function obtenerDatos() {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const libreta = document.querySelector("#libreta").value;

    if (nombre.trim() && apellido.trim() && libreta.trim()) {
        alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);
    } else {
        alert("Por favor, complete todos los campos.");
    }
}