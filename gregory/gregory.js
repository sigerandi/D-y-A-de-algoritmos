function gregory(n){
    var gregory = 0;
    for (i=1; i<=n; i++){
        gregory = 4*((1/i) + (1/(i+2)));
    }
    return gregory;
}