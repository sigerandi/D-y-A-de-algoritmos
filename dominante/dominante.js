function dominantes(arreglo) {
    const resultado = [];
    let longitud=Number(arreglo.length);
    let mayor=arreglo[0];
    
    resultado.push(arreglo[longitud-1]);

    for(i=1;i<longitud;i++){
        if (arreglo[i]>mayor){
            mayor=arreglo[i];
        }
    }
    resultado.push(mayor);
    return resultado;
}

  console.log(dominantes([1, 21, 4, 7, 5])); // [21, 7]
  console.log(dominantes([5, 4, 3, 2, 1])); // [5, 4, 3, 2]


