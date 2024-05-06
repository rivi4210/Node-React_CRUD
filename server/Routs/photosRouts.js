const express=require("express")
const router=express.Router()

const Photo=require("../models/photosModel")
const photoController=require("../controller/photosController")

router.post("/",photoController.createNewPhotos)
router.get("/",photoController.getAllPhotos)
router.get("/:_id",photoController.getPhotoById)
router.put("/",photoController.updatePhoto)
router.delete("/",photoController.deletePhoto)

module.exports = router