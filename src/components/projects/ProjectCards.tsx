import * as React from "react";
import ProjectCard from "./ProjectCard";

type Project = {
    title: string;
    desc: string;
    flag: string;
    detail: string;
    source: string;
    categories: string[];
    languages: string[];
    tools: string[];
  };

type Props = {
items: Project[]
}

const ProjectCards: React.FC<Props> = ({items}) => {
    const [itemMap, setItemMap] = React.useState(items);
return(
    <div className="full-layout-container projects">

    {items.map((item, index) => (
      <ProjectCard project={item} key={index}/>
    ))}
  </div>
);
}

export default ProjectCards;