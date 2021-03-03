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
          className="close-button"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Close
        </button>
        <p className="part" id="title">
          {project.title}
        </p>
        <p className="part" id="detail">
          {project.detail}
        </p>

        {(project.tools != []) && (
          <div className="part" id="tools">
            <p>Tools used: </p>
            <div className="tool-items">
                 {project.tools.map((tool) => (
              <p id="tool">{tool}</p>
            ))}
            </div>
         
          </div>
        )}

        <div className="part" id="source">
          Check the
          <a href={project.source} target="_blank">
            source code
          </a>
        </div>
      </ColorPopup>
    </div>
  );
};

export default ProjectDetail;
