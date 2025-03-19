const puntajes = [85, 92, 78, 95, 88];

// Crear un Map a partir del arreglo de puntajes
const puntajesMap = new Map(puntajes.map((puntaje, indice) => [indice, puntaje]));

// Agregar un nuevo puntaje con la clave correspondiente al siguiente índice disponible
puntajesMap.set(puntajes.length, 90);
console.log(puntajesMap);
