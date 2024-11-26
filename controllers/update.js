import {Post} from "../models/post.js";

export const updatePost = async (req, res) =>{
    const id = req.params.id
    
    const findPost = await Post.findById({_id : id});
    
    if(!findPost){
    const error = new Error("Post no encontrado");
    return res.send(404).json({msg: error.message});
    }
    
    findPost.title = req.body.title || findPost.title;
    findPost.author = req.body.author || findPost.author;
    findPost.body = req.body.body || findPost.body;
    
    try{
    const savePost = await Post.save();
    res.json(savePost);
    } catch(error){
    console.log(error.message);
    }
};