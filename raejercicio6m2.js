let numero = prompt("Ingrese un número para generar su tabla de multiplicación:");
let numeroElegido = parseInt(numero, 10);
if (!isNaN(numeroElegido)) {
    console.log("Tabla de multiplicación para" +numeroElegido);
    for (let i = 1; i <= 10; i++) {
        console.log(numeroElegido * +i);
    }
} else {
    console.log("Por favor ingrese un número válido.");}