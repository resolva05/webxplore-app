import React, { useEffect, useState } from 'react';
import './ProjectCards.css';
import { NavLink } from "react-router-dom";
import axios from 'axios'; // To make API requests

const ProjectCards = () => {
  // State to store fetched projects
  const [projects, setProjects] = useState([]);

  // Fetch data from the backend API when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/portfolio"); // Adjust the URL if necessary
        setProjects(response.data); // Set the response data to state
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
          <div className="project-card" key={project._id}>
            <h3 className="projecttitle">{project.title}</h3>
            <p className="projectoverview">{project.projectOverview}</p>
            <NavLink to={`/portfolio/projectdetails/${project._id}`}>
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
