async function main(){
    const utils = await import("./module.mjs")
    /* utils.esPrimo(2) */
}

main()

function esPrimo2(numero){
    if(numero % 2 == 0){
        return console.log(`El número ${numero} es primo`)
    }else{
        return console.log(`El número ${numero} no es primo`)
    }
}



module.exports = {esPrimo2}


require("dotenv").config()

const clave = process.env.CLAVE;
const db_user = process.env.DB_USER;

console.log(clave)