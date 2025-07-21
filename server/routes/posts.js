const express = require('express');
const router = express.Router();
const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    addComment
} = require('../controllers/postController');
const { protect } = require('../middleware/auth');

router.route('/')
    .get(getPosts)
    .post(protect, createPost);

router.route('/:id')
    .get(getPost)
    .put(protect, updatePost)
    .delete(protect, deletePost);

router.post('/:id/comments', protect, addComment);

module.exports = router; 