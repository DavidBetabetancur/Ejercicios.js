const asistentes = new Map([
    [101, "Carlos"],
    [102, "María"],
    [103, "José"]
  ]);
  
  // Función flecha para verificar si un código existe en el Map
  const verificarAcceso = codigo => asistentes.has(codigo);
  
  console.log(verificarAcceso(102)); // Salida esperada: true
  console.log(verificarAcceso(105)); // Salida esperada: false
  