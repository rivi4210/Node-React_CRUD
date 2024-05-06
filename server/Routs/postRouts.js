const express=require("express")
const router=express.Router()

const postsController=require("../controller/postsController")

router.post("/",postsController.createNewPost)
router.get("/",postsController.getAllPost)
router.get("/:id",postsController.getPostById)
router.put("/",postsController.updatePost)
router.put("/:id",postsController.updatePostLike)
router.delete("/",postsController.deletePost)

module.exports = router