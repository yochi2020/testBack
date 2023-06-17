import express from "express";
import * as commentController from "@src/controllers/comment.Controller";
const router = express.Router();

router.post("/create",commentController.createCommentController);

export default router;
