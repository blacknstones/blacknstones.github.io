import React from 'react';

interface IProject {
    project: {
      title: string;
      desc: string;
      flag: string;
      source: string;
      categories: string[];
      languages: string[];
      tools: string[];
    };

    setIsOpen: (isOpen: boolean) => void;
  }

const ProjectDetail: React.FC<IProject> = ({project, setIsOpen}) => {
    return (
    <div>
        <p></p>
        
    </div>
    );
};

export default ProjectDetail;