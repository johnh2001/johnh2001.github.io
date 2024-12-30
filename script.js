const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = "Hello from JavaScript!";
});

function showCalculator() {
  const calculatorContainer = document.getElementById('calculator-container');
  calculatorContainer.style.display = 'block'; 

  const elt = document.getElementById('calculator');
  const calculator = Desmos.GraphingCalculator(elt); 
}