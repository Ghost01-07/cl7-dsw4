import {Post} from "../models/post.js";

export const deletePost = async () => {
    await Post.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.error('Error al eliminar el usuario:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            res.send('Usuario eliminado exitosamente');
        }
    })
};