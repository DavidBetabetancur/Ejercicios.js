const productosVendidos = new Set([1001, 1002, 1003]);

// Función flecha para verificar si un código de producto ya fue vendido
const verificarProductoVendido = codigo => productosVendidos.has(codigo);

console.log(verificarProductoVendido(1002)); // Salida esperada: true
console.log(verificarProductoVendido(1004)); // Salida esperada: false
