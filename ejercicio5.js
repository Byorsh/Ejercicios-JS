// Definir los productos y sus precios
var productos = [
    { nombre: "Aqua", precio: 200 },
    { nombre: "Emocion", precio: 180 },
    { nombre: "Alegria", precio: 160 },
    { nombre: "Frescura", precio: 150 }
];

// Inicializar las ventas de cada vendedor
var ventasJuana = [0, 0, 0, 0]; // Cantidad vendida de cada producto por Juana
var ventasPedro = [0, 0, 0, 0]; // Cantidad vendida de cada producto por Pedro

// Función para registrar una venta
function registrarVenta() {
    var vendedor = prompt("Ingrese el nombre del vendedor (Juana o Pedro):").toLowerCase();
    var producto = prompt("Ingrese el nombre del producto (Aqua, Emoción, Alegría o Frescura):").toLowerCase();
    var cantidad = parseInt(prompt("Ingrese la cantidad vendida:"));

    // Validar si la cantidad es un valor numérico
    if (isNaN(cantidad)) {
        console.error("Error: La cantidad ingresada no es un valor numérico.");
        return;
    }

    // Encontrar el índice del producto
    var indiceProducto = productos.findIndex(function(item) {
        return item.nombre.toLowerCase() === producto;
    });

    // Validar si se ingresó un producto válido
    if (indiceProducto === -1) {
        console.error("Error: Producto no válido.");
        return;
    }

    // Registrar la venta
    if (vendedor === "juana") {
        ventasJuana[indiceProducto] += cantidad;
    } else if (vendedor === "pedro") {
        ventasPedro[indiceProducto] += cantidad;
    } else {
        console.error("Error: Vendedor no válido.");
    }
}

// Función para calcular los resultados
function calcularResultados() {
    // Calcular la suma total de dinero recolectada por cada vendedor
    var totalJuana = ventasJuana.reduce(function(total, cantidad, indice) {
        return total + cantidad * productos[indice].precio;
    }, 0);
    var totalPedro = ventasPedro.reduce(function(total, cantidad, indice) {
        return total + cantidad * productos[indice].precio;
    }, 0);

    // Mostrar las ventas de cada vendedor
    console.log("Ventas de Juana:");
    ventasJuana.forEach(function(cantidad, indice) {
        console.log(productos[indice].nombre + ": " + cantidad);
    });
    console.log("Total recaudado por Juana: " + totalJuana + " USD");

    console.log("Ventas de Pedro:");
    ventasPedro.forEach(function(cantidad, indice) {
        console.log(productos[indice].nombre + ": " + cantidad);
    });
    console.log("Total recaudado por Pedro: " + totalPedro + " USD");

    // Determinar al empleado del mes
    if (totalJuana > totalPedro) {
        console.log("Empleado del mes: Juana");
    } else if (totalPedro > totalJuana) {
        console.log("Empleado del mes: Pedro");
    } else {
        console.log("¡Empate! Ambos vendedores recaudaron la misma cantidad.");
    }
}
