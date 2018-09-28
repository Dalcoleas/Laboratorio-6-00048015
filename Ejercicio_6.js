function ejer6(cadena)
{
    cadena = cadena.toLowerCase();
    encript = "";
    for(let letra of cadena){
        switch(letra)
        {
            case 'm':
                encript += '0';
                break;

            case 'u':
                encript += '1';
                break;
            case 'r':
                encript += '2';
                break;
            case 'c':
                encript += '3';
                break;
            case 'i':
                encript += '4';
                break;
            case 'e':
                encript += '5';
                break;  
            case 'l':
                encript += '6';
                break;
            case 'a':
                encript += '7';
                break;
            case 'g':
                encript += '8';
                break;
            case 'o':
                encript+= '9';
                break;
            default:
                encript += letra;
                break;
        }
    } 
    return encript;
}