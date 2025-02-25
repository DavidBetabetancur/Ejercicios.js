let continuar = true

while (continuar) {
    let horastrabajadas = parseInt(prompt("Número de horas trabajadas?"))
    let nombre = prompt("¿Cómo te llamas?")
    let horaspagadas

    if (horastrabajadas <= 10) {
        horaspagadas = horastrabajadas * 30000;
        alert(`Hola ${nombre}, si trabajaste menos de 10 horas tu pago será ${horaspagadas}`)
    } else {
        horaspagadas = horastrabajadas * 33000
        alert(`Hola ${nombre}, si trabajaste más de 10 horas tu pago será ${horaspagadas}`)
    }
    
    continuar = confirm("¿Quieres calcular otro pago?")
}
