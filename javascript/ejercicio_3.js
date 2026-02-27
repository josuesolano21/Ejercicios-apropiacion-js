/* 3. Promedio de tres notas
• Solicita tres calificaciones.
• Calcula y muestra el promedio.*/
let nota1 = Number(prompt("Cual es la primera nota"))
let nota2 = Number(prompt("Cual es la segunda nota"))
let nota3 = Number(prompt("Cual es la tercera nota"))
let promedio = (nota1 + nota2 + nota3) / 3;
console.log(`El promedio de las tres notas ${ promedio }`);