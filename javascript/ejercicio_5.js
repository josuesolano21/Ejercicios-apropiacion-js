/*. Conversión de temperatura
• Solicita una temperatura en Celsius.
• Convierte a Fahrenheit usando la fórmula: F = (C × 9/5) + 32. */

let Celsius = parseFloat(prompt("Tempreratura en Celsius"));
let Fahrenheit = (Celsius * 9 / 5) + 32;
console.log(Celsius + "°C equivale a: " + Fahrenheit + "°F");