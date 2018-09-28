function ejer5(arr, type) {
    Arr = [];
    for(let elemento of arr) {
        if(typeof elemento == type) {
            Arr.push(elemento);
        }
    };
    return Arr;
}