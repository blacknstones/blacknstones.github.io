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

interface Filters {
    categories : {
        options: string[],
        selected: string[] | null
    },
    languages: {
        options: string[],
        selected: string[] | null
    },
    tools: {
        options: string[],
        selected: string[] | null
    }
}

const initializeFilters = (items: Project[]) => {
    let filters: Filters = {
        categories: {
            selected: null,
            options: []
        },
        languages: {
            selected: null,
            options: []
        },
        tools: {
            selected: null,
            options: []
        }
    };

    items.forEach(item => {
        item.categories.forEach(category => {
            if (!filters.categories.options.some(option => option === category)) {
                filters.categories.options.push(category);
            }
        });

        item.languages.forEach(lang => {
            if (!filters.languages.options.some(option => option === lang)) {
                filters.languages.options.push(lang);
            }
        });

        item.tools.forEach(tool => {
            if (!filters.tools.options.some(option => option === tool)) {
                filters.tools.options.push(tool);
            }
        })
    });

    return filters;

}

const Filters: React.FC<IProjects> = ({ items, setItems }) => {
     
  const [filters, setFilters] = useState(()=> {
      return initializeFilters(items);
  });






useEffect(() => {
    const prop = items.map(item => {
        Object.entries(item)
    })
    console.log(prop);
},[items]);


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
