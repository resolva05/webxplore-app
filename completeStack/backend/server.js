require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(express.json())

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
    // console.log(posts)
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching posts" });
  }
});

app.get("/portfolio", async (req, res) => {
  try {
    const posts = await D.find();
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

app.get("/portfolio/:postId", async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await D.findById(postId); // Find the post by its MongoDB _id
    // console.log(post)
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Server error" });
  }
});

//contact


const Contact=require('./models/contact')


app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  // Validate the incoming data
  if (!firstName || !lastName || !email || !phoneNumber || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create a new contact entry
  const newContact = new Contact({
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
  });

  try {
    // Save the contact to MongoDB
    await newContact.save();
    console.log(newContact )

    res.status(201).json({ message: 'Contact form submitted successfully!' });
  
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Error saving contact' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});