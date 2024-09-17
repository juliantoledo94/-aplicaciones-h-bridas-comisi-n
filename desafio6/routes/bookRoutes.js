import express from "express"


//se va a encargar de conectar todas las rutas con nuestra app principal
const router = express.Router()

/* 
 ahora uso router en vez de app para conectar las rutas

app.get("/books")
app.get("/books/:id")
app.post("/books")
app.put("/books/:id")
app.delete("/books/:id") */

router.get("/")
router.get("/:id")
router.post("/")
router.put("/:id")
router.delete("/:id")

export default router;