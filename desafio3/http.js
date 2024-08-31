const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    console.log("url", req.url);
    console.log("method", req.method);
    console.log("headers", req.headers);

    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                res.writeHead(200, { "content-type": "text/plain" });
                res.end("Hola ");
            } else if (req.url === "/alumno") {
                res.writeHead(200, { "content-type": "text/plain" });
                res.end("Alumno: Julian Toledo \nComision: ##### ");
            } else if (req.url === "/info") {
                res.writeHead(200, { "content-type": "text/plain" });
                res.end("No comparto info de mi so asi que va simulada\nmemoria:9999999+\ncpu:asdasda");
            } else if (req.url === "/static") {
                res.writeHead(200, { "content-type": "text/html" });
                res.write(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officia consectetur rem illum quam deleniti, velit a, fugiat iste enim, repellendus unde et nam laudantium perferendis esse repudiandae consequuntur! Assumenda.</p>
                    </body>
                    </html>`)
                res.end();
            } else {
                res.writeHead(404, { "content-type": "text/plain" });
                res.end("Ruta no encontrada");
            }
            break; // Es necesario para que no siga ejecutándose el código en otros casos

        case "POST":
            if (req.url === "/") {
                res.writeHead(200, { "content-type": "text/plain" });
                res.end("Hola ");
            } else {
                res.writeHead(404, { "content-type": "text/plain" });
                res.end("Ruta no encontrada");
            }
            break;

        default:
            res.writeHead(405, { "content-type": "text/plain" });
            res.end("Método no permitido");
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
