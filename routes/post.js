import express from 'express';

import { getPosts } from '../controllers/get.js';
import { getPostId } from '../controllers/getid.js';

import { updatePost } from '../controllers/update.js';

import { postPost } from '../controllers/post.js';

import { deletePost } from '../controllers/delete.js';

const router = express.Router();

router.post('/', postPost);
router.get('/:id', getPostId);
router.get('/', getPosts);

export const postRoutes = router;