import React, { useState } from "react";
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
  projects: Project[];
}

const Filters: React.FC<IProjects> = ({ projects }) => {
  //find initial categories, languages and tools


  const [items, setItems] = useState(projects); // rendered items
  const [activeCategories, setActiveCategories] = useState();

  return (
    <div>
      <div className="layout-container">
        <p>display by:</p>
        <button>All</button>
        <button>Categories</button>
        <button>Languages</button>
        <button>Tools</button>
      </div>

      <div className="layout-container projects">
        {items.map((item) => (
          <ProjectCard project={item} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
