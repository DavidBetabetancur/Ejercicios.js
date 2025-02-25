function calcularCosto(operador, minutos) {
    let cargoFijo, valorMinuto, valorPaqueteDatos;

    switch (operador.toLowerCase()) {
        case "tigo":
            cargoFijo = 45000;
            valorMinuto = 200;
            valorPaqueteDatos = 12000;
            break;
        case "claro":
            cargoFijo = 30000;
            valorMinuto = 100;
            valorPaqueteDatos = 18000;
            break;
        case "movistar":
            cargoFijo = 40000;
            valorMinuto = 250;
            valorPaqueteDatos = 8000;
            break;
        default:
            alert("Operador no válido");
            return;
    }

    let costoTotal = cargoFijo + (minutos * valorMinuto) + valorPaqueteDatos;
    return `El costo total para ${operador} es: $${costoTotal}`;
}

const operador = prompt("Ingrese su operador (Tigo, Claro, Movistar):");
const minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));

alert(calcularCosto(operador, minutos));
