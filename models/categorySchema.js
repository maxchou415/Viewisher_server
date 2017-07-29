const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/viewisher`)

const Schema = mongoose.Schema

const categorySchema = new Schema({
  displayName: { type: String },
  name: { type: String }
})

module.exports = mongoose.model('category', categorySchema)
