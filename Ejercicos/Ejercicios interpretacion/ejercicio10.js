let copias = prompt("ingrese el numero de copias")

if (copias< 499){
    alert("el precio por copia es de 120")
}

else if(copias > 500 && copias < 749){
    alert("el precio por copia es de 100")
}
 
else if(copias > 750 && copias < 999){
    alert("el precio por copia es de 80")
}

else if (copias>1000){
    alert("el precio por copia es de 50")
}