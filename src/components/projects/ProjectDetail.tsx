import React from "react";
import { ColorContext } from "../../context/ColorContext";
import { ColorPopup } from "../color/ColoredComponents";

interface IProject {
  project: {
    title: string;
    desc: string;
    flag: string;
    detail: string;
    img: string;
    source: string;
    demo?: string;
    categories: string[];
    languages: string[];
    tools: string[];
  };

  setIsOpen: (isOpen: boolean) => void;
}

const ProjectDetail: React.FC<IProject> = ({ project, setIsOpen }) => {
  const {color} = React.useContext(ColorContext);
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
        <img className="project-img" src={project.img}/>

        <div className="part" id="tools">
          <p>Language: </p>
          <div className="tool-items">
            {project.languages.map((language, index) => <p id="tool" key={index}>{language}</p>)}
          </div>

        </div>

        {(project.tools.length !== 0) && (
          <div className="part" id="tools">
            <p>Tools: </p>
            <div className="tool-items">
                 {project.tools.map((tool, index) => (
              <p id="tool" key={index}>{tool}</p>
            ))}
            </div>
         
          </div>
        )}

        <div className="part" id="source">
          Check out the
          <a href={project.source} target="_blank">
            source code
          </a>
          {project.demo && <span> and<a href={project.demo} target="_blank">demo</a></span>}
        </div>
      </ColorPopup>
    </div>
  );
};

export default ProjectDetail;
