let fisica = prompt("Ingrese su nota")
let quimica = prompt("Ingrese su nota")
let biologia = prompt("Ingrese su nota")
let matematicas = prompt("Ingrese su nota")
let informatica = prompt("Ingrese su nota")

let calificaciones = (fisica + quimica + biologia + matematicas + informatica / 50) * 100
if (calificaciones >= 80 ){
    alert("tu porcentaje es excelente")
}

else if (calificaciones >= 60, calificaciones <= 79) {
    alert("tu porcentaje es bueno")
}

else if (calificaciones >= 0, calificaciones <= 59){
alert("tu porcentaje es malo")
}