function ejer2(arre){
    var suma = 0;
    for (let i of arre){
        suma += i;    
    }
    return ("Suma : " + suma + "..." + " Promedio: " + (suma/arre.length)); 
}
