// Lista de países y capitales
const paisesCapitales = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Chile: "Santiago",
    Colombia: "Bogotá",
    México: "Ciudad de México",
    Perú: "Lima"
};

// Referencias a los elementos del DOM
const paisesSelect = document.getElementById("paises");
const capitalesSelect = document.getElementById("capitales");

// Poblar la lista de países
Object.keys(paisesCapitales).forEach(pais => {
    const option = document.createElement("option");
    option.value = pais;
    option.textContent = pais;
    paisesSelect.appendChild(option);
});

// Evento change para actualizar la capital
paisesSelect.addEventListener("change", () => {
    const paisSeleccionado = paisesSelect.value;

    // Limpiar la lista de capitales
    capitalesSelect.innerHTML = '<option value="">Seleccione una capital</option>';

    if (paisSeleccionado) {
        // Habilitar el select de capitales
        capitalesSelect.disabled = false;

        // Agregar la capital correspondiente
        const capital = paisesCapitales[paisSeleccionado];
        const option = document.createElement("option");
        option.value = capital;
        option.textContent = capital;
        capitalesSelect.appendChild(option);

        // Seleccionar automáticamente la capital
        capitalesSelect.value = capital;

        // Mostrar mensaje en consola
        console.log(`País seleccionado: ${paisSeleccionado}, Capital: ${capital}`);
    } else {
        // Deshabilitar el select de capitales si no hay país seleccionado
        capitalesSelect.disabled = true;
    }
});