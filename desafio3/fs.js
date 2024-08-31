const fs = require("fs").promises

async function createDir(path){
    try{
        await fs.mkdir(path);
        console.log("carpeta creada con exito")
    } catch (error) {
        console.log("error: ",error)
    }
}

//createDir("./proyecto")

async function createFile(path, data) {
    try {
        await fs.writeFile(path, data, "utf-8");
        console.log("Archivo creado con éxito");
    } catch (error) {
        console.log("Error:", error);
    }
}


createFile("./proyecto/server.js", "// Este es un archivo JS de ejemplo");