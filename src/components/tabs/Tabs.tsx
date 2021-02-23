import React, { ReactElement, useState } from 'react';
import TabTitle from './TabTitle';

interface TabProps {
    title: string;
}

interface ITabs {
    children: ReactElement<TabProps>[];
}

const Tabs: React.FC<ITabs> = ({children}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
    <div>
        <ul>
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