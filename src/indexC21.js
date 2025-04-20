const input = document.getElementById('texto');
const salida = document.getElementById('salida');

input.EventoInput('input', () => {
salida.textContent = input.value || 'texto';
});