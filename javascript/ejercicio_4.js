/*4. Conversión de monedas
• Solicita un valor en pesos colombianos.
• Convierte a dólares (suponiendo 1 USD = 4000 COP).*/

let PesosCol = parseFloat(prompt("valor en pesos Colombianos"));
let Dolar = PesosCol / 3600;
console.log(PesosCol + "COP equivalente a: " + Dolar + "USD");
