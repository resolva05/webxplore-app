import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 
import "./Subblogpage.css";
import subimg from "../../assets/subblog2.png";

const Subblogpage = () => {
  const { title } = useParams();  // Get slug from URL params
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect for fetching the post by slug
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getUsers/${title}`); // Fetch post by slug
        setPost(response.data); 
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Post not found!"); // Error message if post is not found
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [title]);  // Dependency array with slug

  // Loading state
  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }

  // Error or post not found
  if (error || !post) {
    return <p className="error-text">{error}</p>; // Show "Post not found!" if there's an error
  }

  // Split content into paragraphs
  const contentParagraphs = post.content.split("\n");

  return (
    <div className="subblogpage-container">
      <div className="post-card">
        <div className="title-image-container">
          <h1 className="post-title">{post.title}</h1>
          <img src={subimg} alt="" className="subimg"/>
        </div>
        <p className="post-description">{post.description}</p>
        <p className="post-date">Published on: {post.date}</p>

        <div className="post-content">
          {contentParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="post-paragraph"
              dangerouslySetInnerHTML={{ __html: paragraph.replace(/\n/g, '<br />') }} // Ensure new lines are rendered correctly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subblogpage;
