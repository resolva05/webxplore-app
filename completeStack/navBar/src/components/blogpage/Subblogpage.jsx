import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import axios from "axios"; 
import "./Subblogpage.css";

const Subblogpage = () => {
  const { postId } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const paragraphRefs = useRef([]); // Store refs for each paragraph

  useEffect(() => {
    window.scrollTo(top);
  }, []);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getUsers/${postId}`);
        setPost(response.data); 
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Post not found!");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  useEffect(() => {
    const handleScroll = () => {
      paragraphRefs.current.forEach((paragraph) => {
        const rect = paragraph.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          paragraph.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  if (loading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  if (error || !post) {
    return <p>{error}</p>;
  }

  const contentParagraphs = post.content.split("\n");

  return (
    
    <div className="subblogpage-container ">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-description">{post.description}</p>
      <p className="post-date">Published on: {post.date}</p>
      
      <div className="post-content">
        {contentParagraphs.map((paragraph, index) => (
          <p
            key={index}
            ref={(el) => (paragraphRefs.current[index] = el)}
            className="post-paragraph"
            dangerouslySetInnerHTML={{ __html: paragraph.replace(/\n/g, '<br />') }}
          />
        ))}
      </div>
    </div>
  );
};

export default Subblogpage;
