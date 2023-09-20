// Dado un arreglo A donde todos sus elementos son enteros
//encontrar el elemento menor y regresar su indice. Asumir
//que todos los elementos son unicos.

let A=[];

function agregarElemento(){
    let p;
    let resultado;
    let nuevoElemento = document.getElementById("entradaNuevoElemento").value;
    let htmlArrayProceso=document.getElementById("mostrarArregloProceso");
    nuevoElemento=parseInt(nuevoElemento);
    if (Number.isInteger(nuevoElemento)){
        p=nuevoElemento;
        console.log(nuevoElemento);
        A.push(p);
        resultado=0;
        let arrayTexto=A.toString();
        htmlArrayProceso.innerHTML = arrayTexto;
        console.log(resultado);
        return resultado;
    }
    else{
        p="Error, no es un numero";
        console.log("No es un numero");
        resultado=2003;
        console.log(resultado);
        return resultado;
    }
}



function encontrarElementoMenor(){
    let htmlElementoMenor=document.getElementById("mostrarElementoMenor");
    let min=A[0];
    let regresa=0;
    for (let i=1; i < A.length;i++){
        if (min>A[i]){
            min=A[i];
            regresa=i;
        }
    }
    htmlElementoMenor.innerHTML=("El elemento menor es "+A[regresa]+" en el indice "+regresa+" y espacio "+(regresa+1));
    console.log(A[regresa]);
    return regresa;
}