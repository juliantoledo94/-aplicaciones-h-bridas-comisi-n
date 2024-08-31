                            //IMPORTS CON COMMON JS
//se usa funcion require.

/* const esPrimo = require("./index")

esPrimo(3) */

//exports

/* const {esPrimo} = require("./index")

esPrimo(5) */


                            // ES MODULES

/* import { esPrimo as primo } from "./index.js";

primo(2) */

/* import operaciones from "./index.js"; */

import * as operaciones from "./index.js";

operaciones.esPrimo(3)