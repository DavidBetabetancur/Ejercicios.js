const puntajes = [85, 92, 78, 95, 88];
const mapPuntajes = new Map(puntajes.map((puntaje, indice) => [indice, puntaje]));

mapPuntajes.set(puntajes.length, 90); 

console.log(mapPuntajes);
