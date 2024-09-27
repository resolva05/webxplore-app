import React, { useEffect, useState } from "react";
import "./Case.css"; // Ensure this file contains styles
import pdf from "../../assets/cs1.pdf"; // Importing the PDF file

const Case = () => {
  const [animatedDescription, setAnimatedDescription] = useState([]);

  useEffect(() => {
    const descriptionText =
      "To address this, Resolva Insights sought an AI-driven solution that could manage client inquiries 24/7, reduce manual intervention, and deliver timely and accurate responses. The solution needed to handle frequently asked questions (FAQs),generate leads, and escalate complex queries to human agents when necessary. ";
    const words = descriptionText.split(" ");
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
            <span
              key={index}
              className="animated-word"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>

      {/* Case Study Card */}
      <div className="case-container">
        <div className="case-card" onClick={openPdf}>
          <h1 className="case-title">
            AI-Powered Chatbots for Real-Time Customer Support
          </h1>
          <p className="case-description">
            Resolva Insights Private Limited, a market research and consulting
            firm, specializes in providing data-driven insights, market
            analysis, and strategic guidance to businesses across various
            industries. As their client base grew, they faced challenges in
            scaling customer support efficiently while maintaining a high level
            of service.
          </p>

          <h2 className="case-subtitle">Key Points:</h2>
          <ul className="case-list">
            <li>Challenges</li>
            <li>Objective</li>
            <li>Solution</li>
            <li>Tech Stack</li>
            <li>Benefits</li>
            <li>Results</li>
            <li>Conclusion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Case;
