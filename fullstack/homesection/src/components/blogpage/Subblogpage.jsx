import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { posts } from './temp';
import "./Subblogpage.css";

const Subblogpage = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));
  
  const paragraphsRef = useRef([]); // To keep track of each paragraph's reference

  // Adding scroll observer for paragraphs to animate as they appear in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the paragraph is visible

    // Observing all paragraphs
    paragraphsRef.current.forEach(paragraph => {
      if (paragraph) {
        observer.observe(paragraph);
      }
    });

    return () => {
      paragraphsRef.current.forEach(paragraph => {
        if (paragraph) {
          observer.unobserve(paragraph);
        }
      });
    };
  }, []);

  if (!post) {
    return <div>Post not found!</div>;
  }

  const contentParagraphs = post.content.split("\n");

  return (
    <div className="subblogpage-container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-category">Category: {post.category}</p>
      <p className="post-description">{post.description}</p>
      <p className="post-date">Published on: {post.date}</p>

      <div className="post-content">
        {contentParagraphs.map((paragraph, index) => (
          <p
            key={index}
            ref={el => paragraphsRef.current[index] = el} // Attach each paragraph to ref
            className="hidden-paragraph"
            dangerouslySetInnerHTML={{ __html: paragraph.replace(/\n/g, '<br />') }}
          />
        ))}
      </div>
    </div>
  );
};

export default Subblogpage;
