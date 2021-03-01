import React, { useCallback, useEffect, useState } from "react";
import FilterButton from "./FilterButton";
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

type Level = "category" | "language" | "tool";

interface IProjects {
  data: Project[];
}

interface Filters {
    categories : {
        options: string[],
        selected: string[]
    },
    languages: {
        options: string[],
        selected: string[]
    },
    tools: {
        options: string[],
        selected: string[]
    }
}

const findLangOptions = (items: Project[]) => {
    const newLangs: string[] = [];
    items.forEach(item => {
        item.languages.forEach(lang => {
            if (!newLangs.some(option => option === lang)) {
               newLangs.push(lang);
            }
        });
    });
    return newLangs;

}

const findToolOptions = (items: Project[]) => {
    const newTools: string[] = [];
    items.forEach(item => {
        item.tools.forEach(tool => {
            if (!newTools.some(option => option === tool)) {
               newTools.push(tool);
            }
        });
    });
    return newTools;

}

const initializeFilters = (items: Project[]) => {
    const filters: Filters = {
        categories: {
            selected: [],
            options: ["frontend", "backend", "design"]
        },
        languages: {
            selected: [],
            options: findLangOptions(items)
        },
        tools: {
            selected: [],
            options: findToolOptions(items)
        }
    };

    return filters;
}

const Filters: React.FC<IProjects> = ({ data }) => {
  const [items, setItems] = useState<Project[]>(data);
  const [filters, setFilters] = useState(()=> {
    return initializeFilters(data);
});

//   const onAddFilter = (level: Level, option: string) => {
//     if (level === "category") {
//       // add selected category
      
//       .push(option);

//       // find language and tool options
//     }

//     setFilters(newFilters);
//   };

//   const onRemoveFilter = (level: Level, option: string) => {};

  const filterItems = useCallback((items: Project[], filters: Filters) => {
    // find filtered items
    const filtered_items: Project[] = [];
    items.forEach((item) => {
      if (
        filters.categories.selected &&
        !item.categories.some((category) =>
          filters.categories.selected.includes(category)
        )
      ) {
        return;
      }

      if (
        filters.languages.selected &&
        !item.languages.some((language) =>
          filters.languages.selected.includes(language)
        )
      ) {
        return;
      }

      if (
        filters.tools.selected &&
        !item.tools.some((tool) =>
          filters.tools.selected.includes(tool)
        )
      ) {
        return;
      }

      filtered_items.push(item);
    });

    setItems(filtered_items);
  }, [items, filters]);

  return (
    <div className="">
      <p>display by:</p>
      <button
        onClick={() => {
          setItems(data);
        }}
      >
        All
      </button>
      <div>
        <button>Categories</button>
        {filters.categories.options.map((option) => (
          <FilterButton
            onAddFilter={onAddFilter}
            onRemoveFilter={onRemoveFilter}
            level="category"
            option={option}
          >
            {option}
          </FilterButton>
        ))}
      </div>
      <button>Languages</button>
      <button>Tools</button>

      <div className="full-layout-container projects">
        {items.map((item) => (
          <ProjectCard project={item} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
