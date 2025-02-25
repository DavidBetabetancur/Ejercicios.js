let genero = prompt("Eres hombre o mujer")
let edad = prompt("Digite su edad")

if (genero === "mujer"){
    
if (edad >= 50 ){
    alert("eres mayor de 50 recibes 120.000")
}
else if (edad >= 30 && edad <= 49){
    alert("recibes 100.000")
}
else if (edad <= 30){
    alert("No recibes ayuda")
}

}
else if (genero === "hombre"){
    alert("recibes 40.000 sin importar tu edad")
}
