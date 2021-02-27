import React from "react";
import Header from "../layout/Header";
import projectsData from "../../data/projects.json";
import Filters from "../projects/Filters";


const ProjectPage: React.FC = () => {
  return (
    <div className="project-page">
      <Header />
      <main className="content">
        <section className="content-container">
          <Filters  projects={projectsData} />
        </section>
      </main>
    </div>
  );
};

export default ProjectPage;
