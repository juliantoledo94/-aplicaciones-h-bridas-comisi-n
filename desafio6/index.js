import express from "express";
import bookRoutes from "./routes/bookRoutes.js"
import authorRoutes from "./routes/authorRoutes.js"


const app = express();
const port = 3000;

app.use(express.json())

app.use("/books", bookRoutes)
app.use("/authors", authorRoutes)








app.listen(port,()=> console.log(`http://localhost:${port}`));