import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: String,
  image: String
})

export default mongoose.model('Card', schema)