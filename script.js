// Temperature Converter
function temperature() {
  const number = parseFloat(document.getElementById('number').value);
  const temp = document.getElementById('temperature').value;
  const message = document.getElementById('message');
  
  // if
  if (isNaN(number)) {
    alert("Input temperature first, wag matigas ulo!");
    alert("Numero ilalagay hindi text, okay!");
    alert("Wag na ako pahirapan mag debug pa! loveu")
    return;
  }
  
  if (temp === "celsius") {
    let far = (number * 9/5) + 32;
    message.textContent = `Temperature Fahrenheit: ${far}`;
  } else if (temp === "fahrenheit") {
    let cel = (number - 32) * 5/9;
    message.textContent = `Temperature Celsius: ${cel}`;
  }
}