const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/blogpage", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a Post schema (adjust fields according to your MongoDB document structure)
const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  date: String,
});

// Create a model based on the schema
const Post = mongoose.model("data2", postSchema);

// Route to get all posts (if you need to fetch all posts somewhere)
app.get("/getUsers", async (req, res) => {
  try {
    const posts = await Post.find();
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});