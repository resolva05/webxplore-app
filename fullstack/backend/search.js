const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Blog = require('./models/Blog.js');
const Project = require('./models/Project.js');

// Connect to MongoDB Atlas using your connection string
mongoose.connect("mongodb+srv://rohit:rohit123@webxplore.pkpqc.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log("Connected to MongoDB ");
});

mongoose.connection.on('error', (error) => {
  console.error("Error connecting to MongoDB Atlas:", error);
});

// Search endpoint
router.get('/search', async (req, res) => {
  const { query } = req.query;
  
  if (!query) {
    return res.status(400).json({ error: "Query parameter is missing" });
  }

  try {
    const blogResults = await Blog.find({
      title: { $regex: query, $options: 'i' }
    }).select('title _id').lean();

    const projectResults = await Project.find({
      title: { $regex: query, $options: 'i' }
    }).select('title _id').lean();

    const results = [
      ...blogResults.map(result => ({ ...result, type: 'blog' })),
      ...projectResults.map(result => ({ ...result, type: 'project' })),
    ];

    res.json(results);
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
