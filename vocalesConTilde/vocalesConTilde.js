
function encontrar_vocales_tildes(){


    let palabra = "Martínez";
    let vocales_con_acento = ["á","é","í","ó","ú"];
    let vocales_en_palabra = 0 ;


    let longitudTotal = palabra.length;

        if (longitudTotal !== 0){
            for (i=0; i < longitudTotal; i++){
                let longitudPalabra=vocales_con_acento.length
                for(j=0; j < longitudPalabra; j++){
                    if (palabra [i] === vocales_con_acento[j]){
                        vocales_en_palabra++;
                }
                
            }
        }
        }
        return vocales_en_palabra;
    }
    console.log(encontrar_vocales_tildes());