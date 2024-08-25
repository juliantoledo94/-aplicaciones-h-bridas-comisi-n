//CommonJS

//module.exports

/* function esPrimo(numero){
    if(numero % 2 == 0){
        return console.log(`El número ${numero} es primo`)
    }else{
        return console.log(`El número ${numero} no es primo`)
    }
} */



/* module.exports = esPrimo;  */

//exports

/* exports.esPrimo = esPrimo; */

//ES MODULES

export function esPrimo(numero){
    if(numero % 2 == 0){
        return console.log(`El número ${numero} es primo`)
    }else{
        return console.log(`El número ${numero} no es primo`)
    }
}

/* export{esPrimo}; */

/* export default function esPrimo(numero){
    if(numero % 2 == 0){
        return console.log(`El número ${numero} es primo`)
    }else{
        return console.log(`El número ${numero} no es primo`)
    }
} */