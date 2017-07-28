const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/viewisher`)

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String },
  name: { type: String },
  password: { type: String },

  group: { type: String, default: 'editor' },
  role: { type: String, default: 'user' },
  admin: { type: Boolean, default: false },

  created_at: { type: Date }
})

module.exports = mongoose.model('user', userSchema)
