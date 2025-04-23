const productosVendidos = new Set([1001, 1002, 1003]);

const verificarProductoVendido = (set, codigo) => set.has(codigo);

console.log(verificarProductoVendido(productosVendidos, 1002)); 