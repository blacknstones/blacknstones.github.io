import React, { useRef, useState } from "react";
import Header from "../layout/Header";
import projectsData from "../../data/projects.json";
import Filters from "../projects/Filters";
import ColorSwitcher from "../color/ColorSwitcher";

const ProjectPage: React.FC = () => {

  return (
    <div className="project-page">
      <Header />

        <main className="content">
          <section className="content-container">
           <ColorSwitcher/>
            <Filters data={projectsData} />
          </section>
        </main>

    </div>
  );
};

export default ProjectPage;
