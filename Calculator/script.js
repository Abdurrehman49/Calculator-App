const displayElement = document.getElementById('display');

function appendValue(value) {
  displayElement.value += value;
}

function clearDisplay() {
  displayElement.value = '';
}

function calculate() {
  try {
    const result = eval(displayElement.value);
    displayElement.value = result;
  } catch (error) {
    displayElement.value = 'Error';
  }
}