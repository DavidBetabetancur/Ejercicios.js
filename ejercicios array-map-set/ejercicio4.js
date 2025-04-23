const asistentes = new Map([
    [101, "Carlos"],
    [102, "María"],
    [103, "José"]
  ]);
  
  const verificarAcceso = (map, codigo) => map.has(codigo);
  
  console.log(verificarAcceso(asistentes, 102)); 
  console.log(verificarAcceso(asistentes, 104)); 