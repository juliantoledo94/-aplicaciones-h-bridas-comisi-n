export function esPrimo(numero){
    if(numero % 2 == 0){
        return console.log(`El número ${numero} es primo`)
    }else{
        return console.log(`El número ${numero} no es primo`)
    }
}

import utils2 from "./commonjs.cjs"

utils2.esPrimo2(3)