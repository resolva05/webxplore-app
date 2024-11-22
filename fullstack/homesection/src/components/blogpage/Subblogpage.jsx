import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 
import "./Subblogpage.css";
import subimg from "../../assets/subblog2.png";


const Subblogpage = () => {
  const { postId } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   window.scrollTo(top);
  // }, []);

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

  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }

  if (error || !post) {
    return <p className="error-text">{error}</p>; // Show "Post not found!" if there's an error
  }

  const contentParagraphs = post.content.split("\n");

  return (
    <div className="subblogpage-container">
      <div className="post-card">
        <div className="title-image-container">
        <h1 className="post-title">{post.title}</h1>
        <img src={subimg} alt=""  className="subimg"/>
        </div>
        <p className="post-description">{post.description}</p>
        <p className="post-date">Published on: {post.date}</p>

        <div className="post-content">
          {contentParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="post-paragraph"
              dangerouslySetInnerHTML={{ __html: paragraph.replace(/\n/g, '<br />') }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subblogpage;
