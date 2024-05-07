// Primer ejercicio
console.log("Números impares del 1 al 50:");

for (var i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Segundi ejercicio

var numeroUsuario = parseInt(prompt("Introduce un número:"));

// Array de Pokémons
var pokemones = [
    { numero: 1, nombre: "Bulbasaur" },
    { numero: 2, nombre: "Ivysaur" },
    { numero: 3, nombre: "Venusaur" },
    // ... otros Pokémons
];

console.log("Nombres de Pokémons cuyos números son múltiplos de 5:");

for (var i = 1; i <= numeroUsuario; i++) {
    if (i % 5 === 0 && pokemones[i - 1]) {
        console.log(pokemones[i - 1].nombre);
    }
}

// Tercer ejercicio
var arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

console.log("Elementos tipo número del arreglo:");

for (var i = 0; i < arreglo.length; i++) {
    if (typeof arreglo[i] === "number") {
        console.log(arreglo[i]);
    }
}
