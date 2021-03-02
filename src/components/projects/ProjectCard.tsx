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
      <div className="project-card" onClick={()=>{setIsOpen(true)}}>
        <p>{project.title}</p>
        <p>{project.desc}</p>
        <p>{project.flag}</p> 
        <p>{project.categories}</p>
        <p>{project.languages}</p>
        <p>{project.tools}</p>
        
      </div>
     
      {isOpen && <ProjectDetail project={project} setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default ProjectCard;
