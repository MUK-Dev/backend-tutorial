const express = require('express')
const {
  createPost,
  deletePost,
  getAllPosts,
  getSinglePost,
  replacePost,
  updatePost,
} = require('../contollers/post-controllers')

const router = express.Router()

router.route('/posts').get(getAllPosts).post(createPost)

router
  .route('/posts/:id')
  .get(getSinglePost)
  .put(replacePost)
  .patch(updatePost)
  .delete(deletePost)

module.exports = router
