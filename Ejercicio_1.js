/*Realice una función en JS, que dados un número y un arreglo como parámetros, retorne cuantas ocurrencias existen de ese número dentro del arreglo.*/

function ejer1(n, arreglo){
    var count = 0;
    for(let i of arreglo){
        if(n == i){
            count++;    
        }
    }
    return ("El numero " + n + " aparece: " + count + " veces.")
}