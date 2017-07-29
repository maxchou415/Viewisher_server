const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/viewisher`)

const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: { type: String },
  content: { type: String },
  author: { type: String },
  category: { type: String },
  featurePhoto: { type: String },
  showTime: { type: Date },
  recommend: { type: Boolean, default: false },

  articleId: { type: String },
  postBy: { type: String },
  created_at: { type: Date }
})

module.exports = mongoose.model('article', articleSchema)
