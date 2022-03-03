const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Collaborator = new Schema({
  author: ObjectId,
  name: String,
  age: String,
  dateOfBirth: Date,
  avatar: String,
  slug: String
})

module.exports = mongoose.model('Collaborator', Collaborator)