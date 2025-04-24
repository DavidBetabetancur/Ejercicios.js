try {
    // se intenta acceder una variable que no existe
    console.log(variableInexistente);
  } catch (error) {
    console.log('Tipo de error:', error.name);
    console.log('Mensaje:', error.message);
  }
  // lo que genera un error tipo ReferenceError.
  //este error es capturado por el bloque catch que luego imprime el error