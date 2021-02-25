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
    useColorTab?: boolean; // use default colorTab theme
}

const Tabs: React.FC<ITabs> = ({children, showDefault, transform, useColorTab}) => {
    const initialSelected = showDefault ? 0 : -1;
    const [selectedTab, setSelectedTab] = useState(initialSelected);

    // useEffect(() => {
    //     console.log("inside Tabs, selectedTab: ", selectedTab);
    //     console.log("transform type:", transform);
    //   }, [selectedTab]);

    return (
    <div className="tabs">
        <div className="tab-titles">
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
                useColor={useColorTab}          
                />
            ))}
        </div>
        {children[selectedTab]}

    </div>);
}

export default Tabs;