//Factorial de un número

let entrada = prompt("Ingresa número: ");
entrada = Number(entrada);
let componentes = [1];
let carga = 1;

function main() {
    let r;
    if (entrada === 0) {
        r = 1;
    } else {
        r = encontrar();
    }
    return r;
}

function encontrar() {
    for (let i = 1; i < (entrada + 1); i++) {
        carga *= i;
    }
    return carga;
}

let x = main();
console.log("El factorial es " + x);
