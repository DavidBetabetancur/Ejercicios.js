const asistentes = new Map([
    [1, "Ana"],
    [2, "Luis"]
  ]);
  
  const agregarAsistente = (map, codigo, nombre) => map.set(codigo, nombre);
  
  agregarAsistente(asistentes, 3, "Sofía");
  
  console.log(asistentes); 