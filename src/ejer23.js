// Obtener todos los botones de opción (radio)
const radioButtonsLanguage = document.querySelectorAll('input[name="language"]');
const radioButtonsTool = document.querySelectorAll('input[name="tool"]');
const botonesRadioHerramienta = document.querySelectorAll('input[name="herramienta"]');

// Obtener el elemento donde se mostrará el valor seleccionado
const selectedLanguage = document.getElementById('selected-language');
const selectedTool = document.getElementById('selected-language');
const herramientaSeleccionada = document.getElementById('herramienta-seleccionada');

// Agregar un evento 'change' a cada botón de opción
radioButtonsLanguage.forEach(radio => {
    radio.addEventListener('change', (event) => {
        // Obtener el valor seleccionado
        const selectedValue = event.target.value;

        // Mostrar el valor seleccionado en el elemento <p>
        selectedLanguage.textContent = `Has seleccionado: ${selectedValue}`;

        // Mostrar el valor seleccionado en la consola
        console.log(`Seleccionado: ${selectedValue}`);
    });
});

radioButtonsTool.forEach(radio => {
    radio.addEventListener('change', (event) => {
        // Obtener el valor seleccionado
        const selectedValue = event.target.value;

        // Mostrar el valor seleccionado en el elemento <p>
        selectedTool.textContent = `Has seleccionado: ${selectedValue}`;

        // Mostrar el valor seleccionado en la consola
        console.log(`Seleccionado: ${selectedValue}`);
    });
});

botonesRadioHerramienta.forEach(radio => {
    radio.addEventListener('change', (event) => {
        // Obtener el valor seleccionado
        const valorSeleccionado = event.target.value;

        // Mostrar el valor seleccionado en el elemento <p>
        herramientaSeleccionada.textContent = `Has seleccionado: ${valorSeleccionado}`;

        // Mostrar el valor seleccionado en la consola
        console.log(`Seleccionado: ${valorSeleccionado}`);
    });
});