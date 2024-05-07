
// Paso 1: Crear un array vacío
var numeros = [];

// Paso 2: Generar 10 números al azar y guardarlos en el array
for (var i = 0; i < 10; i++) {
    var numero = Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 99
    numeros.push(numero);
}

// Paso 3: Mostrar en consola el resultado del array
console.log("Array de números aleatorios:", numeros);

var entradaUsuario = prompt("Ingrese un string con palabras separadas por coma:");

// Paso 2: Convertir el string en un array utilizando el método split(',')
var arrayPalabras = entradaUsuario.split(',');

// Paso 3: Mostrar en consola el resultado del array
console.log("Array de palabras:", arrayPalabras);

// Paso 1: Definir el array dado
var arreglo = [10, 40, 30, 20, 15, 5];

// Paso 2: Ordenar el arreglo de menor a mayor
arreglo.sort(function(a, b) {
    return a - b;
});

// Paso 3: Obtener el número menor y mayor del arreglo
var numeroMenor = arreglo[0];
var numeroMayor = arreglo[arreglo.length - 1];

// Paso 4: Mostrar en consola el arreglo ordenado, el número menor y el número mayor
console.log("Arreglo ordenado de menor a mayor:", arreglo);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);