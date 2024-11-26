import React, { useEffect, useState } from 'react';
import './ProjectCards.css';
import { NavLink } from "react-router-dom";
import axios from 'axios';

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/portfolio");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="project-cards-container">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3 className="projecttitle">{project.title}</h3>
            <p className="projectoverview">{project.projectOverview}</p>
            <NavLink to={`/portfolio/${project.title}`}>
              <button className="read-more-button">Read More</button>
            </NavLink>
          </div>
        ))
      ) : (
        <p>Loading projects...</p>
      )}
    </div>
  );
};

export default ProjectCards;
