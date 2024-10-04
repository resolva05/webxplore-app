// import React from 'react';// Adjust the path if necessary
import './ProjectCards.css'; // Import CSS for styling
import { NavLink } from "react-router-dom";
import { data } from "./ProjectData.jsx";


const ProjectCards = () => {
  return (
    <div className="project-cards-container">
      {data.map((project) => (
        <div className="project-card" key={project.id}>
          
          <h3 className="projecttitle">{project.title}</h3>
          <p className="projectoverview">{project.projectOverview}</p>
          <NavLink to={`/portfolio/projectdetails/${project.id}`}>
          <button className="read-more-button">Read More</button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
