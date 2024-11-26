import {Post} from "../models/post.js";

export const postPost = async (req, res) => {
    const body = req.body
    const newPost = await new Post(body)
    try {
    const savePost = await newPost.save()
    res.status(200).json({savePost});
    }catch (error){
    res.status(400).send(error)
    }
};