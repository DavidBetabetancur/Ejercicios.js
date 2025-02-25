let horastrabajadas = prompt("numero de horas trabajadas?")
let nombre = prompt("Como te llamas?")

if (horastrabajadas <= 10 ){
let horaspagadas = horastrabajadas * 30000
alert (`si trabajaste menos de 10 horas tu pago sera ${horaspagadas}`)
}

else {
    let horaspagadas = horastrabajadas * 33000
alert (`si trabajaste mas de 10 horas tu pago sera ${horaspagadas}`)
}