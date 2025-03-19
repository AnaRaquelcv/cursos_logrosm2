function sumarTresNumeros(num1, num2, num3) {
    return num1 + num2 + num3;
}

let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

let resultado = sumarTresNumeros(numero1, numero2, numero3);
console.log("La suma es de "+resultado);