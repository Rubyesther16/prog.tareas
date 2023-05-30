// Obtener referencias a los elementos HTML
var display = document.getElementById('display');
var historyList = document.getElementById('history-list');

// Variable para almacenar el historial de operaciones
var history = [];

// Función para agregar caracteres al campo de visualización
function addToDisplay(value) {
  display.value += value;
}

// Función para calcular el resultado de la operación y mostrarlo
function calculate() {
  var result = eval(display.value);
  display.value = result;
  addToHistory(display.value, result);
}

// Función para borrar el contenido del campo de visualización
function clearDisplay() {
  display.value = '';
}

// Función para borrar el último carácter del campo de visualización
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Función para agregar una operación al historial y guardarlo en localStorage
function addToHistory(operation, result) {
  var entry = operation + ' = ' + result;
  history.push(entry);
  saveHistory();
  displayHistory();
}

// Función para guardar el historial en localStorage
function saveHistory() {
  localStorage.setItem('calculatorHistory', JSON.stringify(history));
}

// Función para cargar el historial desde localStorage
function loadHistory() {
  var historyData = localStorage.getItem('calculatorHistory');
  if (historyData) {
    history = JSON.parse(historyData);
    displayHistory();
  }
}

// Función para mostrar el historial en la lista de HTML
function displayHistory() {
  historyList.innerHTML = '';
  for (var i = 0; i < history.length; i++) {
    var entry = document.createElement('li');
    entry.textContent = history[i];
    historyList.appendChild(entry);
  }
}

// Función para limpiar el historial y eliminarlo de localStorage
function clearHistory() {
  history = [];
  localStorage.removeItem('calculatorHistory');
  displayHistory();
}

// Cargar el historial al cargar la página
loadHistory();
