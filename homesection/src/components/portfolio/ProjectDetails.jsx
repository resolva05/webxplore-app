import { useParams } from "react-router-dom";
import { data } from "./ProjectData.jsx";

import './ProjectDetails.css'

const ProjectDetails = () => {


    const { dataId } = useParams();
    const post = data.find((post) => post.id === parseInt(dataId));
    // console.log(post.id)
    if (!post) {
        return <div>Project not found.</div>; // Handle the case when project is not found
    }

    return (
        <div className="project-details-container">
            <h1 className="project-title">{post.title}</h1>
            
            <h2 className="project-overview-title">Project Overview</h2>
            <p className="project-overview">{post.projectOverview}</p>
            <h2 className="project-technology-title">Technology Stack</h2>
            <ul className="project-technology-list">
                {post.technologyStack.map((tech, index) => (
                    <li key={index} className="technology-item">{tech}</li>
                ))}
            </ul>
            <h2 className="project-solution-title">Solution</h2>
            <p className="project-solution">{post.solution}</p>
            <h2 className="project-results-title">Results</h2>
            <p className="project-results">{post.results}</p>
        </div>
    );
}

export default ProjectDetails