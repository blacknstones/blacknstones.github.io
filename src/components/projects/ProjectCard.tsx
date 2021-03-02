import React, { useState } from "react";
import { ColorContext } from "../reusables/ColorContext";
import { ColorCard } from "../reusables/ColoredComponents";
import ProjectDetail from "./ProjectDetail";

interface IProject {
  project: {
    title: string;
    desc: string;
    flag: string;
    detail: string;
    source: string;
    categories: string[];
    languages: string[];
    tools: string[];
  };
}

const ProjectCard: React.FC<IProject> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const color = React.useContext(ColorContext);

  return (
    <div>
      <ColorCard color={color} className="project-card" onClick={()=>{setIsOpen(true)}}>
        <p className="title">{project.title}</p>
        <p className="desc">{project.desc}</p>
        <p className="flag">{project.flag}</p> 
        
      </ColorCard>
     
      {isOpen && <ProjectDetail project={project} setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default ProjectCard;
