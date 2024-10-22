const mongoose=require('mongoose')

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    date: String,
  });
  
  // Create a model based on the schema
  module.exports = mongoose.model("data2", postSchema);