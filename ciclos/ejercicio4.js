function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return `El número ${numero} es par.`;
    } else {
        return `El número ${numero} es impar.`;
    }
}

console.log(esParOImpar(2)); 