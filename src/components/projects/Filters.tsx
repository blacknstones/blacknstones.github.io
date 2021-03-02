import React, { useCallback, useEffect, useState } from "react";
import { ColorContext } from "../reusables/ColorContext";
import { ColorFilterButton, ColorPrompt } from "../reusables/ColoredComponents";
import FilterButton from "./FilterButton";
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

type Level = "category" | "language" | "tool";

interface IProjects {
  data: Project[];
}

interface Filters {
  categories: {
    options: string[];
    selected: string[];
  };
  languages: {
    options: string[];
    selected: string[];
  };
  tools: {
    options: string[];
    selected: string[];
  };
}

const findLangOptions = (items: Project[]) => {
  const newLangs: string[] = [];
  items.forEach((item) => {
    item.languages.forEach((lang) => {
      if (!newLangs.some((option) => option === lang)) {
        newLangs.push(lang);
      }
    });
  });
  return newLangs;
};

const findToolOptions = (items: Project[]) => {
  const newTools: string[] = [];
  items.forEach((item) => {
    item.tools.forEach((tool) => {
      if (!newTools.some((option) => option === tool)) {
        newTools.push(tool);
      }
    });
  });
  return newTools;
};

// initialize filter
const initializeFilters = (items: Project[]) => {
  const filters: Filters = {
    categories: {
      selected: [],
      options: ["frontend", "backend", "design"],
    },
    languages: {
      selected: [],
      options: findLangOptions(items),
    },
    tools: {
      selected: [],
      options: findToolOptions(items),
    },
  };

  return filters;
};

// find items with given filter
const filterItems = (items: Project[], filters: Filters) => {
  const cats: string[] = filters.categories.selected;
  const langs: string[] = filters.languages.selected;
  const tools: string[] = filters.tools.selected;

  const filteredItems: Project[] = [];

  items.forEach((item) => {
    if (!cats.every((cat) => item.categories.includes(cat))) {
      return;
    }

    if (!langs.every((lang) => item.languages.includes(lang))) {
      return;
    }

    if (!tools.every((tool) => item.tools.includes(tool))) {
      return;
    }

    filteredItems.push(item);
  });

  // todo: for langs and tools
  console.log("filtered items:", filteredItems);
  return filteredItems;
};

// find filter options with given items

const Filters: React.FC<IProjects> = ({ data }) => {
  const [items, setItems] = useState<Project[]>(data);
  const [filters, setFilters] = useState(() => {
    return initializeFilters(data);
  });

  const color = React.useContext(ColorContext);

  const onAddFilter = useCallback(
    (level: Level, option: string) => {
      const newFilters: Filters = Object.assign({}, filters);

      if (level === "category") {
        // add selected category, reset lang and tool
        newFilters.categories.selected.push(option);
        newFilters.languages.selected = [];
        newFilters.tools.selected = [];

        // get filtered items
        const newItems: Project[] = filterItems(data, newFilters);
        // console.log("newItems:", newItems);
        setItems(newItems);

        // update filters
        newFilters.languages.options = findLangOptions(newItems);
        newFilters.tools.options = findToolOptions(newItems);
        setFilters(newFilters);
      }

      if (level === "language") {
        newFilters.languages.selected.push(option);
        newFilters.tools.selected = [];

        const newItems: Project[] = filterItems(data, newFilters);
        setItems(newItems);

        newFilters.tools.options = findToolOptions(newItems);
        setFilters(newFilters);
      }

      if (level === "tool") {
        newFilters.tools.selected.push(option);
        const newItems: Project[] = filterItems(data, newFilters);
        setItems(newItems);
      }
    },
    [filters, items]
  );

  const onRemoveFilter = useCallback(
    (level: Level, option: string) => {
      const newFilters: Filters = Object.assign({}, filters);
      if (level === "category") {
        // remove selected category
        const newCats = newFilters.categories.selected.filter(
          (el) => el != option
        );
        newFilters.categories.selected = newCats;

        // get filtered items
        const newItems: Project[] = filterItems(data, newFilters);
        setItems(() => newItems);

        // update filter
        newFilters.languages.options = findLangOptions(newItems);
        newFilters.tools.options = findToolOptions(newItems);

        setFilters(newFilters);
      }

      if (level === "language") {
        const newLangs = newFilters.languages.selected.filter(
          (el) => el != option
        );
        newFilters.languages.selected = newLangs;

        const newItems: Project[] = filterItems(data, newFilters);
        setItems(() => newItems);

        newFilters.tools.options = findToolOptions(newItems);
      }

      if (level === "tool") {
        const newTools = newFilters.tools.selected.filter((el) => el != option);
        newFilters.tools.selected = newTools;

        const newItems: Project[] = filterItems(data, newFilters);
        setItems(() => newItems);
      }
    },
    [items, filters]
  );

  useEffect(() => {
    console.log("items:", items);
    console.log("filters:", filters);
  }, [items, filters]);

  return (
    <div className="filters">
      <div className="filter-control full-layout-container">
          <div className="button-group">
          <ColorPrompt color={color} className="prompt">Display by</ColorPrompt>
        <ColorFilterButton
          className="button filter-button"
          color={color}
          onClick={() => {
            setItems(data);
            setFilters(() => {
              return initializeFilters(data);
            });
          }}
        >
          All
        </ColorFilterButton>
          </div>
       
        <div className="button-group">
        <ColorPrompt color={color} className="prompt">Categories</ColorPrompt>
          {filters.categories.options.map((option) => (
            <FilterButton
              key={option}
              onAddFilter={onAddFilter}
              onRemoveFilter={onRemoveFilter}
              level="category"
              option={option}
              selected={filters.categories.selected}
            >
              {option}
            </FilterButton>
          ))}
        </div>

        <div className="button-group">
        <ColorPrompt color={color} className="prompt">Languages</ColorPrompt>
          {filters.languages.options.map((option) => (
            <FilterButton
              key={option}
              onAddFilter={onAddFilter}
              onRemoveFilter={onRemoveFilter}
              level="language"
              option={option}
              selected={filters.languages.selected}
            >
              {option}
            </FilterButton>
          ))}
        </div>
        <div className="button-group">
          <ColorPrompt color={color} className="prompt">Tools</ColorPrompt>
          {filters.tools.options.sort().map((option) => (
            <FilterButton
              key={option}
              onAddFilter={onAddFilter}
              onRemoveFilter={onRemoveFilter}
              level="tool"
              option={option}
              selected={filters.tools.selected}
            >
              {option}
            </FilterButton>
          ))}
        </div>
      </div>

      <div className="full-layout-container projects">
        {items.map((item) => (
          <ProjectCard project={item} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
