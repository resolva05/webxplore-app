const mongoose=require('mongoose')

const pre = new mongoose.Schema({
    name: String,
    description: String,
    content: String,
    date: String,
  });
  
  // Create a model based on the schema
  module.exports = mongoose.model("port", pre);