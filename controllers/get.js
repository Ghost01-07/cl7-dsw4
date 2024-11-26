import {Post} from "../models/post.js";

export const getPosts = async (req,res) =>{
    const getPosts = await Post.find()
    res.json(getPosts)
};    