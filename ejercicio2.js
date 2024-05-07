// Primer ejercicio
var numeroUsuario = parseInt(prompt("Introduce un número:"));

console.log("Los múltiplos de 5 hasta", numeroUsuario, "son:");

for (var i = 1; i <= numeroUsuario; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// Segundo ejercicio
var num1 = parseInt(prompt("Introduce el primer número (entre 1 y 50):"));
var num2 = parseInt(prompt("Introduce el segundo número (entre 1 y 50):"));

console.log("Los números del 1 al 50:");

for (var i = 1; i <= 50; i++) {
    if (i === num1 || i === num2) {
        console.log(i, "¡Lotería!");
    } else {
        console.log(i);
    }
}

// Tercer ejercicio
var numeros = [];

while (true) {
    var numero = parseInt(prompt("Introduce un número (0 para terminar):"));
    if (numero === 0) {
        break;
    }
    numeros.push(numero);
}

console.log("Números capturados:", numeros);

// Cuarto ejercicio
var texto = "";

while (true) {
    var entrada = prompt("Introduce una palabra o letra (Presiona enter para terminar):");
    if (entrada === "") {
        break;
    }
    texto += entrada;
}

console.log("Palabras capturadas:", texto);

// Quinto ejercicio

var dias = true;
while (dias) {
    var dia = prompt("Introduce un día de la semana:");
    
    switch (dia.toLowerCase()) {
        case "lunes":
            alert("¡Ánimo, es lunes!");
            break;
        case "martes":
            alert("¡Buen martes!");
            break;
        case "miércoles":
            alert("¡Mitad de semana!");
            break;
        case "jueves":
            alert("¡Casi viernes!");
            break;
        case "viernes":
            alert("¡Por fin viernes!");
            break;
        case "sábado":
            alert("¡Feliz sábado!");
            break;
        case "domingo":
            alert("Ve a descansar");
            dias = false;
            break; // Termina el programa si es domingo
        default:
            alert("Día no reconocido");
    }
}
