import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";

interface IProject {
  project: {
    title: string;
    desc: string;
    flag: string;
    source: string;
    categories: string[];
    languages: string[];
    tools: string[];
  };
}

const ProjectCard: React.FC<IProject> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="project-card">
        <p>{project.title}</p>
        <p>{project.desc}</p>
        <p>{project.flag}</p>
      </div>
      <button onClick={()=>{setIsOpen(true)}}>
          see detail
      </button>
      {isOpen ? <ProjectDetail project={project} setIsOpen={setIsOpen}/> : null}
    </div>
  );
};

export default ProjectCard;
