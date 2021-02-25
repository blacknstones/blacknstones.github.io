import React from 'react';
import Header from '../layout/Header';
import projectsData from "../../data/projects.json";
import Filters from '../projects/Filters';

type Project = {
    title: string;
        desc: string;
        flag: string,
        source: string,
        categories: string[];
        languages: string[];
        tools: string[];
}

const ProjectPage: React.FC = () => {
    const projects: Project[]  = projectsData;
    return (
        <div className="project-page">
            <Header/>
            <main className="content">
                <section className="content-container">
                    <Filters projects={projects}/>
                </section>
                

            </main>
        </div>
    );
}

export default ProjectPage;