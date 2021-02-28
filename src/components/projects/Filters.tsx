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
  items: Project[];
  setItems: (items: Project[]) => void;
}

const Filters: React.FC<IProjects> = ({ items, setItems }) => {
  //find initial categories, languages and tools
//   const initialCategories: string[] = (projectsData) => {
//       let categories: string[] = [];

//   }



useEffect(() => {
    console.log(items);
},[items]);


 
  const [activeCategories, setActiveCategories] = useState();

  return (
      <div className="">
        <p>display by:</p>
        <button>All</button>
        <div>
        <button>Categories</button>
        
        </div>
        <button>Languages</button>
        <button>Tools</button>
      </div>

  );
};

export default Filters;
