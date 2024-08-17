const mongoose = require('mongoose')

const PostSchema = mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
)

const PostModel = mongoose.model('Post', PostSchema)

module.exports = PostModel
