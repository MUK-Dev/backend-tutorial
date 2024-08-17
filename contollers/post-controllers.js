const PostModel = require('../models/post-model')
const reqResponse = require('../utils/req_response')

const getAllPosts = async (req, res, next) => {
  // TODO: return all posts from database
  const posts = await PostModel.find()
  res.send({ posts })
}

const getSinglePost = async (req, res, next) => {
  // TODO: return specific post from database
  const post = await PostModel.findById(req.params.id)

  res.send(post)
}

const createPost = async (req, res, next) => {
  // TODO: create a new post here
  const newPost = new PostModel(req.body)
  await newPost.save()

  res.send(newPost)
}

const replacePost = async (req, res, next) => {
  // TODO: replace a specific post
  await PostModel.findOneAndReplace({ _id: req.params.id }, req.body)

  return res.send(reqResponse(200, 'Post replaced'))
}

const updatePost = async (req, res, next) => {
  // TODO: update a value in a specific post
  await PostModel.findByIdAndUpdate(req.params.id, { $set: req.body })

  return res.send(reqResponse(200, 'Post updated'))
}

const deletePost = async (req, res, next) => {
  // TODO: delete a specific post
  await PostModel.findByIdAndDelete(req.params.id)
  res.send(reqResponse(202, 'Post deleted'))
}

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  replacePost,
  updatePost,
  deletePost,
}
