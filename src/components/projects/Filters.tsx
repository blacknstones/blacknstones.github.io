import React, { useState } from 'react';

interface IProjects {
    projects: {
        title: string;
        desc: string;
        flag: string,
        source: string,
        categories: string[];
        languages: string[];
        tools: string[];
    };
}

const Filters: React.FC<IProjects> = ({projects}) => {
    const [items, setItems] = useState();

    return (
    <div>
        <p>display by:</p>
        <div>
            <button>All</button>
            <button>Categories</button>
            <button>Languages</button>
            <button>Tools</button>
            
        </div>
    </div>
    );
};

export default Filters;