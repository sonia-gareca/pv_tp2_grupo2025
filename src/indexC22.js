const input = document.getElementById('texto');
const output = document.getElementById('output');

input.addEventListener('input', () => {
const texto = input.value;
output.textContent = texto || 'texto';

if (texto.length > 20) {
    output.style.backgroundColor = 'red';
    output.style.color = 'white';
    output.style.fontWeight = 'bold';
} else {
    output.style.backgroundColor = 'white';
    output.style.color = 'black';
    output.style.fontWeight = 'normal';
}  
})