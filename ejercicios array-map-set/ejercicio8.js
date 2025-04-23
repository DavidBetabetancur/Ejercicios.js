const proyectos = [
    new Map([["nombre", "Proyecto A"], ["presupuesto", 5000]]),
    new Map([["nombre", "Proyecto B"], ["presupuesto", 8000]])
  ];
  
  const agregarProyecto = (arreglo, nombre, presupuesto) => {
    arreglo.push(new Map([["nombre", nombre], ["presupuesto", presupuesto]]));
  };
  
  agregarProyecto(proyectos, "Proyecto C", 6000);
  
  console.log(proyectos);
  