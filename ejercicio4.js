function cambiarSemaforo() {
    var semaforo = ["verde", "amarillo", "rojo"];
    var indice = 0;

    // Mostrar el estado inicial del semáforo
    console.log("Semaforo:", semaforo[indice]);

    // Cambiar el estado del semáforo cada 2 segundos
    var intervalo = setInterval(function() {
        indice = (indice + 1) % 3;
        console.log("Semaforo:", semaforo[indice]);

        // Si el semáforo está en rojo, detener el cambio después de mostrarlo
        if (semaforo[indice] === "rojo") {
            clearInterval(intervalo);
        }
    }, 2000);
}

// Iniciar el cambio de semáforo
cambiarSemaforo();
