import React, { ReactElement, useState } from 'react';
import TabTitle from './TabTitle';

interface TabProps {
    title: string; 
    newTitle?: string;
    icon?: string;
    newIcon?: string; 
}

interface ITabs {
    children: ReactElement<TabProps>[];
    showDefault: boolean;
}

const Tabs: React.FC<ITabs> = ({children, showDefault}) => {
    const initialSelected = showDefault ? 0 : -1;
    const [selectedTab, setSelectedTab] = useState(initialSelected);
    return (
    <div className="tabs">
        <ul className="tab-titles">
            {children.map((item, index) => (
                <TabTitle 
                key={index} 
                title={item.props.title} 
                icon={item.props.icon} 
                newIcon={item.props.newIcon}
                index={index} 
                setSelectedTab={setSelectedTab}
                />
            ))}
        </ul>
        {children[selectedTab]}

    </div>);
}

export default Tabs;