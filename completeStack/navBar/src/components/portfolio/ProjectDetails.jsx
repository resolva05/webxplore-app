import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { dataId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(top);

    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:5000/portfolio/${dataId}`); // API URL with the project ID
        const data = await response.json();
        setProject(data); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project details:", error);
        setLoading(false);
      }
    };

    fetchProject();
  }, [dataId]);

  if (loading) return <p>Loading...</p>;

  if (!project) {
    return <div>Project not found.</div>; // Handle case when project isn't found
  }

  return (
    <div className="project-details-container">
      <h1 className="project-title">{project.title}</h1>
      <h2 className="project-overview-title">Project Overview</h2>
      <p className="project-overview">{project.projectOverview}</p>
      <h2 className="project-technology-title">Technology Stack</h2>
      <ul className="project-technology-list">
        {project.technologyStack.map((tech, index) => (
          <li key={index} className="technology-item">{tech}</li>
        ))}
      </ul>
      <h2 className="project-solution-title">Solution</h2>
      <p className="project-solution">{project.solution}</p>
      <h2 className="project-results-title">Results</h2>
      <p className="project-results">{project.results}</p>
    </div>
  );
};

export default ProjectDetails;
