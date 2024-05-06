const express=require("express")
const router=express.Router()

const toDosController=require("../controller/toDosController")

router.post("/",toDosController.createNewToDo)
router.get("/",toDosController.getAllToDo)
router.get("/:id",toDosController.getToDoById)
router.put("/",toDosController.updateToDo)
router.put("/:id",toDosController.updateToDoComplete)
router.delete("/",toDosController.deleteToDo)

module.exports = router