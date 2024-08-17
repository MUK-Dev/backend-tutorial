const express = require('express')
const mongoose = require('mongoose')
const PostRoutes = require('./routes/post-routes')

const app = express()

app.use(express.json())

const port = 3000

app.get('/', (req, res, next) => {
  res.send('Hello World!')
})

app.use(PostRoutes)

mongoose.connect('mongodb://localhost:27017/posts').then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`))
})
