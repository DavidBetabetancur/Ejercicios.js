const proyectos = [
    new Map([['nombre', 'Proyecto A'], 
      ['presupuesto', 5000]]),
    new Map([['nombre', 'Proyecto B'],
       ['presupuesto', 8000]])
  ];
  
  // Función flecha para agregar un nuevo proyecto al arreglo
  const agregarProyecto = (nombre, presupuesto) => {
    proyectos.push(new Map([['nombre', nombre], ['presupuesto', presupuesto]]));
  };
  
  // Agregar el Proyecto C
  agregarProyecto('Proyecto C', 6000);
  
  console.log(proyectos); 
  