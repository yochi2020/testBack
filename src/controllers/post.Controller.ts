import { NextFunction, Request, Response } from "express";
import { Result } from "@src/utils/index";
import Post from "@models/post.Model";

export const listPostController = async (req: Request, res: Response,next:NextFunction) =>{
    try {
        const listPost = await Post.find({}).populate("comments");
        Result(res,listPost);
    } catch (error) {
        next(error);
    }
};

export const createPostController = async (req: Request, res: Response,next:NextFunction) =>{
    try {
        const { title } =req.body;
        const newPost = await Post.create({
            title:title,
        });
        Result(res,newPost);
    } catch (error) {
        next(error);
    }
};