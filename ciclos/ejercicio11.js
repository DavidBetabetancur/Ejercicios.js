while(true){

let defecto1 =prompt("¿emite un pitido?")
let defecto2 =prompt("¿el disco duro gira")
let defecto3 =prompt("¿la unidad gira?")

if (defecto1 = "si",  defecto2 = "si"){
    alert("esta averiada")
}
else if (defecto1 = "si", defecto3 = "si"){
    alert("pongase en contacto con el tecnico de apoyo")
}

else if (defecto1 = "si", defecto3 = "no"){
    alert("verificar contactos de la unidad")
}

else if (defecto1 = "no", defecto2 = "no"){
    alert("traiga la computadora a la central para arreglarla")
}

else if (defecto1 = "no", defecto3 = "si"){
    alert("compruebe las conexiones de los altavoces")
}
}
