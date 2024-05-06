const express=require("express")
const router=express.Router()

const Photo=require("../models/userModel")
const userController=require("../controller/usersController")

router.post("/",userController.createNewUser)
router.get("/",userController.getAllUser)
router.get("/:_id",userController.getUserById)
router.put("/",userController.updateUser)
router.delete("/",userController.deleteUser)

module.exports = router