//Serie de fibonacci
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
let serie = [0, 1];

function main() {
    let entrada = prompt("Cantidad de elementos: ");
    entrada = entrada - 2;
    for (let i = 0; i < entrada; i++) {
        let a = serie.length;
        let b = a - 1;
        let na = serie[a - 1]; // Get the last element in the array
        let nb = serie[b - 1]; // Get the second-to-last element in the array
        let uso = na + nb;
        serie.push(uso);
    }
    console.log(serie);
}


main();