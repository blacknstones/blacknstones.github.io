import React, { useCallback, useState } from 'react';

type Props = {
    title: string,
    newTitle?: string,
    icon?: string,
    newIcon?: string,
    index: number,
    setSelectedTab: (index: number) => void
  }
  
  const TabTitle: React.FC<Props> = ({ title, newTitle, icon, newIcon, index, setSelectedTab}) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = useCallback( () => {
      setSelectedTab(index);
      setClicked(true);
    }, [setSelectedTab, index])
  
    return (
      <li className="tab-title">
        <div className="tab-button" onClick={handleClick}>
          <img className="tab-img" src={clicked && newIcon ? newIcon : icon}/>
          <p className="tab-text">{clicked && newTitle ? newTitle : title}</p>
          </div>
      </li>
    )
  }
  
  export default TabTitle;