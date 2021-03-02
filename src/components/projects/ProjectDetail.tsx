import React from "react";
import { ColorContext } from "../reusables/ColorContext";
import { ColorPopup } from "../reusables/ColoredComponents";

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

  setIsOpen: (isOpen: boolean) => void;
}

const ProjectDetail: React.FC<IProject> = ({ project, setIsOpen }) => {
  const color = React.useContext(ColorContext);
  return (
    <div className="project-detail">
      <ColorPopup color={color} className="detail-content">
        <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          close
        </button>
        <p className="title">{project.title}</p>
        <p className="detail">{project.detail}</p>
        <div className="">
          <p>Tools used: </p>
          {project.tools.map((tool) => (
            <button className="lang">{tool}</button>
          ))}
        </div>
       
        <a href={project.source} target="_blank">
          source
        </a>
      </ColorPopup>
    </div>
  );
};

export default ProjectDetail;
