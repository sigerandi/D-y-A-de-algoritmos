let x = 22;
let resta = 1;
let cadena = "";


function cuentaRegresiva(x){
    let xCadena = String(x);
    cadena = cadena + xCadena;
    x = x - resta;
    if (x === 0){
        cadena=cadena + "," + String(x);
        console.log(cadena);
    }
    else{
        cadena=cadena + ", ";
        cuentaRegresiva(x);
    }
}
cuentaRegresiva(x);