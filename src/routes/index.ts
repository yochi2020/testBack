import express from "express";
import postRoute from "@routes/post.Route";
import commentRoute from "@routes/comment.Route";
const router = express.Router();

router.use("/post",postRoute);
router.use("/comment",commentRoute);

export default router;
