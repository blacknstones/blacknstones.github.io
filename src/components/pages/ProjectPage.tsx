import React, { useRef, useState } from "react";
import Header from "../layout/Header";
import projectsData from "../../data/projects.json";
import Filters from "../projects/Filters";
import randomColor from "randomcolor";
import { ColorContext } from "../reusables/ColorContext";
import { ColorButton } from "../reusables/ColoredComponents";
import ProjectCard from "../projects/ProjectCard";

type Project = {
    title: string;
    desc: string;
    flag: string;
    source: string;
    categories: string[];
    languages: string[];
    tools: string[];
  };

const ProjectPage: React.FC = () => {
  const initialColor = randomColor();
  const [color, setColor] = useState<string>(initialColor);
  const colorRef = useRef(color);
  colorRef.current = color;



  const changeColor: () => void = () => {
    const newColor = randomColor();
    setColor(newColor);
  };
  return (
    <div className="project-page">
      <Header />
      <ColorContext.Provider value={colorRef.current}>
        <main className="content">
          <section className="content-container flex">
            <div className="full-layout-container control">
              <Filters data={projectsData} />

              <ColorButton
                className="color-switcher"
                color={color}
                onClick={changeColor}
              >
                Color
              </ColorButton>
            </div>

          </section>
        </main>
      </ColorContext.Provider>
    </div>
  );
};

export default ProjectPage;
