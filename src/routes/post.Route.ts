import express from "express";
import * as postController from "@src/controllers/post.Controller";
const router = express.Router();

router.get("/list",postController.listPostController);
router.post("/create",postController.createPostController);

export default router;
