function selectionSort(inputArr) { 

    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        let menor = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[menor]) {
                menor=j; 
            }
         }
         if (menor != i) {
             let temporal = inputArr[i]; 
             inputArr[i] = inputArr[menor];
             inputArr[menor] = temporal;      
        }
    }
    return inputArr;
}
function main () {
let inputArr = [5, 2, 4, 6, 1, 3];
selectionSort(inputArr);
console.log(inputArr);
}
main();