import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  desc: string;
  flag: string;
  source: string;
  categories: string[];
  languages: string[];
  tools: string[];
};

interface IProjects {
  projects: Project[]
}

const Filters: React.FC<IProjects> = ({ projects }) => {
  const [items, setItems] = useState(projects);

  useEffect(() => {
    console.log(items);
  }, []);

  return (
    <div>
      <p>display by:</p>

      <div>
        <button>All</button>
        <button>Categories</button>
        <button>Languages</button>
        <button>Tools</button>
      </div>

      <div>
        {items.map((item) => (
            <ProjectCard project={item}/>
    
        ))}
      </div>
    </div>
  );
};

export default Filters;
