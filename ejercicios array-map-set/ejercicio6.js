const sociosActivos = new Set([5001, 5002, 5003]);

const agregarSocio = (set, id) => set.add(id);

agregarSocio(sociosActivos, 5004);
agregarSocio(sociosActivos, 5001); 

console.log(sociosActivos); 