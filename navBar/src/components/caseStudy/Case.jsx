import React, { useEffect, useState } from 'react';
import './Case.css';  // Ensure this file contains styles
import pdf from '../../assets/cs1.pdf';  // Importing the PDF file

const Case = () => {
  const [animatedDescription, setAnimatedDescription] = useState([]);

  useEffect(() => {
    const descriptionText = 'Dive into our in-depth case studies, where we explore how technology transforms industries. Learn about the real-world applications of 5G, AI, AR/VR, and more through detailed studies.';
    const words = descriptionText.split(' ');
    setAnimatedDescription(words);
  }, []);

  const openPdf = () => {
    window.open(pdf, "_blank"); // Open the PDF in a new tab
  };

  return (
    <div className="case-page-container">
      {/* Page Heading */}
      <div className="page-heading">
        <h1 className="main-title">Our Case Studies</h1>
        <p className="page-description">
          {animatedDescription.map((word, index) => (
            <span key={index} className="animated-word" style={{ animationDelay: `${index * 0.1}s` }}>
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>

      {/* Case Study Card */}
      <div className="case-container">
        <div className="case-card" onClick={openPdf}>
          <h1 className="case-title">Case Study: 5G in Mobile Web Development</h1>
          <p className="case-description">
            This case study explores the profound impact of 5G technology on mobile-first web development.
            Discover how 5G enhances load times, performance, and enables innovative experiences with AI,
            AR/VR, and its effect on e-commerce. Additionally, learn about how progressive web apps (PWAs)
            and 5G combine to create more immersive, faster, and responsive mobile experiences.
          </p>

          <h2 className="case-subtitle">Key Points:</h2>
          <ul className="case-list">
            <li>Faster load times and improved web performance with 5G</li>
            <li>Integration of AR/VR for a more engaging e-commerce experience</li>
            <li>AI-driven personalization and user experience improvements</li>
            <li>The role of progressive web apps (PWAs) in a 5G world</li>
            <li>5G’s influence on mobile-first design and development strategies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Case;
