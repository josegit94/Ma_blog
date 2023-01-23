import express from "express"
import { addPost, deletePost, getPost, getPosts, getShoes, updatePost } from "../controllers/posts.js"

const router =express.Router()

router.get("/", getPosts)
router.get("/:cat", getShoes)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)

export default router