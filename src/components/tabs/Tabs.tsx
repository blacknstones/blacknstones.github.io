import React, { ReactElement, useEffect, useState } from 'react';
import TabTitle from './TabTitle';

interface TabProps {
    title: string; 
    newTitle?: string;
    icon?: string;
    newIcon?: string; 
    
}

interface ITabs {
    children: ReactElement<TabProps>[];
    showDefault: boolean; // when tabs are not clicked, show the first option 
    transform: "clicked" | "active"; // transform the TabTitle: only when it's active; or after clicked (change will persist) 
}

const Tabs: React.FC<ITabs> = ({children, showDefault, transform}) => {
    const initialSelected = showDefault ? 0 : -1;
    const [selectedTab, setSelectedTab] = useState(initialSelected);

    // useEffect(() => {
    //     console.log("inside Tabs, selectedTab: ", selectedTab);
    //     console.log("transform type:", transform);
    //   }, [selectedTab]);

    return (
    <div className="tabs">
        <ul className="tab-titles">
            {children.map((item, index) => (
                <TabTitle 
                key={index} 
                title={item.props.title} 
                newTitle={item.props.newTitle}
                icon={item.props.icon} 
                newIcon={item.props.newIcon}
                index={index} 
                setSelectedTab={setSelectedTab} 
                transformType={transform}    
                active={selectedTab === index ? true : false}            
                />
            ))}
        </ul>
        {children[selectedTab]}

    </div>);
}

export default Tabs;