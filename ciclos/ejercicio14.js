function calcularCostoSandwich(tamano, ingredientes) {
    let costoBase = tamano.toLowerCase() === "grande" ? 12000 : 6000;
    let costoIngredientes = 0;

    ingredientes.forEach(ingrediente => {
        switch (ingrediente.toLowerCase()) {
            case "tocineta":
            case "pavo":
                costoIngredientes += 3000;
                break;
            case "queso":
                costoIngredientes += 2500;
                break;
            case "jalapeño":
                
                break;
            default:
                alert(`Ingrediente no válido: ${ingrediente}`);
        }
    });

    return `El costo total de su sándwich es: $${costoBase + costoIngredientes}`;
}

const tamano = prompt("Ingrese el tamaño del sándwich (pequeño o grande):");
const ingredientes = prompt("Ingrese los ingredientes adicionales separados por coma (tocineta, jalapeño, pavo, queso):")
    .split(",").map(i => i.trim());

alert(calcularCostoSandwich(tamano, ingredientes));
