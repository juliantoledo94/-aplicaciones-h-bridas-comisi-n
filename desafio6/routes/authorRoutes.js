import express from "express"


//se va a encargar de conectar todas las rutas con nuestra app principal
const router = express.Router()

//autores

router.get("/")
router.get("/:id")
router.post("/")
router.put("/:id")
router.delete("/:id")


export default router
