require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true, // Try with or without this option
  tlsInsecure: true, // Disable TLS validation temporarily for testing
}).then(() => console.log('DB Connected Mongo Running'))
.catch(err => {
  console.error('DB Connection Error:', err);
  console.error('Error cause:', err.cause);  // This will give you more information
});



const Post=require('./models/Post')
const D=require('./models/d')
// Route to get all posts (if you need to fetch all posts somewhere)
app.get("/getUsers", async (req, res) => {
  try {
    const posts = await Post.find();
    console.log(posts)
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching posts" });
  }
});

// Route to get a post by postId
app.get("/getUsers/:postId", async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId); // Find the post by its MongoDB _id
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Server error" });
  }
});

const postSchema = new Post({
  title: 'new title',
});
postSchema.save();

const newd = new D({
  name:'saksham',
});
newd.save();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});