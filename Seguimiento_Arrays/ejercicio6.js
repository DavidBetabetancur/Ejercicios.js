const sociosActivos = new Set([5001, 5002, 5003]);

// Función flecha para agregar un nuevo socio al Set
const agregarSocio = numero => {
  if (!sociosActivos.has(numero)) {
    sociosActivos.add(numero);
    console.log(`Socio ${numero} agregado exitosamente.`);
  } else {
    console.log(`El socio ${numero} ya está registrado.`);
  }
};
agregarSocio(5004);
agregarSocio(5001); 

console.log(sociosActivos);