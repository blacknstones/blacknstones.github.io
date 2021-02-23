import React, { ReactElement, useState } from 'react';
import TabTitle from './TabTitle';

interface TabProps {
    title: string
}

interface ITabs {
    children: ReactElement<TabProps>[];
}

const Tabs: React.FC<ITabs> = ({children}) => {
    const [selectedTab, setSelectedTab] = useState(-1);
    return (
    <div className="tabs">
        <ul className="tab-titles">
            {children.map((item, index) => (
                <TabTitle 
                key={index} 
                title={item.props.title} 
                index={index} 
                setSelectedTab={setSelectedTab}
                />
            ))}
        </ul>
        {children[selectedTab]}

    </div>);
}

export default Tabs;