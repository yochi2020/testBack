import { NextFunction, Request, Response } from "express";
import { Result } from "@src/utils/index";
import Comment from "@models/comment";
import Post from "@models/post.Model";
export const createCommentController = async (req: Request, res: Response,next:NextFunction) =>{
    try {
        const { comment,post_id } =req.body;
        const post = await Post.findById(post_id);

        const commentt:any = new Comment({
            content:comment,
            post: post_id
        });

        await commentt.save();
        post?.comments.push(commentt);
        await post?.save();

        Result(res,"success");
    } catch (error) {
        next(error);
    }
};
